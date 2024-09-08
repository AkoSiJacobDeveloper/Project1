<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="choose-text text-center fw-bold my-5">Why Choose QuickBite?</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(feature, index) in features" :key="index" class="feature-container m-2 col-12 col-md-6 d-flex justify-content-center flex-column text-center text-white p-4 p-md-4 p-lg-5">
                    <div class="container-md">
                        <img class="feature-image my-4" :src="feature.image" :alt="feature.title" />
                    </div>
                    <h3 class="feature-header fw-bold text-center">{{ index + 1 }}. {{ feature.title }}</h3>
                    <p class="feature-text">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent ({
    setup() {
        const features = ref([
            { 
                title: 'Variety of Cuisines', 
                description: 'Discover a world of flavors at your fingertips', 
                image: require('@/assets/Images/VarietyCuisines.png')
            },

            { 
                title: 'Easy Ordering', 
                description: 'Order your meal in just a few clicks.', 
                image: require('@/assets/Images/EasyOrder.png')
            },

            { 
                title: 'Track Order in Real Time', 
                description: 'Know exactly when your meal will arrive.', 
                image: require('@/assets/Images/TrackOnlineDelivery.png')
            },

            { 
                title: 'Exclusive Offers', 
                description: 'Get access to special discounts available only to members.', 
                image: require('@/assets/Images/ExclusiveOffers.png')
            },
        ]);

        return {
            features,
        };
    }
});
</script>


<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';

.main-container {
    box-sizing: border-box;
    div {
        div {
            .feature-container {
                width: 18.75rem;
                height: 25rem;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                border-radius: 5px;
                background-color: #9CAD8C;

                div {
                    .feature-image {
                        width: 100%;
                        border-radius: 5px;
                    }
                }

                .feature-text {
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
                .feature-container {
                    width: 25rem;
                    height: 28.125rem;
                }
            }
        }
    }
}
</style>