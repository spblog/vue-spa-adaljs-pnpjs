<template>
  <div id="app">
    <auth>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>

      <template #login-error="{errorMessage}">
        <login-error :errorMessage="errorMessage"></login-error>
      </template>

      <template #login-progress>
        <div>Initializing...</div>
      </template>
    </auth>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoginError from '@/components/LoginError.vue';
import Auth from '@/components/Auth.vue';

@Component({
  components: {
    'login-error': LoginError,
    'auth': Auth,
  },
})
export default class App extends Vue {}

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
