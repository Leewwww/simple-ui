<template>
    <div class="layout-header">
    </div>
    <div class="layout-body">
        <div class="layout-menu-side">
            <menu-side></menu-side>
        </div>
        <div class="layout-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuSide from './menu-side/index.vue'

export default defineComponent({
    components: {
        menuSide
    },
    setup() {
        
    },
})
</script>

<style scoped>
.layout-header {
    height: 60px;
    border: 1px solid #666;
}
.layout-body {
    display: flex;
}
.layout-menu-side {
    width: 200px;
    flex: 0 0 auto;
}
.layout-container {
    flex: 1;
}
</style>
