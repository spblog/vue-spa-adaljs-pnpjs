<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/logo.png">
    <img class="img" alt="Vue logo" src="../assets/aad.png">
    <img class="img pnpjs" alt="Vue logo" src="../assets/pnpjs.png">
    <HelloWorld msg="Welcome to Your Vue.js + adal.js + PnP.js App!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .home {
    .img {
      width: 200px;
      &.pnpjs {
        height: 200px;
        width: inherit;
      }
    }
  }
</style>
