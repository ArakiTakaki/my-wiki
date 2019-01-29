<template lang="pug">
  .root
    h1 sample
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// Components
// import Input from '../components/Input.vue';
@Component({
  // components: {Input}
})
export default class Index extends Vue {
  count = 3
  sample = 'test'
  countUp () {
    this.count++
  }
  input(value) {
    console.log(value)
  }
}
</script>
