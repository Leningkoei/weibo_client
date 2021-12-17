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
                />
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot = 'label'>
                    <i class = 'el-icon-user' />
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
    height: 16%;
    min-height: 144px;
    margin: 16px;
    padding: 16px;
    background-color: rgba(219, 223, 238, 0.64);
    border-radius: 8px;
}
</style>
