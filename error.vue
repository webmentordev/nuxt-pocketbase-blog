<template>
    <div class="flex h-screen w-full items-center justify-center">
        <div class="mt-7 max-w-sm mx-auto text-center">
            <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-7 text-6xl">Ooops.</p>
            <p class="mt-7">{{ error.message }}</p>
            <button class="btn my-7" @click="handleClearError">Go Home...</button>
        </div>
    </div>
</template>

<script setup>
    defineProps([
        'error'
    ])
    const handleClearError = () => clearError( { redirect: '/' })
</script>