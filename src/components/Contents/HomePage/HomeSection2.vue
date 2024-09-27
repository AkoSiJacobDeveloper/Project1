<template>
    <section class="main-container">
        <h1 class="heading"> {{ heading }} </h1>
        <div class="container">
            <div class="row d-flex justify-content-center aligm-items-center">
                <div v-for="(dish, index) in dishes" :key="index" class="food-container col-12 col-md-6">
                    <div class="dish-container">
                        <img class="dish-image" :src="dish.image" :alt="dish.title" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dishes: [
                { image: require('@/assets/Images/jollofrice.jpg')},
                { image: require('@/assets/Images/bakedchickenwings.jpg')},
                { image: require('@/assets/Images/porkhamonado.jpg')},
            ]           
        }
    }
}
</script>