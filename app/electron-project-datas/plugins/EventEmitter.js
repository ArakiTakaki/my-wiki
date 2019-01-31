import Vue from 'vue';
import e from 'eventemitter2';

const eventEmitter = new e.EventEmitter2({ wildcard: true });

const emitter = {
  install(Vue, options) {
    Vue.mixin({
      beforeCreate() {
        this.$eventEmitter = eventEmitter;
      }
    });
  }
};

Vue.use(emitter);
