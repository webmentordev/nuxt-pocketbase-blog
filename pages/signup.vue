<template>
    <div class="max-w-lg m-auto mt-6 rounded-lg">
        <h1 class="text-3xl mb-3 font-semibold">Register Account!</h1>
        <form @submit.prevent="signupHandler" class="p-6 bg-gray-100 flex flex-col">
            <input type="text" v-model="username" placeholder="Username"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">

            <input type="text" v-model="name" placeholder="Full Name"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            
            <input type="email" v-model="email" placeholder="Email Address"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            
            <input type="password" v-model="password" placeholder="Password"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            
            <input type="password" v-model="confirm_password" placeholder="Confirm Password"
            class="p-3 bg-white border border-gray-100 mb-3 rounded-md">
            
            <button type="submit" class="bg-blue-600 text-white py-2 font-semibold">Register</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';

    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);

    const email = ref("");
    const name = ref("");
    const username = ref("");
    const password = ref("");
    const confirm_password = ref("");

    async function signupHandler(){
        if(password.value === confirm_password.value){
            const record = await pb.collection('users').create({
                username: username.value,
                email: email.value,
                name: name.value,
                password: password.value,
                passwordConfirm: confirm_password.value,
            });
        }else{
            console.log([
                username.value,
                email.value,
                password.value,
                confirm_password.value
            ])
        }
    }
</script>