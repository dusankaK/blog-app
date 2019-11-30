<template>
    <div class="container">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text"> {{ post.text }}</p>
        </div>
    </div>
</template>

<script>
import { postsService } from '../services/PostsService'

export default {
    data() {
        return {
            post: {}
        }
    },

    created() {
        postsService.get(this.$route.params.id)
            .then(response => {
                this.post = response.data
            })
                
    }
    
}
</script>

<style scoped>

</style>