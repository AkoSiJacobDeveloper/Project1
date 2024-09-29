<template>
  <div>
    <LandingHeader v-if="showLanding" />
    <AppHeader v-if="showHeader" @toggle-sidebar="toggleSidebar" /> <!-- Listen for event here -->
    
    <main class="py-3">
      <!-- Sidebar with visibility control -->
      <AppSidebar v-if="showSidebar" :isVisible="isSidebarVisible" />
      <router-view />
    </main>
    
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script>
import AppFooter from './components/Footer/AppFooter.vue';
import LandingHeader from './components/Header/LandingHeader.vue';
import AppHeader from './components/Header/AppHeader.vue';
import AppSidebar from './components/Sidebar/AppSidebar.vue'; // Ensure AppSidebar is imported

export default {
  components: { LandingHeader, AppFooter, AppHeader, AppSidebar },
  data() {
    return {
      isSidebarVisible: false, // Default sidebar visibility state
    };
  },
  methods: {
    // Method to toggle sidebar visibility
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
  computed: {
    showLanding() {
      const routesWithLanding = ['Landing'];
      return routesWithLanding.includes(this.$route.name);
    },
    showHeader() {
      const routesWithHeading = ['HomePage', 'RestaurantPage'];
      return routesWithHeading.includes(this.$route.name);
    },
    showSidebar() {
      const routesWithSidebar = ['HomePage', 'RestaurantPage'];
      return routesWithSidebar.includes(this.$route.name);
    },
    showFooter() {
      const routesWithFooter = ['Landing', 'HomePage', 'RestaurantPage'];
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
