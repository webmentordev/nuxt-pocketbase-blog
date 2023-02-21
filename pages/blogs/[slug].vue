<template>
    <div class="max-w-3xl m-auto px-4 py-6">
        <div class="p-6 rounded-md bg-gray-100 w-full" v-if="record">
            <img v-if="record.image" class="rounded-lg mb-6" :src="`http://127.0.0.1:8090/api/files/posts/`+record.id+'/'+record.image" alt="">
            <h1 class="mb-2 font-bold">{{ record.name }}</h1>
            <p class="text-gray-700 mb-3">{{ record.body }}</p>
        </div>
    </div>
</template>

<script setup>
    import PocketBase from 'pocketbase';
    import { ref } from 'vue';

    const record = ref({});

    const { slug } = useRoute().params;

    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.localApiServer);
    
    const blogData = await pb.collection('posts').getFullList(1, {
        filter: "slug='"+slug+"'",
    });

    if(blogData.length){
        record.value = blogData[0];
    }else{
        throw createError({ statusCode: 404, statusMessage: "Blog Not Found!", fatal: true })
    }

</script>
