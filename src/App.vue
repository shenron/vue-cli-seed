<template>
  <div id="app" class="containers">
    <div class="row">
      <div class="col-sm">
        <img src="./assets/logo.png">
      </div>
      <div class="col-sm">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
      <div class="col-sm">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>FontAwesome</strong> works <i class="fas fa-camera-retro"></i>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
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
