<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    beforeCreate() {
        if (localStorage.getItem('loginState')) {
            if (this.$route.name !== 'main') {
                this.$router.replace({
                    name: 'main'
                })
            }
        } else {
            if (this.$route.name !== 'login') {
                this.$router.replace({
                    name: 'login'
                })
            }
        }
    }
};
</script>

<style>
body {
    margin: 0;
}
</style>
