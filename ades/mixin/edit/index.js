import MessageMixin from "mpa-common-library/mixin/message"
import './index.styl'

export default {
  mixins: [MessageMixin],
  components: {
  },
  data () {
    return {
      info: {},
      backup: {},
      editing: !this.$route.query.disabled,
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    handleEdit () {
      this.editing = true
    },
    handleSave () {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.saveImpl(this.info).then(_ => {
          this.editing = false
          this.$success('update success').then(_ => this.$router.back())
        }).catch(this.$apiError)
      })
    },
    handleCancel () {
      this.editing = false
      this.info = JSON.parse(JSON.stringify(this.backup))
    },
    getItem () {
      return this.getItemImpl(this.$route.params.id).then(info => {
        this.info = info
        this.backup = JSON.parse(JSON.stringify(info))
      }).catch(this.$apiError)
    }
  }
}