<template>
    <div class = 'detail'>
        <el-table
            style = 'width: 100%; min-width: 960px;'
            border
            stripe
            ref = 'table'
            :data = 'tableData'
            @selection-change = 'handleSelectionChange'
        >
            <el-table-column type = 'expand'>
                <template slot-scope = 'props'>
                    <el-form
                        class = 'form'
                        label-position = 'right'
                        label-width = '160px'
                    >
                        <div>
                            <el-form-item label = 'user id'>
                                <span>{{props.row.userId}}</span>
                            </el-form-item>
                            <el-form-item label = 'user type'>
                                <span>{{props.row.userType}}</span>
                            </el-form-item>
                            <el-form-item label = 'setout type'>
                                <span>{{props.row.setoutType}}</span>
                            </el-form-item>
                            <el-form-item label = 'origin url'>
                                <span>{{props.row.originUrl}}</span>
                            </el-form-item>
                        </div>
                        <hr>
                        <div>
                            <el-form-item label = 'attitude count'>
                                <span>{{props.row.attitudeCount}}</span>
                            </el-form-item>
                            <el-form-item label = 'comment count'>
                                <span>{{props.row.commentCount}}</span>
                            </el-form-item>
                            <el-form-item label = 'forward count'>
                                <span>{{props.row.forwardCount}}</span>
                            </el-form-item>
                            <el-form-item label = 'scary date'>
                                <span>{{props.row.scaryDate}}</span>
                            </el-form-item>
                        </div>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column type = 'selection' align = 'center' />
            <el-table-column
                label = 'keyword'
                width = 128
                align = 'center'
                prop = 'keyword'
            />
            <el-table-column
                label = 'username'
                width = 128
                align = 'center'
                prop = 'username'
            />
            <el-table-column
                label = 'send time'
                width = 192
                align = 'center'
                prop = 'sendTime'
            />
            <el-table-column
                label = 'content'
                min-width = '240'
                prop = 'content'
            />
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
    width: 96%;
    margin: 2%;
    opacity: 88%;
    /deep/ .el-table {
        .el-table__header-wrapper {
            table {
                thead {
                    tr {
                        th {
                            background-color: #e8e8e8;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .el-table__body-wrapper {
            max-height: 88vh;
            overflow-y: auto;
        }
    }
}
.form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /deep/ div {
        .el-form-item {
            label {
                color: #99a9bf;
            }
        }
    }
    hr {
        width: 1px;
        border-style: none;
        background-color: #e8e8e8;
        /* margin: 0 32px; */
        margin: 0 0 0 32px;
    }
}
</style>
