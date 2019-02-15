<template>
    <div>
    <pre>
      <code>{{errorMessage}}</code>
    </pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginError extends Vue {
    @Prop({type: String, default: ''})
    public errorMessage!: string;
}
</script>

