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
  mounted () {
    this.getItemImpl(this.$route.params.id).then(info => this.info = info).catch(this.$apiError)
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
          this.$success('update success')
        }).catch(this.$apiError)
      })
    },
    handleCancel () {
      this.editing = false
    }
  }
}