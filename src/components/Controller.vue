<template>
    <div class = 'controller'>
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
        <el-button
            type = 'success'
            @click = 'turnOn'
            v-if = 'state === "off"'
        >给👴爬</el-button>
        <el-button
            type = 'warning'
            circle
            icon = 'el-icon-video-pause'
            @click = 'turnPause'
            v-if = 'state === "on"'
        ></el-button>
        <el-button
            type = 'success'
            circle
            icon = 'el-icon-video-play'
            @click = 'turnOn'
            v-if = 'state === "pause"'
        ></el-button>
        <el-button
            type = 'danger'
            circle
            icon = 'el-icon-switch-button'
            @click = 'turnOff'
            v-if = 'state === "on" || state === "pause"'
        ></el-button>
        <el-time-picker
            readonly
            :value = 'time'
        ></el-time-picker>
    </div>
</template>

<script>
export default {
    name: 'Controller',
    data() {
        return {
            keyword: '',
            refreshBreak: '',
            state: 'off',
            time: new Date(0, 0, 0, 0, 0, 0),
            timeUpdateInterval: null,
            tableDataUpdateInterval: null,
            selectIsDisabled: false
        }
    },
    methods: {
        turnOn() {
            this.refreshBreak = this.refreshBreak || 1
            this.state = 'on'
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
            this.state = 'pause'
            this.clearIntervals()
        },
        turnOff() {
            this.state = 'off'
            this.clearIntervals()
            this.time = new Date(0, 0, 0, 0, 0, 0)
            this.selectIsDisabled = false
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
    margin: 32px;
    /deep/ .el-input {
        .el-select {
            width: 144px;
        }
    }
}
</style>
