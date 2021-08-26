<template>
  <div id="app">
    <!-- Old Nav -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|&nbsp;
      <a class="nav-link-style fs-sm text-nowrap" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view">
        <i class="bi bi-person fs-xl me-2"></i>
        Sign in
      </a>
      <router-link to="/signup" class="btn btn-primary ms-grid-gutter d-none d-lg-inline-block mx-2">Sign Up</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
