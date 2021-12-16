<template>
    <div class = 'user'>
        <el-descriptions
            title = 'User Info'
            border
        >
            <template slot = 'extra'>
                <el-button
                    type = 'danger'
                    @click = 'logout'
                >Logout</el-button>
            </template>
            <el-descriptions-item>
                <el-avatar
                    :size = '48'
                    :src = 'require("../assets/default_avatar.jpg")'
                ></el-avatar>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot = 'label'>
                    <i class = 'el-icon-user'></i>
                    Username
                </template>
                {{username}}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            username: localStorage.getItem('username')
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('loginState')
            localStorage.removeItem('username')
            this.$router.replace({
                name: 'login'
            })
        }
    },
    beforeCreate() {
        if (localStorage.getItem('username') === null) {
            localStorage.removeItem('loginState')
            this.$router.replace({
                name: 'login'
            })
        }
    }
}
</script>

<style lang = 'less' scoped>
.user {
    height: 144px;
    margin: 32px;
}
</style>
