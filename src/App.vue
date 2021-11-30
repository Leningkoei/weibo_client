<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    beforeCreate() {
        if (localStorage.getItem("loginState")) {
            this.$router.replace({
                name: 'main'
            })
        } else {
            this.$router.replace({
                name: 'login'
            })
        }
    }
};
</script>

<style>
body {
    margin: 0;
}
</style>
