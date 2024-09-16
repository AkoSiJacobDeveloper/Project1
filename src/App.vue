<template>
  <div>
    <Header title="My Task Management App" @toggle-sidebar="toggleSidebar" />
    <main class="py-3">
        <!-- <Sidebar :isVisible="isSidebarVisible" /> -->
        <AppSection1 />
        <AppSection2 />
        <AppSection3 />
        <AppSection4 />
        <AppSection5 />
        <AppSection6 />
        <AppSection7 />
        <AppSection8 />
    </main>
    <footer>
      <AppFooter2 />
    </footer>
  </div>
</template>

<script>
import Header from './components/Header/AppHeader.vue';
// import Sidebar from './components/Sidebar/AppSidebar.vue';
import AppSection1 from './components/Contents/HomePage/AppSection1.vue';
import AppSection2 from './components/Contents/HomePage/AppSection2.vue';
import AppSection3 from './components/Contents/HomePage/AppSection3.vue';
import AppSection4 from './components/Contents/HomePage/AppSection4.vue';
import AppSection5 from './components/Contents/HomePage/AppSection5.vue';
import AppSection6 from './components/Contents/HomePage/AppSection6.vue';
import AppSection7 from './components/Contents/HomePage/AppSection7.vue';
import AppSection8 from './components/Contents/HomePage/AppSection8.vue';
import AppFooter2 from './components/Footer/AppFooter2.vue';

export default {
  components: { Header, AppSection1, AppSection2, AppSection3, AppSection4, AppSection5, AppSection6, AppSection7, AppSection8, AppFooter2 },
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
};
</script>

<style lang="scss">
@import '@/assets/Styles/Styles.scss';
div {
  main {
    background-color: #F5E8C7;
  }
}

</style>