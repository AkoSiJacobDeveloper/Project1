<template>
    <header class="container-fluid p-3 p-md-4 p-lg-5 p-xl-4">
        <h1 class="mb-0 text-white fs-md-4 fs-lg-2 fs-xl-4 text-center">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'QuickBite'
        }
    }
}
</script>

<style lang="scss" scoped>
header {
  background-color:#4E5340;
  position: fixed;
  z-index: 1;
}
</style>