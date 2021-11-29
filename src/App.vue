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
/* html {
    background-color: #484848;
} */
</style>
