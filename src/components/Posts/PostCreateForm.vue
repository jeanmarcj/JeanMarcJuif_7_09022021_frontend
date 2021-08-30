<template>
  <div class="card border-0 shadow-lg ms-5">
      <div class="">
        <div class="card-header">
          <h1 class="text-start">Create Post</h1>
        </div>

        <div class="card-body">

          <form class="needs-validation" id="createPostForm" novalidate>

            <!-- Title input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="title-input">Title<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <input class="form-control" type="text" id="title-input" placeholder="Title" v-model="title" required>
                </div>
            </div>

            <!-- Content input -->
            <div class="mb-3 row align-items-center">
              <label class="col-md-2 col-form-label text-start" for="content-input">Content<sup class="text-danger">*</sup></label>
                <div class="col-md-10">
                  <textarea class="form-control" id="content-input" rows="5" v-model="content" required></textarea>
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
                  <input class="form-control" type="text" id="slug-input" placeholder="Slug" v-model="slug" required>
                </div>
            </div>

            <!-- Published btn -->
            <!-- <div class="mb-3 row align-items-center">
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
            </div> -->

            <!-- Buttons -->
            <div class="mb-3 row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <button class="btn btn-success" type="submit" @click="savePost">
                      Save
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

      </div>
      
  </div>
</template>

<script>
export default {
  name: 'PostCreateForm',
  props: {
    
  },
  data() {
    return {
      message: '',
      title: '',
      media: '',
      content: '',
      slug: '',
      userId: 0,
      published: true,
    };
  },
  mounted() {

  },
  methods:{

    savePost() {
      // console.log('Update post processing...');
      // console.log(this.$store);
      // console.log(this.$store.state.auth.user.userId);

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: this.$store.state.auth.user.userId,
          title: this.title,
          media: this.media,
          content: this.content,
          slug: this.slug,
          published: this.published,
          })
      };

      fetch("http://localhost:3000/posts/", requestOptions)
        .then(async response => {
          let data = await response.json();
          this.message = 'Post created !';
          console.log(data);
          // this.$router.push("Bloglist");
          this.$router.push({ name: 'Bloglist', params: { id: data.id } })
        })
        .catch(e => {
          console.error("Error while created the post !", e);
          this.message = "Error while created the post !";
        });
    },
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