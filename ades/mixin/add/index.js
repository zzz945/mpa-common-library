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
        this.addImpl(this.info).then(id => {
          this.$success('add success').then(_ => {
            this.$router.push(`${location.pathname.substring(0, location.pathname.lastIndexOf('/'))}/edit/${id}?disabled=true`)
          })
        }).catch(this.$apiError)
      })
    }
  }
}