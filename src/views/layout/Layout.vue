<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppMain from './components/AppMain';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default {
  name: 'layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
  },
  computed: {
    ...mapGetters('sistema', [
      'sidebar'
    ]),
    classObj () {
      return {
        hideSidebar: !this.sidebar,
        openSidebar: this.sidebar
      };
    }
  },
  methods: {
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
