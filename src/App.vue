<template>
  <div>
    <Header title="My Task Management App" @toggle-sidebar="toggleSidebar" />
    <main>
        <Sidebar :isVisible="isSidebarVisible" />
    </main>
  </div>
</template>

<script>
import Header from './components/Header/AppHeader.vue';
import Sidebar from './components/Sidebar/AppSidebar.vue';

export default {
  components: { Header, Sidebar },
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
