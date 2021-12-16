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
            // tableView: null, -- (1)
            tableDataMaxLength: 100
        }
    },
    computed: {
        tableData() {
            // (1) 耦合了检测 table data 的变化和滚动屏幕
            // if (this.tableView) {
            //     const tableData = this.$store.state.TableData.tableData
            //     const clientHeight = this.tableView.clientHeight
            //     const scrollTop = this.tableView.scrollTop
            //     const scrollHeight = this.tableView.scrollHeight
            //     if (tableData.length > this.tableDataMaxLength) {
            //         tableData.shift()
            //     }
            //     if (clientHeight === scrollHeight - scrollTop) {
            //         this.$nextTick(() => {
            //             this.tableView.scrollTop +=
            //                 this.tableView.scrollHeight - scrollHeight
            //         })
            //     }
            //     return tableData
            // } else {
            //     return null
            // }
            const tableData = this.$store.state.TableData.tableData
            if (tableData.length > this.tableDataMaxLength) {
                tableData.shift()
            }
            return tableData
        },
        tableView() {
            if (this.$refs.table) {
                return this.$refs.table.$refs.bodyWrapper
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
    watch: {
        tableData() {
            const clientHeight = this.tableView.clientHeight
            const scrollTop = this.tableView.scrollTop
            const scrollHeight = this.tableView.scrollHeight
            if (clientHeight === scrollHeight - scrollTop) {
                this.$nextTick(() => {
                    this.tableView.scrollTop +=
                        this.tableView.scrollHeight - scrollHeight
                })
            }
        }
    }
    // }, -- (1) -- 而且获取 table view 可以使用 computed
    // mounted() {
    //     // this.tableView = this.$refs.table.$refs.bodyWrapper
    // }
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
