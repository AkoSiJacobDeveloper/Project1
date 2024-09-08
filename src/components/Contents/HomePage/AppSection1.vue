<template>
    <section class="main-container">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="hero-text p-4 col-12 col-md-6">
                    <h1 class="hero-heading fw-bold">
                        Hungry? Your Next Meal is Just a Click Away!
                    </h1>
                    <p class="hero-subtext m-0">
                        Browse, Order, and Savor in No Time!
                    </p>
                </div>
                <div class="image-container p-4 col-12 col-md-6">
                    <img class="image" :src="require('@/assets/Images/OnlineFoodDelivery.png')" alt="Food Delivery">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';

.main-container {
    box-sizing: border-box;
    margin: 60px 5px 5px 5px;
    div {
        div {
            .hero-text {
                .hero-subtext {
                    font-family: $sub-font;
                }
            }
            .image-container {
                .image {
                    width: 90vw;
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .main-container {
        box-sizing: border-box;
        margin: 75px 5px 5px 5px;
        div {
            div {
                .image-container {
                    .image {
                        width: 100%;
                    }
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .main-container {
        box-sizing: border-box;
        margin: 10% 5px;
        div {
            div {
                .hero-text {
                    .hero-heading {
                        font-size: 3.125rem;
                    }
                    .hero-subtext {
                        font-size: 1.25rem;
                    }
                }

                .image-container {
                    .image {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>