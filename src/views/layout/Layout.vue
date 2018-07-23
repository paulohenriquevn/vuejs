<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain';
import ResizeMixin from './mixin/ResizeHandler';

export default {
  name: 'layout',
  components: {
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/assets/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
