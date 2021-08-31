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
              <HelloWorld msg="Gestion des utilisateurs" v-if="$store.state.auth.user.isAdmin"/>
              <HelloWorld msg="Gestion de votre compte" v-else/>
            </div>
            <div class="text-start ps-5">
              <p>{{$store.state.auth}}</p>
            </div>

            <div class="row mb-3 ms-5 text-start" v-if="$store.state.auth.user.isAdmin">
              <h2 class="">Users list</h2>
              <ul class="list-group">
                  <li class="list-group-item">
                      <a href=""></a>
                  </li>
              </ul>
            </div>

          </div>
        </div>
      </div><!-- End container -->
    </div>
  </div>
</template>

<script>
import NavBarLight from '@/components/Layout/NavBarLight.vue';
import SideBar from '@/components/Layout/SideBar.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    NavBarLight,
    SideBar,
    HelloWorld,
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
