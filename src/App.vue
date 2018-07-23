<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    this.$store.commit('permissao/LOAD_ROUTERS');
  }
};
</script>

<style>
</style>
