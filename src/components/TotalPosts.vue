<template>
  <div class="text-center">
    {{total}}
  </div>
</template>

<script>
export default {
  name: 'TotalPosts',
  data() {
    return {
      total: 0
    }
  },
  created() {
    // Get request using fetch with error handling
    fetch("http://localhost:3000/posts/totalpublishedposts/")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.total = data.totalPublishedPost;
    })
    .catch(err => {
      this.errorMessage = err;
      console.error("There was an error !", err);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
