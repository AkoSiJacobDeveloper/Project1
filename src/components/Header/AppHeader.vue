<template>
    <header class="container-fluid bg-black p-3 p-md-4 p-lg-5 p-xl-2 d-flex justify-content-between align-items-center">
        <h3 class="mb-0 text-white fs-md-4 fs-lg-2 fs-xl-2">{{ title }}</h3>
        <HamburgerButton @toggle-sidebar="toggleSidebar" />
    </header>
</template>

<script>
import { defineComponent } from 'vue';
import HamburgerButton from '../Buttons/HamburgerButton.vue';

export default defineComponent({
  components: { HamburgerButton },
//   props: {
//     title: {
//       type: String,
//       default: 'My App',
//     },
//   },
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
/* Add your styles here */
</style>
