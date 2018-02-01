<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3 v-text="stringifiedDate"></h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" title="vue-router" data-toggle="tooltip">vue-router</a>
      </li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery';
  import dateStringify from '@/base/date/stringify';

  export default {
    name: 'HelloWorld',
    computed: {
      stringifiedDate() {
        return dateStringify('DD-MM-YYYY H:M:s', new Date(this.dateNow), true);
      }
    },
    beforeMount() {
      const self = this;

      setInterval(() => {
        self.dateNow = Date.now();
      }, 1000);
    },
    mounted() {
      $('[data-toggle="tooltip"]').tooltip();
    },
    data() {
      return {
        dateNow: Date.now()
      };
    },
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color: #42b983;
  h1, h2 {
    font-weight: normal;
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
    color: $color;
  }
</style>
