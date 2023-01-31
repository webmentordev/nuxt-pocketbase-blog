<template>
    <div class="max-w-3xl m-auto px-4 py-6">
        <h1 class="font-bold mt-3 text-3xl mb-3">Welcome to HomePage!😁</h1>
        <div class="bg-gray-100 p-3 rounded-md mb-6">You are logged in!</div>
        <form @submit.prevent="postHandler">
            <input type="text" v-model="name" placeholder="Post Title"
            class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full">
            <textarea v-model="body" cols="30" rows="6" placeholder="Write message!"
            class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full"></textarea>
            <button type="submit" class="bg-blue-600 text-white py-2 font-semibold w-fit px-6 rounded-md">Post</button>
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

    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);

    async function postHandler(){
        const record = await pb.collection('posts').create({
            name: name.value,
            body: body.value,
            slug: name.value.replace(/\s+/g, '-').toLowerCase()
        });
        console.log(record)
    }
</script>