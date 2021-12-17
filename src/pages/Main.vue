<template>
    <div class = 'main-page'>
        <div class = 'left'>
            <User />
            <hr>
            <Controller />
        </div>
        <div class = 'right'>
            <Detail />
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
    height: 100vh;
    width: 100vw;
    min-height: 800px;
    min-width: 1440px;
    display: flex;
    flex-direction: row;
    background-image: url(../assets/desk.jpg);
    background-size: cover;
    .left {
        /* background-color: red; */
        height: 100%;
        /* width: 50%; */
        width: 32%;
        hr {
            margin-right: 0;
            margin-left: 0;
            border-right: 0;
            border-left: 0;
        }
    }
    .right {
        /* background-color: green; */
        height: 100%;
        /* width: 50%; */
        width: 68%;
        min-width: 960px;
    }
}
</style>
