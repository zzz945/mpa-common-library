import MessageMixin from "mpa-common-library/mixin/message"
import './index.styl'

export default {
  mixins: [MessageMixin],
  components: {
  },
  data () {
    return {
      info: {},
      editing: !this.$route.query.disabled,
    }
  },
  created () {
    this.info = this.getInfoProperties()
  },
  mounted () {
  },
  methods: {
    handleEdit () {
      this.editing = true
    },
    handleSave () {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.saveImpl(this.info).then(backUrl => {
          this.editing = false
          this.$success('update success').then(_ => {
            if (backUrl) this.$router.push(backUrl)
            else this.$router.back()
          })
        }).catch(this.$apiError)
      })
    },
    handleCancel () {
      this.editing = false
      this.$router.back()
    }
  }
}