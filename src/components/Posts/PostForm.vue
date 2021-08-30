<template>
  <div class="card border-0 shadow-lg ms-5">
    {{$store.state.auth}}
      <div class="" v-if="currentPost">
        <div class="card-header">
          <h2 class="text-start">Update Post</h2>
        </div>

        <div class="card-body">

          <!-- Buttons -->
          <div class="mb-3 row">
            <div class="col-md-2"></div>

              <div class="col-md-10 text-end">
                  <div v-if="$store.state.auth.user.isAdmin">
                      <button class="btn btn-outline-danger" title="Delete this Post" @click="deletePost">
                          <i class="bi bi-trash"></i>
                      </button>
                  </div><!-- v-if -->
                  <div v-else-if="isAuthor">
                      <button class="btn btn-outline-danger" title="Delete this Post" @click="deletePost">
                          <i class="bi bi-trash"></i>
                      </button>
                  </div><!-- v-else-if -->
              </div><!-- col -->
          </div><!-- row end -->

          <form class="needs-validation" id="signupForm" novalidate>

            <!-- Title input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="title-input">Title<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="title-input" placeholder="Title" v-model="currentPost.title" required>
                </div>
            </div>

            <!-- Content input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="content-input">Content<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <textarea class="form-control" id="content-input" rows="5" v-model="currentPost.content" required></textarea>
                </div>
            </div>

            <!-- File input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="file-input">File<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <input class="form-control" type="file" id="file-input" required>
                </div>
            </div>

            <!-- Slug input unique -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="slug-input">Slug<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="slug-input" placeholder="Slug" v-model="currentPost.slug" required>
                </div>
            </div>

            <!-- Published btn -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start">
                <strong>Status</strong>
              </label>
              <div class="col-md-10 text-start">
                {{ currentPost.published ? "Published - " : "Pending - " }}
                <button class="btn btn-warning btn-sm me-2" v-if="currentPost.published" @click="updatePublished(false)">
                  UnPublish
                </button>
                <button v-else class="btn btn-success btn-sm me-2" @click="updatePublished(true)">
                  Publish
                </button>
              </div>
            </div>

            <!-- User Id -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="user-id">
                User Id<sup class="text-danger">*</sup>
              </label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="user-id" placeholder="UserId" v-model="currentPost.userId" required>
                </div>
            </div>

            <!-- Buttons -->
            <div class="mb-3 row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <button class="btn btn-success" type="submit" @click="updatePost">
                      Update this Post
                    </button>
                </div>
            </div>

          </form>

          <nav class="row mb-3">
            <div class="col-md-2"></div>
            <div class="col-md-10 text-end">
              <router-link to="/bloglist" class="">Back to Blogs List</router-link>
            </div>
          </nav>
        </div><!-- End card-body -->

        <div class="container" v-if="message">
          <div class="alert alert-info alert-dismissible" role="alert">
            <p><strong>{{ message }}</strong></p>
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        </div>       

      </div><!-- End v-if currentPost -->

      <div v-else>
        <div class="alert-warning">
          <br />
          <p>Please click on a Post...</p>
          <br />
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  props: {
    
  },
  data() {
    return {
      currentPost: null,
      message: '',
      title: '',
      content: '',
      slug: '',
      userId: '',
      createdAt: '',
      published: true,
      errorMessages: {
        message: ''
      },
    };
  },
  mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
  },
  methods:{

    getPost(id) {
      console.log('Get Post... processing... with id:' + id);
      fetch("http://localhost:3000/posts/" + id)
      .then(async response => {
        this.currentPost = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (this.currentPost && this.currentPost.message) || response.statusText;
          return Promise.reject(error);
        }
        console.log(this.currentPost);
      })
      .catch(e => {
        console.error("There was an error !", e);
      });
    },

    isAuthor() {
      if (this.$store.state.auth.user.userId === this.authorId) {
        return true;
      } else {
        return false;
      }
    },

    updatePublished(status) {
      // console.log('Update Published method : status ', status);

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.currentPost.title,
          media: this.currentPost.media,
          content: this.currentPost.content,
          slug: this.currentPost.slug,
          published: status,
          publishedAT: new Date().getTime()
          })
      };

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
        .then(async response => {
          let data = await response.json();
          this.currentPost.published = status;
          console.log(data);
        })
        .catch(e => {
          console.error("Error while updated !", e);
        });
    },

    updatePost() {
      // console.log('Update post processing...');
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.currentPost.title,
          media: this.currentPost.media,
          content: this.currentPost.content,
          slug: this.currentPost.slug,
          published: this.currentPost.published,
          })
      };

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
        .then(async response => {
          let data = await response.json();
          this.message = 'Post updated !';
          console.log(data);
        })
        .catch(e => {
          console.error("Error while updated !", e);
        });
    },

    deletePost() {
      // console.log('Delete method activated !');
      const requestOptions = {
        method: 'DELETE'
      }

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
      .then(async response => {
        let data = await response.json();
        console.log(data);
        this.$router.push({ name: "Bloglist"});
      })
      .catch(e => {
        console.error("Error while deleting !", e);
      })

    },

    processForm() {

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          slug: this.slug,
          published: this.published,
          userId: this.userId
          })
      };

      fetch('http://localhost:3000/posts/' + this.post.id, requestOptions)
        .then(async response => {
          const data = await response.json();
          // Check for error response
          if(!response.ok) {
            const error = (data && data.message) || response.status;
            if (error) {
              this.errorMessages.message = data.message;
            }
            return Promise.reject(error);
          }
          //We have to use the data
          // Perform cookie ?
          console.log(data);
          this.data = data;
          this.success = true;
          this.error = false;
          // Saving in vuex Store
          // console.log(data.firstName);
          // this.$store.commit('save_userFirstName', data.firstName);
          
          // Redirect to a route (url)
          this.$router.push("Bloglist");
        })
        .catch(error => {
          this.errorMessage.message = 'There was an error : ' + error;
          this.error = true;
          this.success = false;
          // console.log(this.error);
          console.error('There was an error !', error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: #6a9bf4;
  }
  p {
    line-height: 1.5;
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
  .fs-ms {
    font-size: 0.8125rem !important;
  }
  .fs-sm {
    font-size: 0.875rem !important;
  }
  .fw-medium {
    font-weight: 500 !important;
  }
  .text-muted {
    color: #9e9fb4 !important;
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
  }
  .btn-primary {
    background-color: #766df4 !important;
    border-color: #766df4 !important;
    box-shadow: unset !important;
    color: white !important;
    &:hover {
      background-color: #5549f1 !important;
      border-color: #5549f1 !important;
      color: #fff !important;
    }
  }
  .btn-success {
    color: #000;
    background-color: #16c995;
    border-color: #16c995;
    box-shadow: unset;
    &:hover {
      background-color: #12a77b;
      border-color: #12a77b;
      color: #fff;
    }
  }
  .btn-warning {
    color: #000;
    background-color: #ffb15c;
    border-color: #ffb15c;
    box-shadow: unset;
    &:hover {
      background-color: #ff9f36;
      border-color: #ff9f36;
      color: #fff;
    }
  }
  .btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
  }
  .btn-outline-danger {
    color: #f74f78;
    border: 1px solid #f74f78;
    &:hover {
      color: #fff;
      background-color: #f74f78;
    }
  }
  .btn>[class^=bi-], .btn>[class*=" bi-"] {
    margin-top: -0.125rem;
    vertical-align: middle;
    font-size: 1rem;
  }

  .alert-danger {
      color: #f74f78;
      background-color: #fef1f4;
      border-color: #fddce4;
  }
  .alert-success {
    color: #16c995;
    background-color: #ecfbf7;
    border-color: #d0f4ea;
  }
  .alert-info {
    color: #6a9bf4;
    background-color: #f3f7fe;
    border-color: #e1ebfd;
  }

</style>