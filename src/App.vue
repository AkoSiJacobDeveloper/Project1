<template>
  <div>
    <!-- <Header title="My Task Management App" @toggle-sidebar="toggleSidebar" /> -->
    <AppHeader v-if="showHeader" />
    <main class="py-3">
        <!-- <Sidebar :isVisible="isSidebarVisible" /> -->
        <!-- <LandingSections /> -->
        <router-view />
    </main>
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppFooter from './components/Footer/AppFooter.vue';
// import Sidebar from './components/Sidebar/AppSidebar.vue';
// import LandingSections from './components/Contents/LandingPage/LandingSections.vue';


export default {
  components: { AppHeader, AppFooter },
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
  computed: {
    showHeader() {
      const routesWithHeader = ['Landing', 'HomePage', 'RestaurantPage']
      return routesWithHeader.includes(this.$route.name);
    },

    showFooter() {
      const routesWithFooter = ['Landing', 'HomePage', 'RestaurantPage']
      return routesWithFooter.includes(this.$route.name);
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