<template>
    <div class="signin-form mt-3">
      <div class="signin-form-inner">
        <div class="view show pb-4" id="signup-view">
          <h1 class="h2 text-center">{{title}}</h1>
          <p class="fs-ms text-muted mb-4 text-center">{{textIntro}}</p>
          
          <!-- Error container -->
          <div class="alert-danger mb-4" v-if="showError" id="error">
            <p class="py-3">Votre Email ou votre mot de passe ne sont pas corrects ! - {{message}}</p>
          </div>
          
          <!-- The form -->
          <form class="needs-validation" id="signupForm" @submit.prevent="submit" novalidate>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-envelope"></i></span>
              <input type="email" class="form-control" placeholder="Email" name="email" v-model="form.email" required />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-lock"></i></span>
              <input type="password" class="form-control" placeholder="Mot de passe" name="password" v-model="form.password" required />
            </div>
            <button class="btn btn-primary d-block w-100" type="submit">
              {{title}}
            </button>
            <p class="fs-sm pt-3 pb-5 mb-0 text-center">
              Vous n'avez pas encore de compte ?
              <router-link to="/signup" class="fw-medium">S'enregistrer</router-link>
            </p>
          </form>
          <!-- End form -->
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'SignUpForm',
  props: {
    title: String,
    textIntro: String,
  },
  data() {
    return {
        form: {
          email: "",
          paswword: ""
        },
        showError: false,

        // ------- //
        email: '',
        password: '',
        error: false,
        success: false,
        message: '',
        data: null
    }
  },
  methods:{

    ...mapActions(["LogIn"]),
    async submit() {
      const User = {};
      User.email = this.form.email;
      User.passwordPlainText = this.form.password;

      // const User = new FormData();
      // User.append("email", this.form.email);
      // User.append("passwordPlainText", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("Bloglist");
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.message = error;
      }
    },

    // --------- //
    processForm() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.email,
          passwordPlainText: this.password,
          })
      };

      fetch('http://localhost:3000/users/login', requestOptions)
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