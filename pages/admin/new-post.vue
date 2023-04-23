<template>
    <post-form @aktarilan="geleniKaydet"></post-form>
</template>
<script>
    import PostForm from "../../components/admin/PostForm"
    export default{
        components:{
            PostForm,
        },
        methods:{
            geleniKaydet(gelen){
                console.log("NewPost ta gelen");
                console.log(gelen);
            }
        }
    }
</script>
