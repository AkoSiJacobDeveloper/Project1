<template>
  <aside :class="{ 'sidebar-visible': isVisible, 'sidebar-hidden': !isVisible }">
    <ul class="p-0 list-unstyled">
      <li v-for="(link, index) in links" :key="index">
        <a class="text-white text-decoration-none" :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { href: '#home', text: 'Home' },
        { href: '#about', text: 'About' },
        { href: '#services', text: 'Services' },
        { href: '#contact', text: 'Contact' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 190px;
  height: 100%;
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.sidebar-visible {
    transform: translateX(0);
    opacity: 1;
  }

  &.sidebar-hidden {
    transform: translateX(-100%);
    opacity: 0;
  }

  ul {
    li {
      margin: 10px 0;
    }
  }
}
</style>
