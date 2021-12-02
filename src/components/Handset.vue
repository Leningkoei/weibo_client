<template>
    <div class = 'handset'>
        <el-time-picker
            readonly
        />
        <div class = 'buttons'>
            <div style = 'display: inline-block'>
                <el-button>clear selected log</el-button>
                <br>
                <el-button>clear all log</el-button>
            </div>
            <el-button
                circle
                type = 'danger'
                icon = 'el-icon-switch-button'
            ></el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Handset'
}
</script>

<style lang = 'less' scoped>
.handset {
    height: 48vh;
    width: 32%;
    margin: 32px;
    border-radius: 4px;
    background-color: #cecece;
    /deep/ .el-date-editor {
        display: block;
        margin: 0 auto 32px auto;
        padding-top: 4%;
    }
    /deep/ .buttons {
        align-content: center;
    }
}
</style>
