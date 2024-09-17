<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="guide-heading text-center fw-bold my-5">User Guide</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(step, index) in steps" :key="index" class="guide-container m-2 col-12 col-md-6 d-flex justify-content-center flex-column text-center text-white p-md-4 py-lg-5 py-xl-5">
                    <h3 class="steps fw-bold text-center">{{ index + 1 }}. {{ step.title }}</h3>
                    <p class="steps-info fw-light fs-5 m-0">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    import { defineComponent, ref } from 'vue';
    
    export default defineComponent({
        setup() {
        // Step data
            const steps = ref([
                { title: 'Create Account', description: 'Sign up to explore restaurants and get your favorite meals delivered fast!' },
                { title: 'Home', description: 'Main Dashboard.' },
                { title: 'Browse Restaurants', description: 'Click "Restaurants" to discover a wide variety of cuisines near you.' },
                { title: 'Explore the Menu', description: 'Choose a restaurant and view their full menu with just one click.' },
                { title: 'Add to Cart', description: 'Add your favorite dishes to the cart and proceed to checkout.' },
                { title: 'Track Your Order', description: 'Track your order in real-time and see when it arrives at your door.' },
                { title: 'Order History', description: 'View your past orders and reorder with ease from "Order History".' },
                { title: 'Offers', description: 'Don\'t forget to check the "Offers" tab for exclusive deals and discounts.' },
            ]);
    
            return {
                steps,
            };
        },
    });
</script>
  
<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';

.main-container {
    box-sizing: border-box;
    div {
        div {
            .guide-container {
                width: 18.75rem;
                height: 12.5rem;
                border-radius: 5px;
                background-color: #9CAD8C;

                .steps-info {
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
                .guide-container {
                   width: 25rem;
                   height: 12.5rem;

                }
            }
        }
    }
}
</style>