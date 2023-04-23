<template>
    <div>
        <h1>Düzenle</h1>
        <post-form :isUpdate="true"></post-form>
    </div>
</template>
<script>
import PostForm from "../../../components/admin/PostForm"
export default {
    components: {
        PostForm,
    }
}
</script>