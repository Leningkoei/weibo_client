<template>
    <div class = 'controller'>
        <div class = 'input'>
            <el-input
                class = 'input-with-select'
                placeholder = 'keyword'
                v-model = 'keyword'
            >
                <el-select
                    slot = 'append'
                    placeholder = 'refresh break'
                    :disabled = 'selectIsDisabled'
                    v-model = 'refreshBreak'
                >
                    <el-option
                        label = '1s'
                        :value = '1'
                    ></el-option>
                    <el-option
                        label = '2s'
                        :value = '2'
                    >
                    </el-option>
                </el-select>
            </el-input>
        </div>
        <!-- <transition-group
            appear
            name = 'animate__animated animate__bounce'
            enter-active-class = 'animate__rubberBand'
            leave-active-class = 'animate__backOutUp'
        >
            <el-button
                type = 'success'
                @click = 'turnOn'
                v-if = 'state === "off"'
                key = 'on'
            >给👴爬</el-button>
        </transition-group>
            <div
                style = 'height: 40px; width: 40px; display: inline-block'
                v-if = '
                    state === "on" ||
                    state === "pause" ||
                    state === "loadingOne"
                '
            >
            <transition-group
                appear
                name = 'animate__animated animate__bounce'
                enter-active-class = 'animate__rubberBand'
                leave-active-class = 'animate__backOutUp'
            >
                <el-button
                    type = 'warning'
                    circle
                    icon = 'el-icon-video-pause'
                    @click = 'turnPause'
                    v-if = 'state === "on"'
                    key = 'pause'
                ></el-button>
                <el-button
                    type = 'success'
                    circle
                    icon = 'el-icon-video-play'
                    @click = 'turnOn'
                    v-if = 'state === "pause"'
                    key = 'continue'
                ></el-button>
            </transition-group>
            </div>
        <transition-group
            appear
            name = 'animate__animated animate__bounce'
            enter-active-class = 'animate__rubberBand'
            leave-active-class = 'animate__backOutUp'
        >
            <el-button
                type = 'danger'
                circle
                icon = 'el-icon-switch-button'
                @click = 'turnOff'
                v-if = '
                    state === "on" ||
                    state === "pause" ||
                    state === "loadingOne"
                '
                key = 'off'
            ></el-button>
        </transition-group>
        <br>
            <el-button
                type = 'danger'
                @click = 'clearTableData'
            >clear log</el-button>
        <el-time-picker
            readonly
            :value = 'time'
        ></el-time-picker> -->
        <Handset/>
    </div>
</template>

<script>
import 'animate.css'

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
            state: 'off',
            time: new Date(0, 0, 0, 0, 0, 0),
            timeUpdateInterval: null,
            tableDataUpdateInterval: null,
            selectIsDisabled: false,
            loadingTime: 1060
        }
    },
    methods: {
        turnOn() {
            this.refreshBreak = this.refreshBreak || 1
            this.state = this.state === 'off'
                ? 'loading'
                : 'loadingOne'
            setTimeout(() => this.state = 'on', this.loadingTime)
            this.timeUpdateInterval = setInterval(() => {
                const second = this.time.getSeconds()
                if (second === 60) {
                    const minute = this.time.getMinutes()
                    if (minute === 60) {
                        // this.time.setHours(this.time.getHours() + 1)
                        this.time = new Date(
                            0, 0, 0,
                            this.time.getHours() + 1,
                            this.time.getMinutes(),
                            this.time.getSeconds()
                        )
                    } else {
                        // this.time.setMinutes(minute + 1)
                        this.time = new Date(
                            0, 0, 0,
                            this.time.getHours(),
                            minute + 1,
                            this.time.getSeconds()
                        )
                    }
                } else {
                    // this.time.setSeconds(second + 1)
                    this.time = new Date(
                        0, 0, 0,
                        this.time.getHours(),
                        this.time.getMinutes(),
                        second + 1
                    )
                }
            }, 1000)
            this.tableDataUpdateInterval = setInterval(() => {
                this.$store.dispatch('TableData/insert')
            }, this.refreshBreak * 1000)
            this.selectIsDisabled = true
        },
        turnPause() {
            this.state = 'loadingOne'
            setTimeout(() => this.state = 'pause', this.loadingTime)
            this.clearIntervals()
        },
        turnOff() {
            this.state = 'loading'
            setTimeout(() => this.state = 'off', this.loadingTime)
            this.clearIntervals()
            this.time = new Date(0, 0, 0, 0, 0, 0)
            this.selectIsDisabled = false
        },
        clearTableData() {
            this.$store.commit('TableData/CLEAR')
        },
        clearIntervals() {
            clearInterval(this.timeUpdateInterval)
            clearInterval(this.tableDataUpdateInterval)
            this.timeUpdateInterval = null
            this.tableDataUpdateInterval = null
        }
    }
}
</script>

<style lang = 'less' scoped>
.controller {
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
