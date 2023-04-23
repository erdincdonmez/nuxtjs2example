<template>
    <PostDetail :aktarilan="giden"/>
</template>
<script>
import PostDetail from "../../../components/posts/PostDetail"
export default{
    components:{
        PostDetail,
    },
    asyncData(context,callback){
        setTimeout(()=>{
            callback(null,{
                giden:
                {
                    id: 2021,
                    baslik: "Başlık 2021, postid:" + context.params.postid,
                    altBaslik: "Alt Başlık 2021",
                    yazar: "Yazar 2021",
                },
            
            })
        },1000)

    }
}
</script>