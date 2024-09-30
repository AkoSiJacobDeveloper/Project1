<template>
    <div class="btn-container d-flex justify-content-center align-items-center">
        <button class="more-btn w-50 p-2 rounded-1 border-0">See All</button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';
.btn-container {
    button {
        @extend %order-button;
        
    }
}
</style>