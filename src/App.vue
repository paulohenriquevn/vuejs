<template>
  <div id="app">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$Progress.start();
  },
  methods: {
  },
};
</script>

<style>
</style>
