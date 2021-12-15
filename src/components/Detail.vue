<template>
    <div class = 'detail'>
        <el-table
            border
            stripe
            ref = 'table'
            :data = 'tableData'
            @selection-change = "handleSelectionChange"
        >
            <el-table-column type = "selection" />
            <el-table-column prop = 'keyword' label = 'keyword' />
            <el-table-column prop = 'username' label = 'username' />
            <el-table-column prop = 'sendTime' label = 'sendTime' />
            <el-table-column prop = 'content' label = 'content' />
            <el-table-column width = '16' resizable: false />
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            tableView: null,
            tableDataMaxLength: 100
        }
    },
    computed: {
        tableData() {
            if (this.tableView) {
                const tableData = this.$store.state.TableData.tableData
                const clientHeight = this.tableView.clientHeight
                const scrollTop = this.tableView.scrollTop
                const scrollHeight = this.tableView.scrollHeight
                if (tableData.length > this.tableDataMaxLength) {
                    tableData.shift()
                }
                if (clientHeight === scrollHeight - scrollTop) {
                    this.$nextTick(() => {
                        this.tableView.scrollTop +=
                            this.tableView.scrollHeight - scrollHeight
                    })
                }
                return tableData
            } else {
                return null
            }
        }
    },
    methods: {
        /**
         * @param {Msg[]} selectedMsgs
         */
        handleSelectionChange(selectedMsgs) {
            this.tableData.forEach((msg) => {
                msg.isSelected = selectedMsgs.includes(msg)
            })
        }
    },
    mounted() {
        this.tableView = this.$refs.table.$refs.bodyWrapper
    }
}
</script>

<style lang = 'less' scoped>
.detail {
    margin: 2%;
    /deep/ .el-table {
        .el-table__body-wrapper {
            max-height: 92vh;
            overflow-y: auto;
        }
    }
}
</style>
