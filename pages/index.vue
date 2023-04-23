<template>
  <div>
    <PostList :yaziListesi="yazilar" />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList"
export default {
  name: 'IndexPage',
  components: {
    PostList,
  },
  data() {
    return {

    }
  },
  // asyncData(context,callback){
  //   setTimeout(()=>{
  //     callback(null,{
  //       yazilar: [
  //       {
  //         id: 21,
  //         baslik: "Başlık 21",
  //         altBaslik: "Alt Başlık 21",
  //         yazar: "Yazar 21",
  //       },
  //       {
  //         id: 22,
  //         baslik: "Başlık 22",
  //         altBaslik: "Alt Başlık 22",
  //         yazar: "Yazar 22",
  //       },
  //       {
  //         id: 23,
  //         baslik: "Başlık 23",
  //         altBaslik: "Alt Başlık 23",
  //         yazar: "Yazar 23",
  //       },
  //     ]
  //     })
  //   },1000)
  // }

  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        yazilar: [
          {
            id: 421,
            baslik: "Başlık 421",
            altBaslik: "Alt Başlık 421",
            yazar: "Yazar 421",
          },
          {
            id: 22,
            baslik: "Başlık 422",
            altBaslik: "Alt Başlık 422",
            yazar: "Yazar 422",
          },
          {
            id: 423,
            baslik: "Başlık 423",
            altBaslik: "Alt Başlık 423",
            yazar: "Yazar 423",
          },
        ]
      })
    }
    )
      .then(data=>{
        return data
      })
      .catch(e=>{
        context.error(e);
      })


  }
}
</script>

<style scoped></style>

