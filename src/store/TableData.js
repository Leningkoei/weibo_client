import axios from 'axios'
import config from "../config.js"

export default {
    namespaced: true,
    actions: {
        insert(context, keyword) {
            if (config.offlineModel) {
                context.commit("INSERT", new Msg(
                    false,
                    "南无",
                    "陈南平",
                    "1919/08/10/11:45:14",
                    "NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL"
                ))
            } else {
                axios({
                    method: 'get',
                    // url: 'http://192.168.43.253:5000/getOne',
                    url: config.serverUrl[config.LANModel
                        ? "LANRoot"
                        : "root"
                    ] + config.serverUrl.getOne,
                    responseType: 'json'
                }).then(
                    response => {
                        context.commit('INSERT', new Msg(
                            false,
                            keyword,
                            response.data.用户昵称,
                            response.data.发文时间,
                            response.data.文章内容
                        ))
                        // console.log(response.data)
                    },
                    err => {
                        // console.log(error)
                        alert(err)
                    }
                )
            }
        }
    },
    mutations: {
        INSERT(state, value) {
            state.tableData.push(value)
        },
        CLEAR(state) {
            state.tableData = []
        }
    },
    state: {
        tableData: []
    }
}

class Msg {

    constructor(isSelected, keyword, username, sendTime, content) {
        this.isSelected = isSelected
        this.keyword = keyword
        this.username = username
        this.sendTime = sendTime
        this.content = content
    }
}
