<template>
    <div class="signin-form mt-3">
      <div class="signin-form-inner">
        <div class="view show pb-4" id="signup-view">
          <h1 class="h2 text-center">{{title}}</h1>
          <p class="fs-ms text-muted mb-4 text-center">{{textIntro}}</p>
          
          <!-- Error container -->
          <div class="alert-danger mb-4" v-if="error">
            <p class="py-3">{{errorMessages.message}}</p>
          </div>
          
          <!-- The form -->
          <form class="needs-validation" id="signupForm" @submit.prevent="processSignupForm" novalidate>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-person"></i></span>
              <input type="text" class="form-control" placeholder="First Name" name="firstName" v-model="firstName" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
              <input type="text" class="form-control" placeholder="Last Name" name="lastName" v-model="lastName" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-envelope"></i></span>
              <input type="email" class="form-control" placeholder="Email" name="email" v-model="email" required />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-lock"></i></span>
              <input type="password" class="form-control" placeholder="Password" name="password" v-model="password" required />
            </div>
            <button class="btn btn-primary d-block w-100" type="submit">
              {{title}}
            </button>
            <p class="fs-sm pt-3 pb-5 mb-0 text-center">
              You already have an account ?
              <router-link to="/" class="fw-medium">Sign in</router-link>
            </p>
          </form>
          <!-- End form -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  props: {
    title: String,
    textIntro: String,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: false,
      success: false,
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
          this.$router.push("About");
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

  .signin-form {
    // border: 1px solid red;
    position: relative;
    width: 652px;
    min-height: 556px !important;
    padding-bottom: 40px;
    overflow: hidden;
    background-color: #f7f7fc;
      .signin-form-inner {
        position: relative;
        max-width: 390px;
        margin: 6rem auto;
        padding: 32px 30px 0 30px;
        background-color: #fff;
        z-index: 5;
      }
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