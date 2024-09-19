<template>
  <div>
    <!-- <Header title="My Task Management App" @toggle-sidebar="toggleSidebar" /> -->
    <LandingHeader v-if="showLanding" />
    <AppHeader v-if="showHeader" />
    <main class="py-3">
        <AppSidebar :isVisible="isSidebarVisible" v-if="showSidebar" />
        <!-- <LandingSections /> -->
        <router-view />
    </main>
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script>
import AppFooter from './components/Footer/AppFooter.vue';
import AppSidebar from './components/Sidebar/AppSidebar.vue';
import LandingHeader from './components/Header/LandingHeader.vue';
import AppHeader from './components/Header/AppHeader.vue';
// import LandingSections from './components/Contents/LandingPage/LandingSections.vue';


export default {
  components: { LandingHeader, AppFooter, AppSidebar, AppHeader },
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
    showLanding() {
      const routesWithLanding = ['Landing']
      return routesWithLanding.includes(this.$route.name);
    },

    showHeader() {
      const routesWithHeading = ['HomePage', 'RestaurantPage']
      return routesWithHeading.includes(this.$route.name);
    },

    showSidebar() {
      const routesWithRouter = ['HomePage', 'RestaurantPage']
      return routesWithRouter.includes(this.$route.name);
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