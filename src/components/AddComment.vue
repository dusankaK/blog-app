<template>
  <div>
    <form @submit.prevent="addComment">
      <div form-group>
        <label for="title"> Add comment </label>
        <input
          v-model="newComment.text"
          type="text"
          class="form-control"
          style="width: 40%;"
          placeholder="Add new Comment"
          required
        />
      </div>
      <div>
        <button type="submit" class="btn btn-success mt-3">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { postsService } from "../services/PostsService"

export default {
  data() {
    return {
      newComment: {}
    }
  },

  props: {
    postId: {
      type: Number
    }
  },

  methods: {
    addComment() {
      postsService.addComment(this.newComment, this.postId)
        .then(response => {
            this.$emit("onAddComment", response.data)
      })
    }
  }
};
</script>