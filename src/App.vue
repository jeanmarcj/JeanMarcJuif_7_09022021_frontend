<template>
  <div id="app">
    <!-- SignIn modal -->
    <div class="modal fade" id="modal-signin" tab-index="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="view show" id="modal-signin-view">
            <div class="modal-header border-0 bg-dark px-4">
              <h4 class="modal-title text-light">Sign in</h4>
              <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="btn-close"></button>
            </div>
            <div class="modal-body px-4">
              <p class="fs-ms text-muted">
                Sign in to your account using email and password provided during registration
              </p>
              <form action="" class="needs-validation" novalidate>
                <div class="mb-3">
                  <div class="input-group">
                    <!-- <i class="bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i> -->
                    <input type="email" class="form-control rounded" placeholder="Email" required />
                  </div>
                </div>
                <div class="mb-3">
                  <div class="input-group">
                    <div class="password-toggle w-100">
                      <input class="form-control rounded" type="password" placeholder="Password" required />
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary d-block w-100" type="submit">
                  Sign in
                </button>
              </form>
            </div><!-- modal body -->
          </div><!-- #modal-signin-view -->
        </div>
      </div>
    </div><!-- end SignIn modal -->
    <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky">
      <div class="container px-0 px-xl-3">
        <button class="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/">
          <a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4">
            <img class="d-none d-lg-block mt-2 me-4" src="./assets/icon-left-font.png" alt="Groupomania logo" width="153">
            <img class="d-lg-none" src="./assets/icon.png" alt="Groupomania icon" width="58">
          </a>
        </router-link>
        <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
          <a class="nav-link-style fs-sm text-nowrap" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view">
            <i class="bi bi-person fs-xl me-2"></i>
            Sign in
          </a>
          <router-link to="/signup" class="btn btn-primary ms-grid-gutter d-none d-lg-inline-block ms-4">
            Sign Up
          </router-link>
        </div>
        <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
          <div class="offcanvas-header navbar-shadow">
            <h5 class="mt-1 mb-0">Menu</h5>
            <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <!-- Menu -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="navbar-item">
                <a href="" class="nav-link">Account</a>
              </li>
              <li class="navbar-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    
    
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
  color: #2c3e50;
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
header {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// Modal
.view {
  display: none;
}
.view.show {
  display: block;
}
.modal-content {
  border-radius: 1rem !important;
}
.modal-header {
  border-top-left-radius: calc(1rem - 1px) !important; 
  border-top-right-radius: calc(1rem - 1px) !important;
}
.modal-header.bg-dark {
  background-color: rgba(55, 56, 78, 1) !important;
}
.btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
}

p.text-muted {
    color: #9e9fb4 !important;
}

.fs-xl {
    font-size: 1.25rem;
}
.fs-ms {
  font-size: 0.8125rem;
}
.fs-sm {
  font-size: 0.875rem !important;
}

input.rounded {
  border-radius: 0.75rem !important;
}

.btn {
  border-radius: 0.75rem !important;
}

.btn-primary {
  background-color: #766df4 !important;
  border-color: #766df4 !important;
  box-shadow: unset !important;
  color: white !important;
}

.btn-primary:hover {
  background-color: #5549f1 !important;
  border-color: #5549f1 !important;
  color: #fff !important;
}

/** NavBar */
.header {
  position: relative;
  z-index: 1030;
}
.navbar-light {
  background-color: rgba(255,255,255,1);
}
.navbar-shadow {
  box-shadow: 0 .125rem .625rem -0.1875rem rgba(0,0,0,.1);
}
.nav-link-style {
  display: inline-block;
  transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
  color: #5a5b75;
  font-weight: 500;
  text-decoration: none;
}
.offcanvas-header, .offcanvas-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 1.25rem 1.5rem;
}
.offcanvas-body {
  height: 100%;
}
.nav-link {
    display: block;
    padding: .5625rem 1.25rem;
    font-weight: 500;
    color: #5a5b75;
    transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: #766df4 !important;
}



</style>
