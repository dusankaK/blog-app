<template>
    <div>
        <h2 class="text-center mt-4 ">Add new post</h2>
            <form @submit.prevent="onSubmit" @reset="resetForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="title" class="form-control" id="title" aria-describedby="emailHelp" 
                    placeholder="Title" v-model="newPost.title">
                </div>
                <div class="form-group">
                    <label for="title">Write post</label>
                    <textarea rows="6" cols="50" class="form-control" id="text"
                    placeholder="Write post..." v-model="newPost.text"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" name="submit" class="btn btn-success">Submit</button>
                    <button type="reset" name="reset" class="btn btn-danger ml-3">Reset</button>
                    
                </div>
            </form>
</div>
</template>

<script>
import moment from 'moment'
import { postsService } from '../services/PostsService'



export default {
    data() {
        return {
            newPost: {}
        }
    },

    methods: {
        onSubmit() {
            this.newPost.createdAt = moment()
            postsService.add(this.newPost)
            this.$router.push('/posts')
        },

        resetForm() {
            this.newPost = {}
        }
    }
}
</script>

<style scoped>

</style>