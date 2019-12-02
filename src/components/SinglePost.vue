<template>
  <div class="container">
      <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Title: {{ post.title }}</h5>
            <p class="card-text">Text: {{ post.text }}</p>
            <span>Posted ad {{post.createdAt | formatDate }}</span>
        </div>
      </div>  
    
    <div v-if="post.comments && post.comments.length">
      <h4>Comments</h4>
      <ul>
        <li v-for="(comment, index) in post.comments" :key="index">
          {{ comment.text }}
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <add-comment :postId="post.id" @onAddComment="pushComment($event)" />
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import AddComment from "./AddComment.vue";
import { dateMix } from "../mixins/DateMixin.js"
export default {
  components: {
    AddComment
  },
  mixins: [dateMix],
  
  data() {
    return {
      post: {}
    }
  },

  created() {
    postsService.get(this.$route.params.id)
        .then(response => {
            this.post = response.data;
    })
  },

  methods: {
    pushComment(comment) {
      this.post.comments.push(comment);
    }
  }
};
</script>