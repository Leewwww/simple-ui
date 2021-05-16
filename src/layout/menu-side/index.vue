<template>
  <el-menu
      :collapse="isOpen"
      :collapse-transition="true"
      :unique-opened="true"
      @select="handelMenuSelect"
      class="el-menu-vertical-demo">
      <menu-side-item  v-for="(item, index) in menuList" :key="index" :menu="item"></menu-side-item>
    </el-menu>
    <el-button @click="isOpen = !isOpen">开关</el-button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import MenuSideItem from '../menu-side-item/index.vue'
import menuList from '../../menu/index'

export default defineComponent({
  components: {
    MenuSideItem
  },
  methods: {
    handelMenuSelect (index: string) {
      if (/^d2-menu-empty-\d+$/.test(index) || index === undefined) {
        // this.$message.warning('临时菜单')
      } else if (/^https:\/\/|http:\/\//.test(index)) {
        // util.open(index)
      } else {
        this.$router.push({
          path: index
        })
      }
    }
  },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen,
      menuList
    }
  },
});
</script>
