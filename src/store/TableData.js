import axios from 'axios'
import config from "../config.js"

export default {
    namespaced: true,
    actions: {
        insert(context, keyword) {
            axios({
                method: 'get',
                // url: 'http://192.168.43.253:5000/getOne',
                url: config.serverUrl[config.testModel ? "testRoot" : "root"] +
                    config.serverUrl.getOne,
                responseType: 'json'
            }).then(
                response => {
                    context.commit('INSERT', {
                        keyword: keyword,
                        username: response.data.用户昵称,
                        sendTime: response.data.发文时间,
                        content: response.data.文章内容
                    })
                    console.log(response.data)
                },
                error => {
                    console.log(error)
                }
            )
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
