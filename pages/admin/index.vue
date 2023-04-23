<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
        </div>
        <PostList :is-admin="true" :yaziListesi="liste" />
    </div>
</template>
<script>
import PostList from "../../components/posts/PostList.vue"
export default {
    layout: "admin",
    components: {
        PostList
    },
    asyncData(context, callback) {
        callback(null, {
            liste: [
                {
                    id: 3021,
                    baslik: "Başlık 3021, postid:" + context.params.postid,
                    altBaslik: "Alt Başlık 3021",
                    yazar: "Yazar 3021",
                },
                {
                    id: 3021,
                    baslik: "Başlık 3021, postid:" + context.params.postid,
                    altBaslik: "Alt Başlık 3021",
                    yazar: "Yazar 3021",
                },
            ]
        })
    }
}
</script>