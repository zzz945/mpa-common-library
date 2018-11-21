const mixin = {
  methods: {
    $success (msg) {
      return new Promise((resolve, reject) => {
        return this.$message({
          message: msg,
          type: 'success',
          showClose: true,
          onClose: resolve
        })
      })
    },
    $info (msg) {
      return new Promise((resolve, reject) => {
        return this.$message({
          message: msg,
          showClose: true,
          onClose: resolve
        })
      })
    },
    $warning (msg) {
      return new Promise((resolve, reject) => {
        return this.$message({
          message: msg,
          type: 'warning',
          showClose: true,
          onClose: resolve
        })
      })
    },
    $error (msg) {
      return new Promise((resolve, reject) => {
        return this.$message({
          message: msg,
          type: 'error',
          showClose: true,
          onClose: resolve
        })
      })
    },
    $apiError (e) {
      if (e.data) {
        return this.$error(e.data.msg)
      } else if (e.response) {
        return this.$error(e.response.data.msg)
      } else {
        return Promise.reject(e)
      }
    }
  }
}

export default mixin
