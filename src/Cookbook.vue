<template>
  <div id="app" class="containers">
    <h1>Cook Book</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import './node_modules/bootstrap/scss/bootstrap';

  #app {
    $color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color;
    margin-top: 60px;
  }
</style>
