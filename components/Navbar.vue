<template>
    <nav class="w-full bg-gray-900 px-4">
        <div class="flex items-center justify-between py-4 max-w-3xl m-auto text-white font-semibold">
            <NuxtLink to="/">Home</NuxtLink>
            <ul class="flex items-center">
                <NuxtLink class="mx-4" to="/login">Login</NuxtLink>
                <NuxtLink class="mx-4" to="/signup">Signup</NuxtLink>
                <form @submit.prevent="handleLogout">
                    <button type="submit" class="ml-4">Logout</button>
                </form>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import PocketBase from 'pocketbase';
    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);
    function handleLogout(){
        pb.authStore.clear();
        navigateTo('/login')
    }
</script>