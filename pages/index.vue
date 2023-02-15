<template>
    <div class="px-3">
        <h1 class="font-bold mt-3 text-3xl mb-6">Welcome to HomePage!</h1>
        <form @submit.prevent="postHandler">
            <input type="text" v-model="name" placeholder="Post Title" class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full">
            <textarea v-model="body" cols="30" rows="6" placeholder="Write message!" class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full"></textarea>
            <input type="text" @keydown.enter.prevent="handleKeyDown" v-model="add_tag" placeholder="Tags (hit enter)" class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full">
            <ul class="flex mb-3 flex-wrap" v-if="tags.length">
                <li v-for="(item, index) in tags" :key="index" @click.prevent="removeHandler(index)" class="mx-2 mb-2 p-3 rounded-full cursor-pointer bg-gray-100">#{{ item }}</li>
            </ul>
            <button type="submit" class="bg-blue-600 text-white py-3 font-semibold w-fit px-6 rounded-md">Post</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';

    definePageMeta({
        middleware: ["auth"]
    });

    const name = ref("");
    const body = ref("");
    const add_tag = ref("");
    const tags = ref([]);

    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.localApiServer);

    async function postHandler(){
        await pb.collection('posts').create({
            name: name.value,
            body: body.value,
            slug: name.value.replace(/\s+/g, '-').toLowerCase()
        });
        setTimeout(() => {
                failedMessage.value = ""
        }, 4000)
    }

    function handleKeyDown(){
        if(!tags.value.includes(add_tag.value)){
            add_tag.value = add_tag.value.replace(/\s/, '');
            tags.value.push(add_tag.value);
        }
        add_tag.value = "";
    }

    function removeHandler(tag){
        tags.value.splice(tag, 1);
    }
</script>