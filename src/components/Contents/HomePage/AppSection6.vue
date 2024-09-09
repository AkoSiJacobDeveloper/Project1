<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="heading fw-bold text-center my-5">Popular Dish Right Now</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(dish, index) in dishes" :key="index" class="dish-container m-2 col-12 col-md-6 d-flex justify-content-center flex-column text-center text-white p-4 p-md-4 p-lg-5">
                    <div class="container">
                        <img class="dish-image my-4" :src="dish.image" :alt="dish.title" />
                    </div>
                    <h3 class="dish-heading fw-bold text-center">{{ dish.title }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent ({
    setup() {
        const dishes = ref ([
            {
                title: 'Bicol Express',
                image: require('@/assets/Images/BicolExpress.jpg')
            },
            {
                title: 'Chicken Mami',
                image: require('@/assets/Images/ChickenMami.jpg')
            },
            {
                title: 'Crunchy Pork Belly',
                image: require('@/assets/Images/CrunchyPorkBelly.jpg')
            },
            {
                title: 'Dhansak Curry',
                image: require('@/assets/Images/DhansakCurry.jpg')
            },
            {
                title: 'Kare Kare',
                image: require('@/assets/Images/Karekare.jpg')
            },
            {
                title: 'Palabok',
                image: require('@/assets/Images/Palabok.jpg')
            },
            {
                title: 'Adobo Beef',
                image: require('@/assets/Images/PinoyAdoboBeefRibs.jpg')
            },
            {
                title: 'Salmon Fillet',
                image: require('@/assets/Images/SalmonFillet.jpg')
            },
            {
                title: 'Shrimps with Butter and Garlic',
                image: require('@/assets/Images/ShrimpswithButterandGarlic.jpg')
            },
            {
                title: 'Sisig',
                image: require('@/assets/Images/Sisig.jpg')
            },
        ]);

        return {
            dishes,
        }
    }
    
})
</script>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';

.main-container {
    box-sizing: border-box;
    div {
        div {
            .dish-container {
                width: 18.75rem;
                height: 25rem;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                border-radius: 5px;
                background-color: #9CAD8C;

                div {
                    .dish-image {
                        width: 100%;
                        border-radius: 5px;
                    }
                }

                .dish-heading {
                    font-family: $sub-font;
                }
            }
        }
    }
}
</style>