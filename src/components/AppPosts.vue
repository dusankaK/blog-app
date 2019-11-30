<template>
    <div>
        <div class="card mt-4" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <button class="btn btn-default btn-sm" @click="viewSinglePost(post.id)">View Post</button>
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
        }
    }
}
</script>

<style scoped>

</style>