<template>
    <div class="mainNav">
        <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky">
            <div class="container px-0 px-xl-3">
                <button class="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/">
                    <a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4">
                    <img class="d-none d-lg-block mt-2 me-4" src="../../assets/icon-left-font.png" alt="Groupomania logo" width="153">
                    <img class="d-lg-none" src="../../assets/icon.png" alt="Groupomania icon" width="58">
                    </a>
                </router-link>
                <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
                    <a class="nav-link-style fs-sm text-nowrap" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view">
                        <i class="bi bi-person fs-xl me-2"></i>
                        Sign in
                    </a>
                    <router-link to="/signup" class="btn btn-danger ms-grid-gutter d-none d-lg-inline-block ms-4">
                        Log out
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
                                <router-link to="Bloglist" class="nav-link">Home</router-link>
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
    </div>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.btn {
  border-radius: 0.75rem !important;
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


</style>