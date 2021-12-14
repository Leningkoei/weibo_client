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
                    :disabled = 'state === "on"'
                    v-model = 'refreshBreak'
                >
                    <el-option
                        label = '1s'
                        :value = '1000'
                    ></el-option>
                    <el-option
                        label = '2s'
                        :value = '2000'
                    >
                    </el-option>
                </el-select>
            </el-input>
        </div>
        <Handset

            ref = 'handset'
            :keyword = 'keyword'
            :refreshBreak = 'refreshBreak'
            :setState = 'setState'
            :setDefaultRefreshBreak = 'setDefaultRefreshBreak'
        />
    </div>
</template>

<script>
import axios from 'axios'

import Handset from './Handset.vue'

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
                axios({
                    method: 'post',
                    url: 'http://192.168.43.253:5000/ScarySina',
                    data: {
                        keyword: this.keyword
                    },
                    responseType: 'json'
                })
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
    width: 100%;    /* 50vw */
    /deep/ .input {
        margin: 32px;
        .el-input {
            .el-select {
                width: 144px;
            }
        }
    }
}
</style>
