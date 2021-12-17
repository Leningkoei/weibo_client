<template>
    <div class = 'controller'>
        <div class = 'input'>
            <el-input
                class = 'input-with-select'
                placeholder = 'keyword'
                :disabled = 'state === "on"'
                v-model = 'keyword'
                @blur = 'sendKeyword'
            >
                <el-select
                    slot = 'append'
                    placeholder = 'refresh break'
                    :disabled = 'state === "on" || state === "pause"'
                    v-model = 'refreshBreak'
                >
                    <el-option label = '1s' :value = '1000' />
                    <el-option label = '2s' :value = '2000' />
                </el-select>
            </el-input>
        </div>
        <div class = 'handset-docker'>
            <Handset
                ref = 'handset'
                :keyword = 'keyword'
                :refreshBreak = 'refreshBreak'
                :setState = 'setState'
                :setDefaultRefreshBreak = 'setDefaultRefreshBreak'
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Handset from './Handset.vue'
import config from '../config.js'

export default {
    name: 'Controller',
    components: {
        Handset
    },
    data() {
        return {
            keyword: '',
            refreshBreak: '',
            state: 'off'
        }
    },
    methods: {
        sendKeyword() {
            if (this.keyword.trim()) {
                if (config.offlineModel) {
                    // Nothing todo
                } else {
                    axios({
                        method: 'post',
                        // url: 'http://192.168.43.253:5000/ScarySina',
                        url: config.serverUrl[config.LANModel
                            ? "LANRoot"
                            : "root"
                        ] + config.serverUrl.setKeyword,
                        data: {
                            keyword: this.keyword
                        },
                        responseType: 'json'
                    })
                }
            }
        },
        setState(state) {
            this.state = state
        },
        setDefaultRefreshBreak() {
            this.refreshBreak = 1000
        }
    }
}
</script>

<style lang = 'less' scoped>
.controller {
    height: 72%;
    width: 100%;    /* 50vw */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .input {
        width: 80%;
        /* margin: 32px; */
        /* padding: 32px; */
        margin: 32px auto 0 auto;
        /deep/ .el-input {
            .el-select {
                width: 144px;
            }
        }
    }
    .handset-docker {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
