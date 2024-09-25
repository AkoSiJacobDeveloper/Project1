<template>
    <header class="container-fluid p-3 p-md-5 p-lg-5 p-xl-4 d-flex justify-content-between align-items-center">
        <h1 class="mb-0 text-white fs-md-4 fs-lg-2 fs-xl-4 text-center">{{ title }}</h1>
        <HamburgerButton @toggle-sidebar="toggleSidebar" />
    </header>
</template>

<script>
import { defineComponent } from 'vue';
import HamburgerButton from '../Buttons/HamburgerButton.vue';

export default defineComponent({
  components: { HamburgerButton },
  // props: {
  //   title: {
  //     type: String,
  //     default: 'My App',
  //   },
  // },
  emits: ['toggle-sidebar'],
  setup(props, { emit }) {
    // Define Method
    const toggleSidebar = () => {
      emit('toggle-sidebar');
    };

    // Return the values to the template
    return {
      title: 'QuickBite', // Ensure no duplication
      toggleSidebar,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color:#4E5340;
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
}
</style>
