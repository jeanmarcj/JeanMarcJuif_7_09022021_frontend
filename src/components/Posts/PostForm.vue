<template>
  <div class="card border-0 shadow-lg ms-5">
    
      <div class="" v-if="currentPost">
        <div class="card-header">
          <h2 class="text-start text-warning">Modifier un message</h2>
        </div>

        <div class="card-body">

          <!-- Buttons -->
          <div class="mb-3 row">
            <div class="col-md-2"></div>

              <div class="col-md-10 text-end">
                  <div v-if="$store.state.auth.user.isAdmin || isAuthor()">
                      <button class="btn btn-outline-danger" title="Effacer ce message" @click="deletePost">
                          <i class="bi bi-trash"></i>
                      </button>
                  </div><!-- v-if -->
                  <div v-else-if="isAuthor">
                      <button class="btn btn-outline-danger" title="Effacer ce message" @click="deletePost">
                          <i class="bi bi-trash"></i>
                      </button>
                  </div><!-- v-else-if -->
              </div><!-- col -->
          </div><!-- row end -->

          <form @submit.prevent="updatePost" class="needs-validation" id="updatePost" novalidate>
              
            <!-- Title input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="title-input">Titre</label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="title-input" placeholder="Title" v-model="currentPost.title" required>
                </div>
            </div>

            <!-- Content input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="content-input">Contenu</label>
                <div class="col-md-10">
                  <textarea class="form-control" id="content-input" rows="5" v-model="currentPost.content" required></textarea>
                </div>
            </div>

            <!-- File input -->
            <!-- <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="file-input">Fichier</label>
                <div class="col-md-10">
                  <input class="form-control" type="file" id="file-input" disabled>
                </div>
            </div> -->

            <!-- Slug -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="slug-input">Slug</label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="slug-input" placeholder="Slug" v-model="currentPost.slug" required>
                </div>
            </div>

            <!-- Publish check box -->

            <div class="row mb-3 align-items-center">
              <div class="col-md-2 text-start col-form-label">
                <strong>Status</strong>
              </div>
              <div class="col-md-10 text-start">
                <input type="checkbox" value="" id="checkPublish" class="form-check-input" v-model="currentPost.published" @click="updatePublished">
                <label v-if="currentPost.published" for="checkPublish" class="form-check-label ms-2 badge bg-success">
                  Ce message est publié
                  </label>
                <label class="form-check-lable ms-2 badge bg-warning" v-else>
                  Ce message n'est pas publié ! Cocher pour publier.
                </label>
              </div>
            </div>

            <!-- Buttons -->
            <div class="mb-3 row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <button class="btn btn-success w-100 my-5" type="submit">
                      Modifier ce message
                    </button>
                </div>
            </div>

          </form>

          <nav class="row mb-3">
            <div class="col-md-2"></div>
            <div class="col-md-10 text-end">
              <router-link :to="`/post/${currentPost.id}`" class="text-danger">Annuler</router-link>
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
      published: null,
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
      // console.log('Get Post... processing... with id:' + id);
      fetch("http://localhost:3000/posts/" + id)
      .then(async response => {
        this.currentPost = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (this.currentPost && this.currentPost.message) || response.statusText;
          return Promise.reject(error);
        }
        // console.log(this.currentPost);
      })
      .catch(e => {
        console.error("Une erreur est intervenue ! Erreur : ", e);
      });
    },

    isAuthor() {
      if (this.$store.state.auth.user.userId === this.authorId) {
        return true;
      }
        return false;
    },

    updatePublished() {
      // console.log('Update Published method : status ', this.currentPost.published);

      if (this.currentPost.published === true) {
        this.currentPost.published = false
      } else {
        this.currentPost.published = true
      }
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          published: this.currentPost.published,
          publishedAT: new Date().getTime()
          })
      };

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
        .then(async response => {
          await response.json();
          // console.log(response);
          if (response.ok) {
            console.log('Status du message mis à jour !')
          }
        })
        .catch(e => {
          console.error("Une erreur est intervenue lors de la mise à jour !", e);
        });
    },

    updatePost() {
      // console.log('Update post processing...') + this.currentPost.id;
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.currentPost.title,
          // media: this.currentPost.media,
          content: this.currentPost.content,
          slug: this.currentPost.slug,
          published: this.currentPost.published,
          })
      };

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
        .then(async response => {
          let data = await response.json();
          console.log(data);
          this.message = 'Message mis à jour !';

          this.$router.push({ name: 'BlogSingle', params: { id: this.currentPost.id } })

        })
        .catch(e => {
          console.error("Une erreur est intervenue ! Erreur : ", e);
        });
    },

    deletePost() {
      // console.log('Delete method activated !');

      let confirm = window.confirm("Etes-vous sûr de vouloir effacer ce message ?")

      if (!confirm) {
        return
      }

      const requestOptions = {
        method: 'DELETE'
      }

      fetch("http://localhost:3000/posts/" + this.currentPost.id, requestOptions)
      .then(async response => {
        let data = await response.json();
        console.log(data);
        this.$router.push({ name: "bloglist"});
      })
      .catch(e => {
        console.error("Une erreur est intervenue lors de la suppression ! Erreur : ", e);
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
          this.$router.push("Bloglist");
        })
        .catch(error => {
          this.errorMessage.message = 'Une ereur est intervenue : ' + error;
          this.error = true;
          this.success = false;
          // console.log(this.error);
          console.error('Une ereur est intervenue !', error);
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
  .text-warning {
    color: #ffb15c !important;
  }

</style>