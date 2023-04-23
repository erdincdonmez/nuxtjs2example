<template>
    <div class="card mr-3 mb-3 card-success" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ aktarilan.baslik }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ aktarilan.altBaslik }}</h6>
            <p class="card-text">{{ aktarilan.yazar }}</p>
            <a v-if="!isAdmin" href="#" @click.prevent="$router.push('/posts/'+aktarilan.id)" class="btn btn-outline-info btn-sm">Görüntüle</a>
            <div v-else>
                <a href="#" @click.prevent="$router.push('/admin/'+aktarilan.id)" class="btn btn-outline-warning btn-sm">Düzenle</a>
                <a href="#" class="btn btn-outline-danger btn-sm">Sil</a>

            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },
        aktarilan:{
            type:Object,
            required:true,
        }
    }
}
</script>