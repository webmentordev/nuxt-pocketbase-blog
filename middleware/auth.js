import PocketBase from 'pocketbase';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);
    if(pb.authStore.model === null){
        return navigateTo('/login');
    }
})