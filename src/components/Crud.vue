<template>
  <div class="crud">
    <div class="crud-list">
      <div class="crud-ctrl" v-if="actions.includes('create')">
        <el-button type="primary" @click="create" size="mini" icon="el-icon-plus">Adicionar</el-button>
      </div>
      <el-table :data="data" stripe :border="border || undefined" :row-style="rowStyle || undefined" :highlight-current-row="highlightCurrentRow" @sort-change="handleSort" @expand="handleExpand" @row-click="handleRowClick" @row-dblclick="handleRowDblclick">
        <template v-for="(key, index) in Object.keys(columns)">
          <el-table-column :key="index" :sortable="fields[key].sortable || false" v-if="key in fields" :label="columns[key]" :min-width="fields[key].width || labelWidth" show-overflow-tooltip>
            <template slot-scope="scope">
              {{scope.row[key]}}
            </template>
          </el-table-column>
        </template>
        <el-table-column v-if="actions.includes('update') || actions.includes('destroy')" label="opções" width="150" align="center">
          <template slot-scope="scope">
            <el-button v-if="actions.includes('update')" type="warning" size="mini" @click.stop="update(scope.row, scope.$index)" icon="el-icon-edit"></el-button>
            <el-button v-if="actions.includes('destroy')" type="danger" size="mini" @click.stop="destroy(scope.row, scope.$index)" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <div class="crud-form">
       <el-dialog :title="dialog.title[dialog.status]" :size="dialog.size" :close-on-click-modal="false" :visible="dialog.visible" :show-close="false" @open="handleOpen">
          <slot name="crud-form"></slot>
          <div slot="footer">
            <el-button @click="closeDialog">Cancelar</el-button>
            <el-button type="primary" @click="submit" :loading="loading">Salvar</el-button>
          </div>
       </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { required: true, type: Array },
    form: { required: false, type: Object },
    fields: { required: false, type: Object },
    rules: Object,
    table: Object,
    size: { default: 'large', type: String },
    labelWidth: { default: '100px', type: String },
    inline: { default: false, type: Boolean },
    loading: { default: false, type: Boolean },
    actions: { default: () => ['create', 'destroy', 'update'], type: Array },
    highlightCurrentRow: { default: false, type: Boolean },
    rowStyle: Function,
    border: { type: Boolean, default: true }
  },
  data () {
    return {
      dialog: {
        status: 0,
        visible: false,
        title: {
          0: 'Novo',
          1: 'Editar'
        },
        size: this.inline ? this.size : 'mini'
      },
      updatingRow: null
    };
  },
  computed: {
    labels () {
      let labels = {};
      let fields = this.fields;
      for (let key in fields) {
        labels[key] = fields[key].label;
      }
      return labels;
    },
    columns () {
      return this.table || this.labels;
    }
  },
  methods: {
    doNothing () {
    },
    create () {
      this.dialog.status = 0;
      this.showDialog();
      this.$emit('create');
    },
    update (row, index) {
      this.dialog.status = 1;
      this.updatingRow = row;
      this.showDialog();
      this.$emit('update', row, index);
    },
    destroy (row, index) {
    },
    showDialog () {
      this.dialog.visible = true;
      this.$emit('open');
    },
    closeDialog () {
      this.dialog.visible = false;
      this.$emit('close');
    },
    handleOpen () {
    },
    submit () {
    },
    repeated (key, value, self) {
    },
    handleSort (data) {
      this.$emit('sort', { ...data });
    },
    handleExpand (row, expanded) {
    },
    handleRowClick (row, event, column) {
    },
    handleRowDblclick (row, event) {
    },
    handleNumberChange (key, event, length) {
    }
  }
};
</script>

<style scoped>
.crud-ctrl {
  margin: 8px 0;
  float: left;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: bold;
    border: 0.5px solid #f1ecec;
    background: #fafafa;
}
.el-pager li {
    margin: 0 5px;
    background-color: #e6f8fd;
    color: #9a9a9a;
    min-width: 30px;
    border-radius: 2px;
}
.el-table>table>td{
  padding: 5px 0 !important;
}
</style>
