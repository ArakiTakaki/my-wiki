<template lang="pug">
  .root
    .side-bar
      .content(v-show="$data.isShowSidebar")
        SideBar
        h1 test
    .content
      h1 sample
      button(@click="onShowSidebar") open
      button(@click="onCloseSidebar") close
</template>

<script>
import Vue from "vue";
import { Component, Prop, Inject } from "vue-property-decorator";
// Components
// import Input from '../components/Input.vue';
import SideBar from "./components/SideBar";

@Component({
  components: {
    SideBar
  }
})
export default class Index extends Vue {
  isShowSidebar = false;

  created() {
    this.$eventEmitter.on("sidebar", this.sidebarEmit);
  }
  beforeDestroy() {
    this.$eventEmitter.on("sidebar", this.sidebarEmit);
  }
  onShowSidebar() {
    this.$eventEmitter.emit("sidebar", { open: true });
  }
  onCloseSidebar() {
    this.$eventEmitter.emit("sidebar", { open: false });
  }

  sidebarEmit (value) {
    this.$data.isShowSidebar = value.open;
  }

}
</script>

<style scoped>
.root {
  background-color: #333;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.side-bar {
  width: 150px;
}
</style>
