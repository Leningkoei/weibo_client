<template>
    <div>
        <el-button
            @click = 'logout'
        >logout</el-button>
    </div>
</template>

<script>
export default {
    name: 'Main',
    methods: {
        logout() {
            localStorage.removeItem('loginState')
            this.$router.replace({
                name: 'login'
            })
        }
    }
}
</script>

<style>

</style>
