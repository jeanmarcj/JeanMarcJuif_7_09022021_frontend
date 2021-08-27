<template>
    <div class="widget my-5">      
      <h3 class="widget-title text-start">Search Blog</h3>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input class="form-control" type="text" placeholder="Search...">
      </div>
    </div>
</template>

<script>

export default {
  name: 'SearchForm'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.widget-title {
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
}

</style>