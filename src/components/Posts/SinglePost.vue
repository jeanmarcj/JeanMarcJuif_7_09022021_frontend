<template>
  <div class="pb-4">
    <h1 class="text-start ms-5">{{postTitle}}</h1>
    <!-- Post author -->
    <div class="row position-relative g-0 align-items-center border-top border-bottom mb-4 ms-5">
      <div class="col-md-6 py-3 pe-md-3">
        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
          <div class="d-flex align-items-center me-grid-gutter">
            <a href="" class="d-block">
              <img class="rounded-circle me-1" src="../../assets/icon.png" alt="Author's image" width="64">
            </a>
            <div class="ps-2">
              <h6 class="nav-heading mb-1 text-start">
                {{authorFirstName}}&nbsp;{{authorLastName}}
                <!-- <a href="">{{authorFirstName}}&nbsp;{{authorLastName}}</a> -->
              </h6>
              <div class="text-nowrap d-flex">
                <div class="meta-link fs-xs">
                    <i class="bi bi-calendar ms-1"></i>
                    &nbsp;{{postCreatedAt}}
                </div>
                <span class="meta-divider"></span>
                <div class="meta-link fs-xs">
                    <i class="bi bi-chat-left"></i>
                    &nbsp;3
                </div>
                <span class="meta-divider"></span>
                <!-- Edit the post if author or admin -->
                <div class="">
                    <router-link :to="`/blogedit/${postId}`" class="meta-link" v-if="$store.state.auth.user.isAdmin" title="Edit this post">
                      <i class="bi bi-pen-fill text-success"></i>
                    </router-link>
                    <router-link :to="`/blogedit/${postId}`" class="meta-link" v-else-if="isAuthor()" title="Edit this post">
                      <i class="bi bi-pen-fill text-success"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post content -->
    <div class="text-start ms-5">
      {{postContent}}
    </div>

    <nav class="row mb-3">
      <div class="col-md-12 text-end mt-5">
        <router-link to="/bloglist" class="">Back to Blogs List</router-link>
      </div>
    </nav>

    <div class="row">
      <h2 class="h3 pb-4 text-start mb-2 ms-5">{{nbOfComments}} Comments</h2>
      
      <!-- Comments -->
      <div class="comment ms-5" v-for="comment in comments" :key="comment.id">
        <p class="text-start mb-5 mt-3">{{comment.content}}</p>
        <div class="d-flex justify-content-end align-items-center">
          <div class="d-flex align-items-center">
            <img class="rounded-circle" src="../../assets/icon.png" alt="Author name" width="42">
            <div class="ps-2 ms-1 text-start">
              <h4>{{comment.user.firstName}}&nbsp;{{comment.user.lastName}}</h4>
              <span class="fs-xs text-muted">{{formatDate(comment.createdAt)}}</span>
            </div>
          </div>
        </div>
      </div>
      
      <a class="btn btn-primary d-block w-100 ms-5 mt-5" href="#comment-form" data-bs-toggle="collapse">Join the conversation</a>

      <!-- Comment Form -->
      <CommentForm />  
    </div><!-- Row -->
    <nav class="row mb-3">
      <div class="col-md-12 text-end mt-5">
        <router-link to="/bloglist" class="">Back to Blogs List</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import CommentForm from '@/components/Comments/CommentForm.vue';

export default {
  name: 'SinglePost',
  components: {
    CommentForm,
  },
  data() {
    return {
      postTitle: null,
      authorFirstName: null,
      authorLastName: null,
      authorIsAdmin: false,
      authorId: null,
      postCreatedAt: null,
      postContent: null,
      postId: null,
      comments: null,
      commentsBool: false,
      nbOfComments: 0,
    };
  },
  created() {
    // Get request using fetch with error handling
    fetch("http://localhost:3000/posts/" + this.$route.params.id)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        // Fetch comments
        fetch("http://localhost:3000/comments/published/" + this.$route.params.id)
          .then(async response => {
            const comments = await response.json();
            // console.log('Comments : ', comments);
            this.comments = comments;
            // console.log(typeof this.comments);
            this.commentsBool = true
            // const totalComments = Object.keys(comments).length;

            this.nbOfComments = Object.keys(comments).length;
            // console.log(this.nbOfComments);
            
          })

        // console.log(data);
        this.authorFirstName = data.user.firstName;
        this.authorLastName = data.user.lastName;
        this.authorIsAdmin = data.user.isAdmin;
        this.authorId = data.user.id;

        this.postTitle = data.title;
        this.postContent = data.content;
        this.postId = data.id;
    
        let tempPostCreatedAt = new Date(data.createdAt);
        let options = {year: "numeric", month: "long", day: "numeric"};
        // deliveryDate.toLocaleDateString("fr-FR", options);
        this.postCreatedAt = tempPostCreatedAt.toLocaleDateString("fr-FR", options);

      })
      .catch(err => {
        this.errorMessage = err;
        console.error("There was an error !", err);
      });
  },
  methods: {

    formatDate(date) {
      let tempPostCreatedAt = new Date(date);
      let options = {year: "numeric", month: "long", day: "numeric"};
      let dateFormated = tempPostCreatedAt.toLocaleDateString("fr-FR", options);
      return dateFormated;
    },

    isAuthor() {
      if (this.$store.state.auth.user.id === this.authorId) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  h4 {
    font-size: 1rem !important;
    margin: 0;
  }
  .me-grid-gutter {
    margin-right: 1.875rem !important;
  }
  .nav-heading, .nav-heading a,
  .nav-heading .nav-heading-title {
    transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
    color: #4a4b65;
    font-weight: 600;
    text-decoration: none;
  }
  .meta-link {
    transition: color .2s ease-in-out;
    color: #797a95;
    vertical-align: middle;
    text-decoration: none;
  }
  .fs-xs {
    font-size: 0.75rem !important;
  }
  .fs-sm {
    font-size: 0.875rem !important;
  }
  .meta-link:hover {
    color: #4d4e64;
    text-decoration: none;
  }
  .meta-divider {
      display: inline-block;
      width: 1px;
      height: 1rem;
      margin: 0 .625rem;
      background-color: #dfdfec;
      vertical-align: middle;
  }
  a {
    color: #766df4;
    transition: color .2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: #493ef0;
      text-decoration: underline;
  }

}
.btn {
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    color: #737491;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .5625rem 1.25rem;
    font-size: 1rem;
    border-radius: .75rem;
    transition: color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out;
    text-decoration: none;
}
.btn-primary {
  background-color: #766df4 !important;
  border-color: #766df4 !important;
  box-shadow: unset !important;
  color: white !important;
  text-decoration: none !important;
  &:hover {
    background-color: #5549f1 !important;
    border-color: #5549f1 !important;
    color: #fff !important;
    text-decoration: none !important;
  }
}
.comment {
    margin-bottom: 2rem;
    padding-bottom: 1.875rem;
    border-bottom: 1px solid #e9e9f2;
    font-size: 1.2rem;
    color: #37384e;
    background-color: #f7f7fc;
}

</style>
