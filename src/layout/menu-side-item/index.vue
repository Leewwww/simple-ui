<template>
    <el-submenu v-if="menu.children && menu.children.length > 0">
      <template #title>
          <i class="el-icon-location"></i>
          <span>{{ menu.title }}</span>
        </template>
        <menu-item v-for="(item, index) in menu.children" :key="index" :menu="item"></menu-item>
    </el-submenu>
    <template v-else>
        <el-menu-item :index="menu.path">
            <template #title>{{ menu.title }}</template>
        </el-menu-item>
    </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MenuItem',
    props: {
        menu: {
            type: Object,
            default: {}
        }
    },
    mounted () {
        console.log(this.menu)
    },
    setup() {
        
    },
})
</script>
