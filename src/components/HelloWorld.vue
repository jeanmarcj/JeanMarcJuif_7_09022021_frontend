<template>
  <div class="hello">
    <h1 class="text-primary mb-5">{{ msg }}</h1>
    <!-- Test boostrap Version 5 -->
    <!-- <div class="container">
      <div class="alert alert-success alert-dismissible" role="alert">
        With popperjs & bootstrap 5.1.0 !
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text-primary {
  color: #766df4 !important;
}
</style>
