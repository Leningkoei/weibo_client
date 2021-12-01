import Vue from 'vue'
import Vuex from 'vuex'

import TableData from './TableData.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        TableData
    }
})
