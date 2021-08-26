<template>
  <div class="wrapper">
    
    <header>
      <LogoTitle msg = "Welcome on your expression app" />
    </header>

    <section class="container d-flex justify-content-center align-items-center pt-7 pb-4">
      <SignUpForm title="Sign up" textIntro ="Registration takes less than a minute but gives you full control over your orders."/>
    </section>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import NavBarLight from '@/components/NavBarLight.vue';
import LogoTitle from '@/components/Layout/LogoTitle.vue';
import SignUpForm from '@/components/Layout/SignUpForm.vue';

export default {
  components: {
    // NavBarLight
    LogoTitle,
    SignUpForm
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    height: 100vh;
    background-color: #f7f7fc;
  }
  .pt-7 {
    padding-top: 6rem !important;
  }

</style>