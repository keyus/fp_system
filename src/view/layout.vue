<template>
    <div class="system">
        <!--头部-->
        <header-navbar></header-navbar>

        <!--边栏-->
        <sider-navbar></sider-navbar>

        <!--主体浏览部分-->
        <div class="system-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headerNavbar from '../components/header-navbar'
    import siderNavbar from '../components/sider-navbar'

    export default {
        components : {
            headerNavbar,
            siderNavbar,
        },
        mounted (){

        }
    }
</script>
