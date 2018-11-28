<template>
  <div class="recursive__list__item">

    <!-- route without child route -->
    <template v-if="!route.children">
      <el-menu-item
        :index="resolvePath(route.path)"
      >{{route.meta.title}}</el-menu-item>
    </template>

    <!-- route with child route: recursive area -->
    <el-submenu
      v-else
      :index="route.path"
    >
      <template slot="title">
        <item-title
          v-if="route.meta"
          :icon="route.meta.icon"
          :title="route.meta.title"
        />
      </template>

      <!-- child route recursive rendering -->
      <template
        v-for="child of route.children"
        v-if="!child.meta.hidden"
      >
        <recursive-item
          v-if="child.children && child.children.length"
          :route="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="recursive__nested-list"
        />
        <el-menu-item
          v-else
          :key="child.path"
          :index="resolvePath(child.path)"
        >
          {{child.meta.title}}
        </el-menu-item>
      </template>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path'
import ItemTitle from './ItemTitle'

export default {
  name: 'recursive-item',

  props: {
    route: {
      type: Object,
      required: true
    },
    basicRoute: {
      type: String,
      default: ''
    }
  },

  methods: {
    resolvePath (targetPath) {
      return path.resolve(this.basicRoute, targetPath)
    }
  },

  components: {
    ItemTitle
  }
}
</script>

<style lang='scss' scoped>
</style>
