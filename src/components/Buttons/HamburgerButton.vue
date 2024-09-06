<template>
    <button class="text-white"  @click="toggleSidebar">
        ☰
    </button>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: pointer;
}
</style>