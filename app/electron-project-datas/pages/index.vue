<template lang="pug">
  .root
    .side-bar.-close
      .content
        button(@click="onShowSidebar") open
    .side-bar(v-if="$data.isShowSidebar")
      .content
        SideBar
          h1 test
          button(@click="onCloseSidebar") close
    .content
      h1 sample
      .electron
        input(type="text" v-model="$data.message")
        button(@click="onSendMessage") SEND
        p {{ $data.reserveMessage }}
</template>

<script>
import Vue from "vue";
import { Component, Prop, Inject } from "vue-property-decorator";
import { ipcRenderer } from "electron";

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
  message = "";
  reserveMessage = "NONE";

  created() {
    this.$eventEmitter.on("sidebar", this.sidebarEmit);
    ipcRenderer.on("electron_to_client", this.onSendElectron);
  }

  beforeDestroy() {
    this.$eventEmitter.on("sidebar", this.sidebarEmit);
    ipcRenderer.removeListener("electron_to_client", this.onSendElectron);
  }

  onSendElectron(event, args) {
    console.log(args);
    this.$data.reserveMessage = args;
  }

  onShowSidebar() {
    this.$eventEmitter.emit("sidebar", { open: true });
  }
  onCloseSidebar() {
    this.$eventEmitter.emit("sidebar", { open: false });
  }

  sidebarEmit(value) {
    this.$data.isShowSidebar = value.open;
  }
  onSendMessage() {
    ipcRenderer.send("client_to_electron", this.$data.message);
    this.$data.message = "";
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
.side-bar.-close{
  width: 50px;
}
</style>
