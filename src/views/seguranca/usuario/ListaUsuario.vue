<template>
   <p> teste {{msg}}</p>
</template>
<script>
export default {
  name: 'ListaUsuario',
  data() {
    return {
      msg: 'Testando roda lista',
    };
  },
};
</script>
<style scoped lang="scss">
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
