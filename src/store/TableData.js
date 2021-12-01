// import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        insert(context) {
            // axios({
            //     method: 'get',
            //     url: 'TODO',
            //     data: {
            //         TODO: 'TODO'
            //     },
            //     responseType: 'json'
            // }).then(
            //     response => {
            //         console.log(response)
            //         context.commit('INSERT', response.data)
            //     },
            //     error => {
            //         console.log(error)
            //     }
            // )
            context.commit('INSERT', {
                keyword: 'nmsl',
                username: 'nmsl',
                sendTime: 'nmsl',
                content: 'nmsl'
            })
        }
    },
    mutations: {
        INSERT(state, value) {
            state.tableData.push(value)
        }
    },
    state: {
        tableData: []
    }
}
