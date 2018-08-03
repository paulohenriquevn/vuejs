<template>
  <div class="hello">
    <el-form class="crud__form" ref="form" :model="form">
        <el-form-item  :label="'teste'">
            <el-input :type="'text'" v-model="form.name"/>
        </el-form-item>
    </el-form>
  </div>
 </template>
<script src="./CadastroUsuario.vue.js"></script>
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
