<template>
    <div class = 'login-page'>
        <div class = 'login'>
            <transition
                appear
                name = 'animate__animated animate__bounce'
                enter-active-class="animate__flip"
            >
                <div id = 'logo'>
                    <div id = 'weibo-block'>
                        <span id = 'weibo'>Wibo</span>
                    </div>
                    <div id = 'pachong-block'>
                        <span id = 'pachong'>pcn</span>
                    </div>
                </div>
            </transition>
            <el-form label-width = '100px'>
                <el-form-item label = 'Username'>
                    <el-input v-model = 'username' />
                </el-form-item>
                <el-form-item label = 'Password'>
                    <el-input type = 'password' v-model = 'password' />
                </el-form-item>
                <el-form-item>
                    <el-button
                        type = 'primary'
                        @click = 'submitForm'
                    >Submit</el-button>
                    <el-button
                        type = 'warning'
                        icon = 'el-icon-delete'
                        circle
                        @click = 'resetForm'
                    />
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from "../config.js"

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            if (config.offlineModel) {
                localStorage.setItem("loginState", "true")
                localStorage.setItem("username", this.username)
                this.$router.replace({
                    name: "main"
                })
            } else {
                axios({
                    method: 'post',
                    url: config.serverUrl[config.LANModel
                        ? "LANRoot"
                        : "root"
                    ] + config.serverUrl.login,
                    data: {
                        username: this.username,
                        password: this.password
                    },
                    responseType: 'json'
                }).then(response => {
                    if (response.data.isPermit) {
                        localStorage.setItem('loginState', 'true')
                        localStorage.setItem('username', this.username)
                        this.$router.replace({
                            name: 'main'
                        })
                    }
                }).catch(err => {
                    alert(err)
                })
            }
        },
        resetForm() {
            this.username = ''
            this.password = ''
        }
    }
}
</script>

<style lang = 'less' scoped>
.login-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(../assets/background.png);
    .login {
        margin: -28vh auto 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(219, 223, 238, 0.32);
        border-radius: 4px;
        box-shadow:
            inset 0 16px 4px 4px rgba(219, 223, 238, 0.32),
            0 16px 4px 4px rgba(0, 0, 0, 0.04);
        #logo {
            height: 90px;
            width: 100px;
            margin: 32px auto 32px auto;
            padding-bottom: 10px;
            border-radius: 4px;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
            opacity: 0.8;
            #weibo-block {
                top: -5px;
                text-align: center;
                #weibo {
                    color: #ffffff;
                    font-size: 24px;
                    font-weight: 900;
                    font-family: Arial, Helvetica, sans-serif;
                }
            }
            #pachong-block {
                text-align: center;
                #pachong {
                    padding: 0 10px 6px 10px;
                    background-color: #ff9900;
                    border-radius: 4px;
                    font-size: 24px;
                    font-weight: 900;
                    font-family: Arial, Helvetica, sans-serif;
                }
            }
        }
        /deep/ .el-form {
            padding-right: 32px;
            .el-input {
                input {
                    background-color: rgba(255, 255, 255, 0.16);
                }
            }
            .el-button {
                opacity: 0.8;
            }
        }
    }
}
</style>
