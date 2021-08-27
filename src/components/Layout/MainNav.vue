<template>
    <div class="mainNav">
        <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky">
            <div class="container px-0 px-xl-3">
                <button class="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/" class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4">
                    <!-- <a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"> -->
                    <img class="d-none d-lg-block mt-2 me-4" src="../../assets/icon-left-font.png" alt="Groupomania logo" width="153">
                    <img class="d-lg-none" src="../../assets/icon.png" alt="Groupomania icon" width="58">
                    <!-- </a> -->
                </router-link>
                <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
                    <router-link to="/account" class="nav-link-style fs-sm text-nowrap">
                        <i class="bi bi-person fs-xl"></i>
                        Account
                    </router-link>
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
.ms-n2 {
    margin-left: -0.5rem !important;
}
.ms-grid-gutter {
    margin-left: 1.875rem !important;
}

@media (min-width: 992px) {
    .offcanvas-collapse {
        display: block;
        position: static;
        top: auto !important;
        right: auto !important;
        bottom: auto !important;
        left: auto !important;
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        transform: none !important;
        background-color: transparent;
    }
    .navbar-expand-lg.navbar .offcanvas-body {
        overflow: visible;
    }
    .offcanvas-collapse .offcanvas-body {
        padding: 0;
    }
}

@media (min-width: 1280px) {
        .px-xl-3 {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
    }
}


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
.btn-danger {
    color: #000;
    background-color: #f74f78;
    border-color: #f74f78;
    box-shadow: unset;
    &:hover {
        background-color: #f52a5c;
        border-color: #f52a5c;
        color: #fff;
    }
}
/***********/
/** NavBar */
/***********/

.header {
  position: relative;
  z-index: 1030;
}
.bg-light {
    background-color: rgba(255,255,255,1) !important;
}
.navbar-shadow {
  box-shadow: 0 .125rem .625rem -0.1875rem rgba(0,0,0,.1);
}
.navbar-light {
    background-color: rgba(255,255,255,1);
}
.navbar-light .navbar-toggler {
    color: #5a5b75;
    border-color: transparent;
}
.navbar-toggler {
    padding: .75rem .75rem;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0;
    transition: box-shadow .15s ease-in-out;
}
.navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 1rem;
    font-size: calc(1.2875rem + 0.45vw);
    white-space: nowrap;
}
.nav-link-style {
  display: inline-block;
  transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
  color: #5a5b75;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #766df4;
    text-decoration: none;
  }
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
.navbar-nav .nav-item {
    margin-bottom: 0;
}
.navbar-light .navbar-nav .nav-link {
    color: #5a5b75;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: #766df4 !important;
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


</style>