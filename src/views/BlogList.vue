<template>
  <div class="wrapper">
    <NavBarLight />
    <div class="sidebar-enabled">
      <div class="container">
        <div class="row">

          <!-- Sidebar -->
          <div class="sidebar col-lg-3 pt-lg-5 container-fluid">
            <SideBar />
          </div><!-- Sidebar -->

          <!-- Content -->
          <div class="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div class="home text-start ms-5">
              <HelloWorld msg="Groupomania Blog" />
            </div>
            <router-link to="post/newpost" class="btn btn-primary mb-5 ms-5" style="max-width: 52rem;">I wish to say something...</router-link>
           
            <div class="">
              <PostsList />
            </div>

          </div>
        </div>
      </div><!-- End container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarLight from '@/components/Layout/NavBarLight.vue';
import SideBar from '@/components/Layout/SideBar.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PostsList from '@/components/Posts/PostsList.vue';

export default {
  components: {
    NavBarLight,
    SideBar,
    HelloWorld,
    PostsList
  }
}
</script>

<style scoped lang="scss">

@media (min-width: 992px) {
  .sidebar {
    position: relative;
    background-color: #f7f7fc;
    z-index: 5;
    height: calc(100vh);
  }
}

.sidebar {
  overflow: hidden;
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