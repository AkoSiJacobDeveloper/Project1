<template>
  <div>
    <Header title="My Task Management App" @toggle-sidebar="toggleSidebar" />
    <main class="py-3">
        <!-- <Sidebar :isVisible="isSidebarVisible" /> -->
        <!-- <LandingSections /> -->
        <router-view />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import Header from './components/Header/AppHeader.vue';
// import Sidebar from './components/Sidebar/AppSidebar.vue';
// import LandingSections from './components/Contents/LandingPage/LandingSections.vue';
import AppFooter from './components/Footer/AppFooter.vue';

export default {
  components: { Header, AppFooter },
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