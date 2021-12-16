<template>
    <div class = 'handset'>
        <div class = 'time-shower'>
            <el-time-picker
                readonly
                :value = 'new Date(0, 0, 0, hour, minute, second)'
            />
        </div>
        <div class = 'buttons'>
            <div class = 'other-buttons'>
                <div
                    class = 'log-manage-buttons'
                    style = 'display: inline-block'
                >
                    <el-button
                        type = 'warning'
                        :disabled =
                            '$store.state.TableData.tableData.length === 0'
                        @click = "clearSelectedLog"
                    >clear selected log</el-button>
                    <hr>
                    <el-button
                        type = 'danger'
                        :disabled =
                            '$store.state.TableData.tableData.length === 0'
                        @click = "clearAllLog"
                    >clear all log</el-button>
                </div>
                <div>
                    <el-button
                        circle
                        type = 'danger'
                        icon = 'el-icon-switch-button'
                        :disabled = 'state === "off"'
                        @click = 'turnOff'
                    />
                    <hr>
                    <el-button
                        circle
                        type = 'primary'
                        icon = 'el-icon-search'
                        @click = 'callDrawer'
                    />
                </div>
            </div>
            <div class = 'main-button'>
                <transition-group
                    appear
                    name = 'animate__animated animate__bounce'
                    enter-active-class = 'animate__rotateIn'
                    leave-active-class = 'animate__rotateOut'
                >
                    <el-button
                        circle
                        type = 'success'
                        key = 'on'
                        v-if = 'state === "off"'
                        @click = 'turnOn'
                    >给<span
                        style = '
                            font-size: 32px
                        '
                    >👴</span>爬</el-button>
                    <el-button
                        class = 'icon'
                        circle
                        icon = 'el-icon-video-pause'
                        key = 'pause'
                        type = 'warning'
                        v-if = 'state === "on"'
                        @click = 'turnPause'
                    ></el-button>
                    <el-button
                        class = 'icon'
                        circle
                        icon = 'el-icon-video-play'
                        type = 'success'
                        key = 'continue'
                        v-if = 'state === "pause"'
                        @click = 'turnOn'
                    ></el-button>
                </transition-group>
            </div>
        </div>
        <el-drawer
            title = 'Search keyword'
            :visible.sync = 'drawer'
        >
            <Searcher />
        </el-drawer>
    </div>
</template>

<script>
import axios from 'axios'
import config from '../config.js'
import Searcher from '../components/Searcher.vue'

export default {
    name: 'Handset',
    props: [ 'keyword', 'refreshBreak', 'setState', 'setDefaultRefreshBreak' ],
    components: {
        Searcher
    },
    data() {
        return {
            state: 'off',
            hour: 0,
            minute: 0,
            second: 0,
            timeUpdateInterval: null,
            tableDataUpdateInterval: null,
            loadTimeOfChangeState: 500,
            drawer: false
        }
    },
    methods: {
        clearSelectedLog() {
            /**
             * @type {any[]} tableData
             */
            let tableData = this.$store.state.TableData.tableData
            this.$store.state.TableData.tableData =
                tableData.filter(msg => !msg.isSelected)
        },
        clearAllLog() {
            this.$store.state.TableData.tableData = []
        },
        turnOn() {
            this.state = 'loading'
            setTimeout(() => this.state = 'on', this.loadTimeOfChangeState)
            this.setState('on')
            this.timeUpdateInterval = setInterval(() => {
                if (this.second === 59) {
                    this.second = 0
                    if (this.minute === 59) {
                        this.minute = 0
                        this.hour++
                    } else {
                        this.minute++
                    }
                } else {
                    this.second++
                }
            }, 1000)
            this.tableDataUpdateInterval = setInterval(() => {
                this.$store.dispatch(
                    'TableData/insert',
                    this.keyword
                )
            }, this.refreshBreak || 1000)
            this.refreshBreak || this.setDefaultRefreshBreak()
        },
        turnPause() {
            this.state = 'loading'
            setTimeout(() => this.state = 'pause', this.loadTimeOfChangeState)
            this.setState('pause')
            this.clearIntervals()
        },
        turnOff() {
            this.state = 'loading'
            setTimeout(() => this.state = 'off', this.loadTimeOfChangeState)
            this.setState('off')
            this.clearIntervals()
            ;[ this.hour, this.minute, this.second ] = [ 0, 0, 0 ]
            if (config.offlineModel) {
                // Nothing todo
            } else {
                axios({
                    method: 'get',
                    // url: 'http://192.168.43.253:5000/over',
                    url: config.serverUrl[config.LANModel
                        ? "LANRoot"
                        : "root"
                    ] + config.serverUrl.endSearch,
                    responseType: 'json'
                })
            }
        },
        clearIntervals() {
            clearInterval(this.timeUpdateInterval)
            clearInterval(this.tableDataUpdateInterval)
            this.timeUpdateInterval = null
            this.tableDataUpdateInterval = null
        },
        callDrawer() {
            this.drawer = true
        }
    }
}
</script>

<style lang = 'less' scoped>
.handset {
    height: 444px;  /* 48vh */
    width: 288px;   /* 32% */
    margin: 32px;
    border-radius: 16px;
    background-color: #cecece;
    box-shadow:
    0 16px 4px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /deep/ .time-shower {
        padding: 16px;
        height: 16%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .el-date-editor {
            .el-input__inner {
                text-align: center;
                font-size: 32px;
                font-family: 'Courier New', Courier, monospace;
            }
        }
    }
    /deep/ .buttons {
        margin: 8%;
        border: 1px;
        height: 68%;
        width: 84%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-color: #aeaeae;
        border-style: solid;
        border-radius: 16px;
        box-shadow:
            inset 0 16px 4px 8px rgba(174, 174, 174, 0.64);
        background-color: #bebebe;
        .other-buttons {
            height: 50%;
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .log-manage-buttons {
                width: 80%;
                margin: 16px;
                button {
                    width: 100%;
                    margin: 0 auto;
                }
            }
            button {
                box-shadow:
                    0 4px 4px 8px rgba(174, 174, 174, 0.64);
            }
        }
        .main-button {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            button {
                --animate-duration: 0.5s;
                box-shadow:
                    0 4px 4px 8px rgba(0, 0, 0, 0.1);
                height: 100px;
                width: 100px;
            }
            .icon {
                font-size: 50px;
            }
        }
    }
}
</style>
