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
            <!-- Title -->
            <div class="home text-start ms-5">
              <HelloWorld msg="Groupomania Blog" />
            </div>
            <div class="createForm">
              <PostCreateForm />
            </div>

          </div><!-- col-lg-9 end -->
        </div><!-- row end -->

      </div><!-- End container -->
    </div>
  </div>
</template>

<script>
import NavBarLight from '@/components/Layout/NavBarLight.vue';
import SideBar from '@/components/Layout/SideBar.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PostCreateForm from '@/components/Posts/PostCreateForm.vue';

export default {
  components: {
    NavBarLight,
    SideBar,
    HelloWorld,
    PostCreateForm
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