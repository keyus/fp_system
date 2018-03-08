<template>
    <nav class="subsider-navbar">
        <h3 v-if="title">{{title}}</h3>
        <el-row class="tac">
                <el-menu
                    class="el-menu-vertical-demo"
                    >
                    <el-submenu index="1">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">导航四</span>
                    </el-menu-item>
            </el-menu>
        </el-row>
    </nav>
</template>

<script>
    export default {
        name : 'subsider-navbar',
        props : {
            title : {
                type : String,
                default : ''
            }
        }
    }
</script>


