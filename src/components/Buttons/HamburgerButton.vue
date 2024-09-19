<template>
    <button v-if="showHamburger" class="text-white"  @click="toggleSidebar">
        ☰
    </button>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        }
    },
    computed: {
        showHamburger() {
            const routesWithButton = ['HomePage', 'RestaurantPage']
            return routesWithButton.includes(this.$route.name);
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    background: none;
    border: none;
    font-size: 1rem;
    color: pointer;
    padding: 0;
}
</style>