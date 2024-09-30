<template>
    <div class="search-container d-flex gap-1 w-100">
        <input class="search w-100 p-2 p-xl-3 rounded-2 border-0" type="text" placeholder="What are you craving today?">
        <SearchButton />
    </div>
</template>

<script>
import SearchButton from '../Buttons/SearchButton.vue';
export default {
    components: {SearchButton}
}
</script>

<style lang="scss" scoped>

</style>