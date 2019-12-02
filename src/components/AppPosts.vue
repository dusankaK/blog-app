<template>
    <div>
        <div class="card mt-4" v-for="post in posts.slice(0).reverse()" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <button class="btn btn-default btn-sm" @click="viewSinglePost(post.id)">View Post</button>
                <button class="btn btn-danger btn-sm ml-3" @click="editPost(post.id)">Edit Post</button>
                
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
    },

    methods: {
        viewSinglePost(id) {
            this.$router.push({ name: 'single-post', params: { id }})
        },
        editPost(id) {
            this.$router.push({ name: 'edit', params: { id }})
        }
    }
}
</script>

<style scoped>

</style>