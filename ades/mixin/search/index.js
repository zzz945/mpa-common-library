import MessageMixin from "mpa-common-library/mixin/message"
import './index.styl'

export default {
  mixins: [MessageMixin],
  props: {
    select: {
      type: String|Boolean,
      default: false,
    },
    disableAdd: {
      type: Boolean,
      default: false,
    },
    disableEdit: {
      type: Boolean,
      default: false,
    },
    disableDelete: {
      type: Boolean,
      default: false,
    },
  },
  components: {
  },
  data () {
    return {
      queryParams: {},
      tableData: [],
      pageSize: 10,
      curPage: 0,
      total: 0,
      loading: false,
      selected: '',
      multiSelected: [],
      basePath: '',
    }
  },
  created () {
    if (this.getBasePath) {
      this.basePath = this.getBasePath()
    } else {
      this.basePath = location.pathname
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    search () {
      return this.searchImpl(this.curPage, this.pageSize, this.queryParams).then(d => {
        this.tableData = d.items
        this.total = d.total
      }).catch(this.$apiError)
    },
    handleDelete (item) {
      return this.$confirm(`Are you sure to delete ${item.name}?`).then(act => {
        if (act === 'cancel') return
        return this.deleteImpl(item).then(_ => {
          this.$success('delete success')
          this.search()
        }).catch(this.$apiError)
      })
    },
    handlePageChange (page) {
      this.curPage = page
      this.search()
    },
    handleEdit (item) {
      var url
      if (!this.multiSelected.length) {
        url = `${this.basePath}/edit/${item.id}`
      } else {
        url = `${this.basePath}/edit/${JSON.stringify(this.multiSelected.map(item => item.id))}`
      }
      if (this.basePath === location.basePath) {
        this.$router.push(url)
      } else {
        location.href = url
      }
    },
    handleAdd () {
      const url = `${this.basePath}/add`
      if (this.basePath === location.basePath) {
        this.$router.push(url)
      } else {
        location.href = url
      }
    },
    handleCurrentChange (item) {
      this.selected = item
      this.$emit('action', 'select', item)
    },
    handleSelectionChange (items) {
      this.multiSelected = items
      this.$emit('action', 'multi-select', items)
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (column.label === 'Operations' && this.multiSelected.length) {
        return {
          rowspan: this.pageSize,
          colspan: 1
        }
      } else {
        return {
          rowspan: 1,
          colspan: 1
        }
      }
    }
  }
}