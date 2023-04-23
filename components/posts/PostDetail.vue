<template>
    <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">

        <blockquote class="blockquote">
            <h3>{{ aktarilan.baslik }}</h3>
            <p>{{ aktarilan.altBaslik }}</p>
            <p class="mb-0">{{ aktarilan.yazi }}</p>
        <footer class="blockquote-footer">Yazar <cite title="Source Title">{{ aktarilan.yazar}}</cite></footer>
    </blockquote>
</div>
</template>
<script>
export default{
    props:{
        aktarilan:{
            required:false,
            type:Object,
            
        }
    }
}
</script>
