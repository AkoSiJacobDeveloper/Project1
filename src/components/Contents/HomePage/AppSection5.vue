<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="heading fw-bold text-center my-5">Getting Started with QuickBite</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(step, index) in steps" :key="index" class="steps-container m-2 col-12 col-md-6 d-flex justify-content-center flex-column text-center text-white p-4 p-md-4 p-lg-5">
                    <div class="container">
                        <img class="step-image my-4" :src="step.image" :alt="step.title" />
                    </div>
                    <h3 class="steps-header fw-bold text-center">{{ index + 1 }}. {{ step.title }}</h3>
                    <p class="step-text">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const steps = ref ([
            {
                title: 'Browse Restaurants',
                description: 'Explore the best restaurants in your area.',
                image: require('@/assets/Images/BrowseRestaurant.png')
            },
            {
                title: 'Choose Your Meal',
                description: 'Pick from a variety of cuisines.',
                image: require('@/assets/Images/ChooseMeal.png')
            },
            {
                title: 'Place Order',
                description: 'Select your items, and we will handle the rest.',
                image: require('@/assets/Images/PlaceOrder.png')
            },
            {
                title: 'Track & Enjoy',
                description: 'Sit back, relax, and track your delivery in real time.',
                image: require('@/assets/Images/TrackAndEnjoy.png')
            },
        ]);

        return {
            steps,
        }
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';

.main-container {
    box-sizing: border-box;
    div {
        div {
            .steps-container {
                width: 18.75rem;
                height: 25rem;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                border-radius: 5px;
                background-color: #9CAD8C;

                div {
                    .step-image {
                        width: 100%;
                        border-radius: 5px;
                    }
                }

                .step-text {
                    font-family: $sub-font;
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .main-container {
        margin-bottom: 10%;
        div {
            div {
                .steps-container {
                    width: 25rem;
                    height: 28.125rem;
                }
            }
        }
    }
} 
</style>
