<template>
    <div class = "login">
        <el-form
            label-width = '100px'
        >
            <el-form-item
                label = 'Username'
            >
                <el-input
                    v-model = 'username'
                />
            </el-form-item>
            <el-form-item
                label = 'Password'
            >
                <el-input
                    v-model = 'password'
                />
            </el-form-item>
            <el-button
                @click = 'login'
            >Submit</el-button>
        </el-form>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // axios({
            //     method: 'post',
            //     url: 'http://192.168.43.253:2048/login',
            //     data: {
            //         username: this.username,
            //         password: this.password
            //     },
            //     responseType: 'json'
            // }).then(
            //     response => {
            //         console.log(response.data)
            //         if (response.data.isPermit) {
            //             TODO: login succeed
            //         } else {
            //             alert('failed')
            //         }
            //     },
            //     error => {
            //         console.log(error)
            //     }
            // )

            //#region  login succeed
            console.log(this.$router)
            localStorage.setItem('loginState', true)
            this.$router.push({
                name: 'main',
            })
            //#endregion
        }
    }
}
</script>

<style lang = 'less' scoped>
.login {
    width: fit-content;
    margin: 0 auto;
}
</style>
