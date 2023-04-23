<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
        <Post :aktarilan="item" v-for="item in yaziListesi" :is-admin="isAdmin" :key="item.id"/>
    </div>
</template>
<script>
    import Post from "../posts/Post.vue"
    export default{
        components:{
            Post
        },
        props:{
            isAdmin:{
                type:Boolean,
                required:false,
                default:false,
            },
            yaziListesi:{
                type:Object,
                required:false,
            }
        }
    }
</script>