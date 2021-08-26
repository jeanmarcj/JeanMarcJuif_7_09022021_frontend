<template>
  <div class="wrapper">
    <header>
      <LogoTitle msg = "Welcome on your expression app" />
    </header>

    <section class="container d-flex justify-content-center align-items-center pt-7 pb-4" style="flex: 1 0 auto;">
      <SignInForm title="Sign in" textIntro="Sign in to your account using email and password provided during registration."/> 
    </section>
  </div><!-- End Wrapper -->
  
</template>

<script>
// @ is an alias to /src
// import { mapState } from 'vuex';

import LogoTitle from '@/components/Layout/LogoTitle.vue';
import SignInForm from '@/components/Layout/SignInForm.vue';

export default {
  components: {
    LogoTitle,
    SignInForm
  }
}


</script>

<style scoped lang="scss">
  section {
    color: #747491;
  }
  .pt-7 {
    padding-top: 6rem !important;
  }
  .wrapper {
    height: 100vh;
    background-color: #f7f7fc;
  }
</style>