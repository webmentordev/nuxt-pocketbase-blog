<template>
    <div class="px-3">
        <h1 class="font-bold mt-3 text-3xl mb-6">Welcome to HomePage!</h1>
        <form @submit.prevent="postHandler">
            <p class="py-2 text-red-600" v-if="message">{{ message }}</p>
            <input type="text" v-model="name" placeholder="Post Title" class="p-3 border border-gray-200 bg-gray-100 mb-3 rounded-md w-full">

            <p class="py-2 text-red-600" v-if="errors.name">{{ errors.name }}</p>
            
            <textarea v-model="body" cols="30" rows="6" placeholder="Write message!" class="p-3 border border-gray-200 bg-gray-100 mb-1 rounded-md w-full"></textarea>
            <p class="py-2 text-red-600" v-if="errors.body">{{ errors.body }}</p>

            <input type="text" @keydown.enter.prevent="handleKeyDown" v-model="add_tag" placeholder="Tags (hit enter)" class="p-3 border border-gray-200 bg-gray-100 mb-2 rounded-md w-full">
            <p class="py-2 text-red-600" v-if="errors.tags">{{ errors.tags }}</p>
            
            
            <ul class="flex mb-3 flex-wrap" v-if="tags.length">
                <li v-for="(item, index) in tags" :key="index" @click.prevent="removeHandler(index)" class="mx-2 mb-2 p-3 rounded-full cursor-pointer bg-gray-100">#{{ item }}</li>
            </ul>
            <input type="file" @change="onImageChange" id="image" class="p-3 border border-gray-200 bg-gray-100 mb-1 rounded-md w-full" accept="image/*">
            <button type="submit" class="bg-blue-600 text-white py-3 font-semibold w-fit px-6 rounded-md">{{ isPosting ? 'Posting..' : 'Post'}}</button>
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
    const image = ref(null);
    const isPosting = ref(false);
    const message = ref("");
    const add_tag = ref("");
    const tags = ref([]);
    const errorCount = ref(0);
    const errors = ref({
        name: "",
        body: "",
        tags: ""
    });

    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.localApiServer);

    const formData = new FormData();
    
    function onImageChange(e){
      image.value = e.target.files[0];
    }

    async function postHandler(){
        isPosting.value = true;
        if(name.value == ""){
            errors.value.name = "Name must not be empty!"
            errorCount.value++;
        }
        if(body.value == ""){
            errors.value.body = "Body must not be empty!"
            errorCount.value++;
        }
        if(tags.value.length == 0){
            errors.value.tags = "Atleast 1 tag is required"
            errorCount.value++;
        }

        if(errorCount.value == 0){
            formData.append("name", name.value);
            formData.append("body", body.value);
            formData.append("slug", name.value.replace(/\s+/g, '-').toLowerCase());
            if(image.value != null){
                formData.append("image", image.value, image.value.name);
            }
            await pb.collection('posts').create(formData).then(async (response) => {
                for(let i = 0; i < tags.value.length; i++){
                    const data = {
                        "post_id": response.id,
                        "tag": tags.value[i]
                    };
                    await pb.collection('tags').create(data);
                }
            });
              
            isPosting.value = false;

            name.value = "";
            body.value = "";
            setTimeout(() => {
                    message.value = ""
            }, 4000)
        }else{
            message.value = "There is an error!";
            isPosting.value = false;
            errorCount.value = 0
        }
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