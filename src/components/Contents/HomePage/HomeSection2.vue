<template>
    <section class="main-container">
        <div class="container">
            <h1 class="heading text-center my-5 fw-bold"> {{ heading }} </h1>
            <div class="row d-flex justify-content-center align-items-center gap-2">
                <div v-for="(dish, index) in dishes" :key="index" class="food-container m-2 col-12 col-md-6">
                    <div class="image-container d-flex justify-content-center align-items-center">
                        <img class="dish-image" :src="dish.image" :alt="dish.title" />
                    </div>
                    <div class="details-container">
                        <div class="wrapper px-3">
                            <p class="dish-title fs-5"> {{ dish.title }}</p>
                            <div class="btnAndPrice d-flex justify-content-between my-4">
                                <h5 class="price fw-bold m-0 mt-1"> {{dish.price }}</h5>
                                <OrderButton />
                            </div>
                        </div>
                        <div class="details-subcontainer d-flex justify-content-between">
                            <div class="restaurant p-3 mt-2">
                                <p class="restaurant-name fw-bold m-0"> {{ dish.restaurant }}</p>
                                <p class="location m-0"> {{dish.location}} </p>
                            </div>
                            <div class="favorite d-flex justify-content-center align-items-center p-3">
                                <div class="d-flex gap-1 mt-3">
                                    <i class="bi bi-heart"></i>
                                    <p class="reacts"> {{dish.reacts}} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import OrderButton from '@/components/Buttons/OrderButton.vue';

export default {
    components: {OrderButton},
    data() {
        return {
            dishes: [
                { image: require('@/assets/Images/Garlic Black Pepper Chicken.jpg'), title: 'Garlic Black Pepper Chicken', price: '₱150.00', restaurant: 'Chicken Restaurant', location: '68 5th Avenue New York', reacts: '5'},
                { image: require('@/assets/Images/Honey Garlic Shrimp.jpg'), title: 'Honey Garlic Shrimp', price: '₱200.00', restaurant: 'Chicken Restaurant', location: '68 5th Avenue New York', reacts: '10'},
                { image: require('@/assets/Images/Sesame Chicken.jpg'), title: 'Sesame Chicken', price: '₱250.00', restaurant: 'Chicken Restaurant', location: '68 5th Avenue New York', reacts: '20'},
            ],   
            heading: 'Todays Specials',       
        }
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    margin-top: 60px;

    .food-container {
        width: 21.875rem;
        height: 25rem;
        .image-container {
            width: 100%;
            .dish-image {
                background-size: cover;
                background-position: center;
                width: 100%;
                height: 25vh;
            }
        }
        .details-container {
            border-left: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;  
        }
        .details-subcontainer {
            border-top: 1px solid black;

            .favorite {
                border-left: 1px solid black;
            }
        }
        
    }
}
</style>