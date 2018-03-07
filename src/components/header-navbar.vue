<template>
    <nav class="header-navbar">
        <div class="header-navbar__logo">
            <h1><img src="/static/images/logo.png" alt=""></h1>
        </div>
        <ul class="header-navbar__left">
            <li><a href="javascript:;" class="fold"><span><i class="material-icons">menu</i></span></a></li>
            <li><a href="javascript:;"><i class="material-icons">fullscreen</i></a></li>
            <li><a href="javascript:;"><i class="material-icons">search</i></a></li>
            <li><a href="javascript:;"><i class="material-icons">apps</i> <span>快捷导航</span></a></li>
            <li><a href="javascript:;" class="datacenter"><i class="material-icons">bubble_chart</i>大数据监控</a></li>
        </ul>
        <ul class="header-navbar__right">
            <li><a href="javascript:;"><i class="material-icons">chat</i></a></li>
            <li><a href="javascript:;"><i class="material-icons">add_alert</i></a></li>
            <li>
                <a href="javascript:;">
                    <img src="/static/images/avatar.png" class="avatar">
                    <span>John Doe</span>
                    <i class="material-icons">expand_more</i>
                </a>
            </li>
            <li>
                <router-link class="layout" to="/login"><i class="material-icons">power_settings_new</i></router-link>
            </li>
        </ul>
    </nav>
</template>

