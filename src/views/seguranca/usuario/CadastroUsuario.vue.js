import CRUD from '../../../components/Crud';

export default {
  components: { crud: CRUD },
  name: 'CadastrarUsuario',
  data () {
    return {
      data: [],
      form: {},
      mapItems: {
        date: {
          label: 'Data',
          Width: 50,
          sortable:true
        },
        name: {
          label: 'Nome',
          Width: 200
        },
        address: {
          label: 'Endereco'
        }
      }
    }
  },
  computed: {
    model() {
      let model = {'nome':'paulo'};
      let mapItems = this.mapItems;
      for (let k in mapItems) {
        model[k] = null;
      }
      return model;
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.data = [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }];
    },
    handleCreate() {
      this.form = { ...this.model }
    },
    handleUpdate(row, index) {
      this.form = { ...row }
    },
    handleDestroy(row, index) {
    },
    handleSubmit(status, closeDialog) {
    },
    submitSuccess(data) {
    },
    deleteSuccess(data) {
    }
  }
}