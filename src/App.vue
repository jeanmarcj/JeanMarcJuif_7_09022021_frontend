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
                <p class="fs-sm pt-3 mb-0">
                  Don't have an account ?
                  <a href="#" class="fw-medium" data-view="#modal-signup-view">Sign Up</a>
                </p>
              </form>
            </div><!-- modal body -->
          </div><!-- view show -->
        </div>
      </div>
    </div><!-- end SignIn modal -->
    
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|&nbsp;
      <a class="nav-link-style fs-sm text-nowrap" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view">
        <i class="bi bi-person fs-xl me-2"></i>
        Sign in
      </a>
      <a href="#modal-signin" class="btn btn-primary ms-grid-gutter d-none d-lg-inline-block mx-2" data-bs-toggle="modal" data-view="#modal-signup-view">Sign Up</a>
    </div>
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


</style>
