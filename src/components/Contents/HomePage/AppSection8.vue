<template>
    <section class="main-container">
        <div class="container">
            <h2 class="heading fw-bold text-center my-5">Ready to Satisfy Your Cravings?</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="headlines-container pb-2 px-4 col-12 col-md-6">
                    <h3 class="headline-heading">Order from top restaurants and get your meal delivered fresh and fast!</h3>
                    <button class="startBtn w-100">
                        <p class="startBtnText m-0 fw-bold">Create Account Now!</p>
                    </button>
                </div>
                <div class="image-container pb-4 px-4 col-12 col-md-6">
                    <img class="images" :src="require('@/assets/Images/satisfycravings.png')" alt="Cravings">
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
            .headlines-container {
                .startBtn {
                    @extend %join-button;
                }
            }
            .image-container {
                .images {
                    width: 80vw;
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .main-container {
        box-sizing: border-box;
        margin: 60px 5px 5px 5px;
        div {
            div {
                .image-container {
                    .images {
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
        margin: 60px 5px 5px 5px;
        div {
            div {
                .image-container {
                    .images {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>