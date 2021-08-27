<template>
  <div class="wrapper">
    <NavBarLight />
    <div class="sidebar-enabled">
      <div class="container">
        <div class="row">
          <!-- Sidebar -->
          <div class="sidebar col-lg-3 pt-lg-5 container-fluid">
            <!-- Search -->
            <div class="widget mb-5">
              <h3 class="widget-title text-start">Search Blog</h3>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-search"></i>
                </span>
                <input class="form-control" type="text" placeholder="Search...">
              </div>
            </div>

            <!-- Last 3 posts widget -->
            <div class="widget mt-n1 mb-5">
              <h3 class="widget-title pb-1 text-start">Last posts</h3>
                <!-- Lats 3 post components -->
                <LastPosts />
            </div>
            <!-- Total Posts widget -->
            <hr>
            <div class="widget mt-n1 mb-5">
              <h3 class="widget-title pb-1">Total posts</h3>
              <TotalPosts />
            </div>
            <hr>
            
          </div>
          <!-- Content -->
          <div class="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div class="home">
              <HelloWorld msg="Groupomania Expression App"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarLight from '@/components/Layout/NavBarLight.vue';
import LastPosts from '@/components/Widgets/LastPosts.vue';
import TotalPosts from '@/components/Widgets/TotalPosts.vue';
import HelloWorld from '@/components/HelloWorld.vue';


export default {
  components: {
    NavBarLight,
    HelloWorld,
    LastPosts,
    TotalPosts
  }
}
</script>

<style scoped lang="scss">

  @media screen and (min-width: 992px) {
    .sidebar {
      position: relative;
      background-color: #f7f7fc;
      z-index: 5;
      height: calc(100vh);
    }
    .sidebar-enabled {
      position: relative;
    }
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
    .offcanvas-collapse .offcanvas-header,
    .offcanvas-collapse .offcanvas-footer {
      display: none;
    }
  }
  .offcanvas-header, .offcanvas-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 1.25rem 1.5rem;
  }
  .widget-title {
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .translate-middle-y {
    transform: translateY(-50%) !important;
  }

</style>