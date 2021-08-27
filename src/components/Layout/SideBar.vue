<template>
    <div class="wrapper">
      <aside>
        <!-- Search -->
        <SearchForm />
        
        <!-- Last 3 Posts -->
        <div class="widget mb-5">
          <h3 class="widget-title pb-1 text-start">Last posts</h3>
          <LastPosts />
        </div>
        <!-- Total active Users -->
        <hr>
        <div class="widget mb-5">
          <h3 class="widget-title pb-1 text-start">Total Published Post</h3>
          <TotalPosts class="text-info fw-bolder" />
        </div>
      </aside>
    </div>
</template>

<script>
import SearchForm from '@/components/Layout/SearchForm.vue';
import LastPosts from '@/components/Widgets/LastPosts.vue';
import TotalPosts from '@/components/Widgets/TotalPosts.vue';


export default {
  name: 'SideBar',
  components: {
    SearchForm,
    LastPosts,
    TotalPosts,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.widget-title {
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
}

.text-info {
  color: #6a9bf4 !important;
}

</style>