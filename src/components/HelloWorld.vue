<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Your web information:</h2>
      <pre class="pre">
        <code>
          {{webInfo}}
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  public webInfo: string = '';
  @Prop() private msg!: string;

  public async mounted(): Promise<void> {
    this.webInfo = JSON.stringify(await this.$pnp.sp.web.get(), null, 4);
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

.pre, h2 {
  text-align: left
}
</style>
