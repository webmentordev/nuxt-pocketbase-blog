<template>
    <div class="max-w-3xl m-auto px-4 py-6">
        <div class="p-6 rounded-md bg-gray-100 w-full mb-3" v-if="records" v-for="record in records" :key="record.id">
            <h1 class="mb-2 font-bold text-lg">{{ record.name }}</h1>
            <p class="text-gray-700 mb-3">{{ record.body }}</p>
            <div class="flex items-center">
                <NuxtLink :to="`/blogs/${record.slug}`" class="py-2 px-6 mr-3 h-fit rounded-md text-white bg-blue-600 font-semibold inline-block">Read</NuxtLink>
                <ul class="flex flex-wrap">
                    <li v-for="tag in record.expand['tags(post_id)']" class="mx-2 p-3 rounded-full cursor-pointer bg-white">{{ tag.tag }}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import PocketBase from 'pocketbase';

    import { ref } from 'vue';
    const records = ref([]);


    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.localApiServer);
    
    onMounted(async () => {
        records.value = await pb.collection('posts').getFullList(200, {
            sort: '-created',
            expand: 'tags(post_id)'
        });
        // pb.collection('posts').subscribe('*', async ({action, record}) => {
        //     if(action == 'create'){
        //         records.value = [...records.value, record].reverse();
        //     }
        // });
    })

    // onBeforeUnmount(() => {
    //     pb.collection('posts').unsubscribe('*');
    // })

</script>
