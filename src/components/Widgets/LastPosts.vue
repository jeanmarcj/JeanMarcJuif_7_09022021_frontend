<template>
  <div id="lastPosts">
    <div v-for="post in posts" :key="post.id">
        <div class="d-flex align-items-center pb-1 mb-3">
          <a class="d-block flex-shrink-0" href="#">
            <img class="rounded" src="../assets/icon.png" alt="Post" width="64">
          </a>
          <div class="ps-2 ms-1">
            <h4 class="fs-md nav-heading mb-1 text-start">
              <a class="fw-medium" href="#">{{post.title}}</a>
            </h4>
            <p class="fs-xs text-muted mb-0 text-start">by {{post.user.firstName}}&nbsp;{{post.user.lastName}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastPosts',
  data() {
    return {
      posts: null
    }
  },
  created() {
    // Get request using fetch with error handling
    fetch("http://localhost:3000/posts/lastpublishedposts")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.posts = data;
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
  
  h4 {
    line-height: 0.8;
  }
  a {
    text-decoration: none;
    transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
    color: #4a4b65;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #493ef0;
    }
  }
  .fw-medium {
    font-weight: 500 !important;
  }
  .fs-xs {
    font-size: 0.75rem !important;
  }

</style>
