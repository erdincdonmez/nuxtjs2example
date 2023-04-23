<template>
    <PostList :yazi-listesi="yazilar"></PostList>
</template>
<script>
import PostList from "../../components/posts/PostList.vue"
export default {
    components: {
        PostList
    },
    data() {
        return {
            // yazilar: [
            //     {
            //         id: 2021,
            //         baslik: "Başlık 2021",
            //         altBaslik: "Alt Başlık 2021",
            //         yazar: "Yazar 2021",
            //     },
            //     {
            //         id: 2022,
            //         baslik: "Başlık 2022",
            //         altBaslik: "Alt Başlık 2022",
            //         yazar: "Yazar 2022",
            //     },
            //     {
            //         id: 2023,
            //         baslik: "Başlık 2023",
            //         altBaslik: "Alt Başlık 2023",
            //         yazar: "Yazar 2023",
            //     },
            //     {
            //         id: 2024,
            //         baslik: "Başlık 2024",
            //         altBaslik: "Alt Başlık 2024",
            //         yazar: "Yazar 2024",
            //     },
            // ]
        }
    },
    asyncData(context,callback){
        setTimeout(()=>{
            //callback(new error(),{
            callback(null,{
                yazilar: [
                {
                    id: 52021,
                    baslik: "Başlık 52021",
                    altBaslik: "Alt Başlık 52021",
                    yazar: "Yazar 52021",
                },
                {
                    id: 52022,
                    baslik: "Başlık 52022",
                    altBaslik: "Alt Başlık 52022",
                    yazar: "Yazar 52022",
                },

            ]
            })
        },1000)
    }
}
</script>