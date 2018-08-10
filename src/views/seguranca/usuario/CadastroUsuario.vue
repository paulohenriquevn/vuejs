<template>
  <div class="hello">
    <el-form class="crud__form" ref="form" :model="form">
        <el-form-item  :label="'teste'">
            <el-input :type="'text'" v-model="form.name"/>
        </el-form-item>
    </el-form>
  </div>
 </template>
<script>
export default {
  name: 'CadastrarUsuario',
  data() {
    return {
      data: [],
      form: {
        name: 'tete',
      },
      mapItems: {
        date: {
          label: 'Data',
          Width: 50,
          sortable: true,
        },
        name: {
          label: 'Nome',
          Width: 200,
        },
        address: {
          label: 'Endereco',
        },
      },
    };
  },
  computed: {
    model() {
      const model = { nome: 'paulo' };
      const mapItems = this.mapItems;
      for (const k in mapItems) { // eslint-disable-line
        model[k] = null;
      }
      return model;
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.data = [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }];
    },
    handleCreate() {
      this.form = { ...this.model };
    },
    handleUpdate(row, index) { // eslint-disable-line
      this.form = { ...row };
    },
    handleDestroy(row, index) { // eslint-disable-line
    },
    handleSubmit(status, closeDialog) { // eslint-disable-line
    },
    submitSuccess(data) { // eslint-disable-line
    },
    deleteSuccess(data) { // eslint-disable-line
    },
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
