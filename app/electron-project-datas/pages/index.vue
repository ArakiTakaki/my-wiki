<template>
  <div class="hello">
    <p>{{ count }}</p>
    <button @click='countUp'>count up</button>
    <Input v-model="$data.sample" />
    {{ $data.sample }}
  </div>
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
