<template>
    <div class="max-w-lg m-auto mt-6 rounded-lg">
        <h1 class="text-3xl mb-3 font-semibold">Login Account!</h1>
        <form @submit.prevent="loginHandler" class="p-6 bg-gray-100 flex flex-col">
            <input type="email" v-model="email" placeholder="Email Address"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            <input type="password" v-model="password" placeholder="Password"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            <button type="submit" class="bg-blue-600 text-white py-2 font-semibold">Login</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';

    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);

    const email = ref("");
    const password = ref("");

    async function loginHandler(){
        // const authData = await pb.collection('users').authWithPassword(email.value, password.value);
        const authData = await pb.admins.authWithPassword(email.value, password.value);

        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
    }
</script>