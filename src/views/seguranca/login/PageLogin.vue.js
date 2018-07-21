export default {
  name: 'PageLogin',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}