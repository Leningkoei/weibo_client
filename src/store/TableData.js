import axios from 'axios'
import config from '../config.js'
import Msg from '../model/Msg.js'

export default {
    namespaced: true,
    actions: {
        insert(context, keyword) {
            if (config.offlineModel) {
                const msg = new Msg(
                    '南无',
                    '陈南平',
                    '1919/08/10/11:45:14',
                    'NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL NMSL',
                    'This is a user id',
                    'This is a user type',
                    'This is a setout type',
                    'This is a origin url',
                    'This is a attitude count',
                    'This is a comment count',
                    'This is a forward count',
                    'This is a scary date'
                )
                msg.isSelected = false
                context.commit('INSERT', msg)
            } else {
                axios({
                    method: 'get',
                    // url: 'http://192.168.43.253:5000/getOne',
                    url: config.serverUrl[config.LANModel
                        ? 'LANRoot'
                        : 'root'
                    ] + config.serverUrl.getOne,
                    responseType: 'json'
                }).then(
                    response => {
                        context.commit('INSERT', new Msg(
                            false,
                            keyword,
                            response.data.user_screen_name,
                            response.data.create_at_time,
                            response.data.title_content
                        ))
                    },
                    err => {
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

// class Msg {

//     constructor(
//         isSelected,     // 是否被选择
//         keyword,        // 关键词
//         username,       // 用户名
//         sendTime,       // 发送时间
//         content,        // 文章内容
//         userId,         // 用户id
//         userType,       // 用户类型
//         setoutType,     // 设备种类
//         originUrl,      // 原文地址
//         attitudeCount,  // 点赞次数
//         commentCount,   // 评论次数
//         forwardCount,   // 转发次数
//         scaryDate       // 爬取时间
//     ) {
//         this.isSelected = isSelected
//         this.keyword = keyword
//         this.username = username
//         this.sendTime = sendTime
//         this.content = content
//         this.userId = userId
//         this.userType = userType
//         this.setoutType = setoutType
//         this.originUrl = originUrl
//         this.attitudeCount = attitudeCount
//         this.commentCount = commentCount
//         this.forwardCount = forwardCount
//         this.scaryDate = scaryDate
//     }
// }
