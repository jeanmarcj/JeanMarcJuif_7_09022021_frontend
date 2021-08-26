<template>
    <div class="container">
        <img src="../../../public/img/icon-left-font.png" alt="Groupomania Logo" width="300" class="my-3">
        <h1 class="my-4 pb-3 text-info">{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'LogoTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.text-info {
  color: #6a9bf4 !important;
}

</style>