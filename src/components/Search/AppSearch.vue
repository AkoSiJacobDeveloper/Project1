<template>
    <div class="search-container d-flex gap-1">
        <input class="w-100 p-2 rounded-2 border-0" type="text" placeholder="Search">
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