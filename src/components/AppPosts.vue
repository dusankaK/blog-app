<template>
    <div>
        <div class="card mt-4" v-for="post in posts.slice(0).reverse()" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }} - {{ post.createdAt | diffForHumans }} minutes ago</h5>
                <button class="btn btn-default btn-sm" @click="viewSinglePost(post.id)">View Post</button>
                <button class="btn btn-warning btn-sm ml-3" @click="editPost(post.id)">Edit Post</button>
                <button class="btn btn-danger btn-sm ml-3" @click="deletePost(post.id)">Delete</button>
                
                    <span class="badge">Number of comments: {{ post.comments.length }}</span>
                
            </div>
        </div>
    </div>
</template>

<script>
import { postsService } from '../services/PostsService'
 import { dateMix } from '../mixins/DateMixin.js'

export default {
    mixins:[dateMix],

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

    watch: {
        posts() {
            postsService.getAll()
                .then(response => {
                    this.posts = response.data
            })
        }
    },

    methods: {
        deletePost(id) {
            postsService.delete(id)
        },
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