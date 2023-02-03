import PocketBase from 'pocketbase';
export const loginStateManager = () => useState('login_state', () => {
    const config = useRuntimeConfig()
    const pb = new PocketBase(config.public.localApiServer);
    return pb.authStore.model;
})