<template>
  <header class="container-fluid p-3 p-md-5 p-lg-5 p-xl-4 d-flex justify-content-between align-items-center">
    <h1 class="mb-0 text-white fs-md-4 fs-lg-2 fs-xl-4 text-center">{{ title }}</h1>
    <HamburgerButton @toggle-sidebar="emitToggleSidebar" />
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import HamburgerButton from '../Buttons/HamburgerButton.vue';

export default defineComponent({
  components: { HamburgerButton },
  emits: ['toggle-sidebar'], // Define the emitted event
  setup(_, { emit }) {
    // Define the method to emit the event
    const emitToggleSidebar = () => {
      emit('toggle-sidebar');
    };

    return {
      title: 'QuickBite', // The header title
      emitToggleSidebar, // The toggle method
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
