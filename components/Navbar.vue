<template>
    <nav class="w-full bg-gray-900 px-4">
        <div class="flex items-center justify-between py-4 max-w-3xl m-auto text-white font-semibold">
            <NuxtLink to="/">Home</NuxtLink>
            <ul class="flex items-center">
                <NuxtLink class="mx-4" to="/blogs">Blogs</NuxtLink>
                <NuxtLink v-if="!state" class="mx-4" to="/login">Login</NuxtLink>
                <NuxtLink v-if="!state" class="mx-4" to="/signup">Signup</NuxtLink>
                <form @submit.prevent="handleLogout" v-if="state">
                    <button type="submit" class="ml-4">Logout</button>
                </form>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import PocketBase from 'pocketbase';

    const isAuth = ref(false)
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.localApiServer);
    const state = loginStateManager();

    onMounted(() => {
        if(pb.authStore.model !== null){
            state.value = pb.authStore.model;
        }
    });
    
    function handleLogout(){
        isAuth.value = false;
        pb.authStore.clear();
        state.value = null;
        navigateTo('/login')
    }
</script>