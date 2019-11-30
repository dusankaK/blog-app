<template>
    <div class="row">
        <div class="card col-md-4 mt-4" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { postsService } from '../services/PostsService'

export default {
    data() {
        return {
            posts: Array
        }
    },

    created() {
        postsService.getAll()
            .then(response =>
                this.posts = response.data)
    }
}
</script>

<style scoped>

</style>