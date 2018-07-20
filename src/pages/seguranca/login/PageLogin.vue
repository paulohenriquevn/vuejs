<template>
<div class="hello">
  <crud :data="data" :form="form" :fields="mapItems" @create="handleCreate" @update="handleUpdate" @destroy="handleDestroy" @submit="handleSubmit">
    <template slot="crud-form">
       <el-form class="crud__form" ref="form" :model="form" :rules="computedRules" @keyup.native.13="submit">
        <el-form-item  :label="'teste'">
          <el-input :type="'text'" v-model="form[key]"/>
        </el-form-item>
      </el-form>
    </template>
  </crud>
</div>
</template>
<script src="./PageLogin.vue.js"></script>
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
