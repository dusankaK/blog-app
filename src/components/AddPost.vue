<template>
    <div>
        <h2 class="text-center mt-4 ">Add new post</h2>
            <form @submit.prevent="onSubmit" @reset="resetForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="title" class="form-control" id="title" aria-describedby="emailHelp" 
                    placeholder="Title" v-model="newPost.title">

                    <div v-if="errors.title" class="alert alert-danger">
                        <p>Post title is required with at least 2 characters.</p>
                    </div>

                </div>
                <div class="form-group">
                    <label for="text">Write post</label>
                    <textarea rows="6" cols="50" class="form-control" id="text"
                    placeholder="Write post..." v-model="newPost.text"></textarea>

                    <div v-if="errors.text" class="alert alert-danger">
                        <p>Post body is limited to 300 characters.</p>
                    </div>

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
            newPost: {},
            errors: {
                title: false,
                text: false
            }
        }
    },

    methods: {
        onSubmit() {
            if(this.hasErrors()) {
                return
            }
            this.newPost.createdAt = moment()
            postsService.add(this.newPost)
            this.$router.push({ name: 'posts'})
        },

        resetForm() {
            this.newPost = {}
        },

        hasErrors() {
            let errorCount = 0
            if (!this.newPost.title || this.newPost.title.length < 2) {
                this.errors.title = true
                errorCount++ 
            } else { 
                this.errors.title = false
                }
            if (!this.newPost.text || this.newPost.text.length > 300) {
                this.errors.text = true
                errorCount++ 
            } else {
                this.errors.text = false 
                }

            return errorCount
        }
    }
}
</script>

<style scoped>

</style>