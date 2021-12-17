<template>
    <div class = 'searcher'>
        <div class = 'logo'>
            <span id = 'k'>K</span><span id = 'e'>e</span><span id = 'y'
            >y</span><span id = 'w'>w</span><span
            id = 'r'>r</span><span id = d>d</span>
        </div>
        <div class = 'input'>
            <el-input v-model = 'keyword'>
                <el-button
                    slot = 'append'
                    icon = 'el-icon-search'
                    @click = 'searchKeyword'
                />
            </el-input>
        </div>
        <div class = 'detail'>
            <el-table
                style = 'min-width: 960px;'
                border
                stripe
                ref = 'table'
                :data = 'searchResult'
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
    </div>
</template>

<script>
export default {
    name: 'Searcher',
    data() {
        return {
            keyword: '',
            searchResult: [
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                },
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                },
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                },
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                },
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                },
                {
                    isSelected: false,
                    keyword: '南无',
                    username: '陈南平',
                    sendTime: '1919/08/10/11:45:14',
                    content: 'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    userId: 'This is a user id',
                    userType: 'This is a user type',
                    setoutType: 'This is a setout type',
                    originUrl: 'This is a origin url',
                    attitudeCount: 'This is a attitude count',
                    commentCount: 'This is a comment count',
                    forwardCount: 'This is a forward count',
                    scaryDate: 'This is a scary date'
                }
            ]
        }
    },
    methods: {
        searchKeyword() {
            // TODO
        }
    }
}
</script>

<style lang = 'less' scoped>
.searcher {
    .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        span {
            font-size: 100px;
            font-family: 'Catull';
        }
        #k {
            color: blue;
        }
        #e {
            color: red;
        }
        #y {
            color: yellow;
        }
        #w {
            color: blue;
        }
        #r {
            color: green;
        }
        #d {
            color: red;
            transform: rotate(-24deg)
        }
    }
    .detail {
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
}
.form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    div {
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
