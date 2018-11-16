import MessageMixin from "mpa-common-library/mixin/message"
import './index.styl'

export default {
  mixins: [MessageMixin],
  components: {
  },
  data () {
    return {
      info: {},
    }
  },
  beforeMount () {
    this.info = this.getInfoProperties()
  },
  methods: {
    handleAdd () {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.addImpl(this.info).then(res => {
          this.$success('add success').then(_ => {
            this.$router.push(`${this.getBasePath()}/edit/${res.id}`)
          })
        }).catch(this.$apiError)
      })
    }
  }
}