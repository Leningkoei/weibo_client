<template>
    <div class = 'searcher'>
        <div class = 'logo'>
            <span id = 'k'>K</span><span id = 'e'>e</span><span id = 'y'
            >y</span><span id = 'w'>w</span><span
            id = 'r'>r</span><span id = d>d</span>
        </div>
        <div class = 'input'>
            <el-input v-model = 'keyword'>
                <el-select
                    placeholder = 'page data count'
                    slot = 'prepend'
                    v-model = 'pageDataCount'
                >
                    <el-option label = '5 rows' :value = '5' />
                    <el-option label = '8 rows' :value = '8' />
                    <el-option label = '10 rows' :value = '10' />
                </el-select>
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
                :data = 'currentData'
            >
                <el-table-column type = 'expand'>
                    <template slot-scope = 'props'>
                        <el-form
                            class = 'form'
                            label-position = 'right'
                            label-width = '160px'
                        >
                            <div class = 'content'>
                                <el-form-item label = 'content:'>
                                    <span>{{props.row.content}}</span>
                                </el-form-item>
                            </div>
                            <div class = 'other'>
                                <div>
                                    <el-form-item label = 'user id:'>
                                        <span>{{props.row.userId}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'user type:'>
                                        <span>{{props.row.userType}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'setout type:'>
                                        <span>{{props.row.setoutType}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'origin url:'>
                                        <span>{{props.row.originUrl}}</span>
                                    </el-form-item>
                                </div>
                                <hr>
                                <div>
                                    <el-form-item label = 'attitude count:'>
                                        <span>{{props.row.attitudeCount}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'comment count:'>
                                        <span>{{props.row.commentCount}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'forward count:'>
                                        <span>{{props.row.forwardCount}}</span>
                                    </el-form-item>
                                    <el-form-item label = 'scary date:'>
                                        <span>{{props.row.scaryDate}}</span>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                    label = 'keyword'
                    width = 128
                    align = 'center'
                    prop = 'keyword'
                />
                <el-table-column
                    label = 'username'
                    min-width = '160'
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
                    label = 'preview'
                    min-width = '240'
                    prop = 'preview'
                />
            </el-table>
        </div>
        <div class = 'pagination'>
            <el-pagination
                ref = 'pagination'
                layout = 'prev, pager, next'
                :total = 'pageCount'
                @current-change = 'turnPage'
            />
        </div>
        <a href="http://47.104.196.155:5020/down">download these data</a>
    </div>
</template>

<script>
import axios from 'axios'
import config from '../config.js'
import Msg from '../model/Msg.js'

export default {
    name: 'Searcher',
    data() {
        return {
            keyword: '',
            searchResult: [],
            currentData: [],
            pageDataCount: 10
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.searchResult.length / this.pageDataCount) * 10
        }
    },
    methods: {
        searchKeyword() {
            if (config.offlineModel) {
                for (let i = 0; i < 100; i++) {
                    const msg = new Msg(
                        '南无',
                        '陈南平陈南平陈南平陈南平陈南平',
                        '1919/08/10/11:45:14',
                        'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL ' +
                        'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL ' +
                        'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL ' +
                        'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL' ,
                        'This is a user id',
                        'This is a user type',
                        'This is a setout type',
                        'This is a origin url',
                        'This is a attitude count',
                        'This is a comment count',
                        'This is a forward count',
                        'This is a scary date'
                    )
                    msg.preview = msg.content.length >= 24
                        ? msg.content.substr(0, 24) + '...'
                        : msg.content
                    this.searchResult.push(msg)
                }
                this.turnPage(1)
            } else {
                this.searchResult = []
                axios({
                    method: 'get',
                    url: config.serverUrl[config.LANModel
                        ? 'LANRoot'
                        : 'root'
                    ] + '/queryKeyword',
                    params: {
                        keyword: this.keyword
                    },
                    responseType: 'json'
                }).then(res => {
                    const dataSet = res.data.data
                    for (const data of dataSet) {
                        const msg = Msg.turnResponseDataToMsg(data)
                        msg.preview = msg.content.length >= 24
                            ? msg.content.substr(0, 24) + '...'
                            : msg.content
                        this.searchResult.push(msg)
                    }
                    this.turnPage(1)
                }).catch(err => {
                    alert(err)
                })
            }
        },
        turnPage(currentPage) {
            this.currentData = [ ...this.searchResult ].splice(
                (currentPage - 1) * this.pageDataCount,
                this.pageDataCount
            )
        }
    },
    watch: {
        pageDataCount() {
            this.$refs.pagination.currentPage = 1
            this.turnPage(1)
        }
    }
}
</script>

<style lang = 'less' scoped>
.searcher {
    display: flex;
    flex-direction: column;
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
    .input {
        width: 480px;
        margin: 32px auto;
        /deep/ .el-input {
            .el-input-group__prepend {
                .el-select {
                    width: 100px;
                }
            }
        }
    }
    .detail {
        width: 80%;
        margin: 0 auto;
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
                max-height: 50vh;
                overflow-y: auto;
            }
            .el-table__body-wrapper::-webkit-scrollbar {
                width: 0;
            }
        }
    }
    .pagination {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /deep/ .el-pagination {
            button {
                color: #bdc1c6;
                background-color: #35363a;
            }
            button:hover, button:disabled {
                color: #409eff;
            }
            button:hover {
                text-decoration: underline;
            }
            ul {
                li {
                    color: #bdc1c6;
                    background-color: #35363a;
                }
                li:hover {
                    color: #409eff;
                    text-decoration: underline;
                }
                .active {
                    color: #409eff;
                }
            }
        }
    }
    a {
        margin-right: 10%;
        color: #8ab4f8;
        text-decoration: none;
        flex: 1;
        text-align: right;
    }
    a:hover {
        text-decoration: underline;
    }
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .content {
        /deep/ .el-form-item {
            label {
                color: #99a9bf;
            }
            .el-form-item__content {
                margin-right: 32px;
            }
        }
    }
    .other {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        div {
            /deep/ .el-form-item {
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
}
</style>
