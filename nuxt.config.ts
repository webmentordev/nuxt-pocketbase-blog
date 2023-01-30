// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: "Nuxt - Pocketbase",
            meta: [
                { name: "description", content: "NuxtJS with Pocktbase backend!" }
            ]
        }
    },
    runtimeConfig: {
        public: {
            localApiServer: "http://127.0.0.1:8090"
        }
    }
})
