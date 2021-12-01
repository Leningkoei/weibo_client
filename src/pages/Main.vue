<template>
    <div class = 'main-page'>
        <div class = 'left'>
            <User/>
            <hr>
            <Controller/>
        </div>
        <div class = 'right'>
            <Detail/>
        </div>
    </div>
</template>

<script>
import User from '../components/User.vue'
import Controller from '../components/Controller.vue'
import Detail from '../components/Detail.vue'

export default {
    name: 'Main',
    components: {
        User,
        Controller,
        Detail
    },
    methods: {
    }
}
</script>

<style lang = 'less' scoped>
.main-page {
    display: flex;
    flex-direction: row;
    /deep/ .left {
        background-color: red;
        height: 100vh;
        width: 50vw;
        hr {
            margin-right: 0;
            margin-left: 0;
            border-right: 0;
            border-left: 0;
        }
    }
    /deep/ .right {
        background-color: green;
        height: 100vh;
        width: 50vw;
    }
}

</style>
