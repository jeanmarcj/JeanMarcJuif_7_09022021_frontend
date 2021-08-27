<template>
    <div class="card border-0 shadow-lg ms-5">
      <div class="card-header">
        <h1 class="text-start">Update Post</h1>
      </div>
      <div class="card-body">

        <form class="needs-validation" id="signupForm" @submit.prevent="processSignupForm" novalidate>

          <!-- Title input -->
          <div class="mb-3 row align-items-center">
            <label class="col-md-2 col-form-label text-start" for="title-input">Title</label>
              <div class="col-md-10">
                <input class="form-control" type="text" id="title-input" placeholder="Title" v-model="title" required>
              </div>
          </div>

          <!-- Content input -->
          <div class="mb-3 row align-items-center">
            <label class="col-md-2 col-form-label text-start" for="content-input">Content</label>
              <div class="col-md-10">
                <textarea class="form-control" id="content-input" rows="5" v-model="content" required></textarea>
              </div>
          </div>

          <!-- File input -->
          <div class="mb-3 row align-items-center">
            <label class="col-md-2 col-form-label text-start" for="file-input">File</label>
              <div class="col-md-10">
                <input class="form-control" type="file" id="file-input" required>
              </div>
          </div>

          <!-- Slug input unique -->
          <div class="mb-3 row align-items-center">
            <label class="col-md-2 col-form-label text-start" for="slug-input">Slug</label>
              <div class="col-md-10">
                <input class="form-control" type="text" id="slug-input" placeholder="Slug" v-model="slug" required>
              </div>
          </div>

          <!-- Inline checkboxes -->
          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="publish" v-model="published">
              <label class="form-check-label" for="publish">Publish this Post</label>
            </div>
          </div>

          <!-- User Id -->
          <div class="mb-3 row align-items-center">
            <label class="col-md-2 col-form-label text-start" for="user-id">User Id</label>
              <div class="col-md-10">
                <input class="form-control" type="text" id="user-id" placeholder="User Id" v-model="userId" required>
              </div>
          </div>

          <!-- Buttons -->
          <div class="mb-5">
            <button class="btn btn-primary w-100 mt-5 mx-auto d-block" type="submit">
                Update this post
            </button>
            <!-- <router-link to="/bloglist" class="btn btn-outline-danger text-danger w-50 d-block">Cancel</router-link> -->
          </div>

        </form>

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
      title: '',
      content: '',
      slug: '',
      userId: '',
      createdAt: '',
      published: true,
      errorMessages: {
        message: ''
      },
      data: null
    }
  },
  methods:{
    processSignupForm() {
      // Validate Password
      if (this.password.length < 5) {
        this.error = true;
        this.errorMessages.message ='Password must be at least 6 chars long';
        // console.log(this.errorMessages.message);
        return;
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          isOnline: true,
          isActive: true,
          email: this.email,
          passwordPlainText: this.password,
          })
      };

      fetch('http://localhost:3000/users/signup', requestOptions)
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

</style>