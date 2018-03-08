<template>
    <nav class="sider-navbar" ref="scrollbar">
        <section class="sider-navbar-scroll" >
            <div class="avatar">
                <span class="avatar-img">
                    <img src="/static/images/avatar.png" width="40" alt="">
                </span>
                <div class="avatar-info">
                    <span class="name">大兵</span>
                    <span class="depart">信息技术管理员 <i class="el-icon-arrow-down"></i></span>
                </div>
            </div>
            <h2 class="sider-navbar__h2">工作台</h2>
            <el-row class="tac">
                <el-menu
                    default-active="0"
                    :default-openeds="['3']"
                    class="el-menu-vertical-demo"
                    >
                    <el-menu-item index="1">
                        <i class="material-icons" style="color: #4680ff">home</i>
                        <span slot="title">控制台</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="material-icons" style="color: #FC6180">credit_card</i>
                        <span slot="title">建档立卡</span>
                    </el-menu-item>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="material-icons"  style="color: #93BE52;">subscriptions</i>
                            <span>帮扶措施</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1"><i class="su-icon el-icon-arrow-right"></i>驻村帮扶</el-menu-item>
                            <el-menu-item index="3-2"><i class="su-icon el-icon-arrow-right"></i>片区坚攻</el-menu-item>
                            <el-menu-item index="3-3"><i class="su-icon el-icon-arrow-right"></i>老区建设</el-menu-item>
                            <el-menu-item index="3-4"><i class="su-icon el-icon-arrow-right"></i>产业扶贫</el-menu-item>
                            <el-menu-item index="3-5"><i class="su-icon el-icon-arrow-right"></i>行业扶贫</el-menu-item>
                            <el-menu-item index="3-6"><i class="su-icon el-icon-arrow-right"></i>易地扶贫</el-menu-item>
                            <el-menu-item index="3-7"><i class="su-icon el-icon-arrow-right"></i>定点扶贫</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-menu-item index="4">
                        <i class="material-icons" style="color: #FFB64D;">settings_input_antenna</i>
                        <span slot="title">扶贫成效</span>
                    </el-menu-item>


                    <el-menu-item index="5">
                        <i class="material-icons" style="color: #39ADB5;">gavel</i>
                        <span slot="title">考核评估</span>
                    </el-menu-item>

                    <el-menu-item index="6">
                        <i class="material-icons" style="color: #93BE52">toys</i>
                        <span slot="title">社会帮扶</span>
                    </el-menu-item>

                    <el-menu-item index="7">
                        <i class="material-icons" style="color: #ab7967;">directions_run</i>
                        <span slot="title">人才培训</span>
                    </el-menu-item>

                    <el-menu-item index="8">
                        <i class="material-icons" style="color: #FC6180;">account_balance</i>
                        <span slot="title">督察管理</span>
                    </el-menu-item>

                    <el-menu-item index="9">
                        <i class="material-icons" style="color: #4680ff;">next_week</i>
                        <span slot="title">金融合作</span>
                    </el-menu-item>

                    <el-menu-item index="10">
                        <i class="material-icons" style="color: #4680ff;">record_voice_over</i>
                        <span slot="title">任务通知</span>
                    </el-menu-item>

                    <el-menu-item index="11">
                        <i class="material-icons" style="color: #ab7967;">radio_button_checked</i>
                        <span slot="title">运维中心</span>
                    </el-menu-item>

                </el-menu>
            </el-row>
        </section>
    </nav>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        mounted (){
            setTimeout(()=>{
                new BScroll(this.$refs.scrollbar,{
                    scrollbar : true,
                    mouseWheel : true,
                });
            },1000)
        }
    }
</script>
