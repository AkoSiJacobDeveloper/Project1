<!--Parent-->
<template>
    <main>
        <AppSidebar :isVisible="isSidebarVisible" v-if="isSidebarVisible" />
        <HomeSection1 />
        <HomeSection2 />
    </main>
</template>

<script>
import HomeSection1 from './HomeSection1.vue'
import HomeSection2 from './HomeSection2.vue'
import AppSidebar from '@/components/Sidebar/AppSidebar.vue';

export default {
    components: {HomeSection1, HomeSection2, AppSidebar},
    data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
}
</script>

<style scoped>
</style>