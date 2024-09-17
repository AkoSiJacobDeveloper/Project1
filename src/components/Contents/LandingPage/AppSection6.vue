<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="heading fw-bold text-center my-5">Popular Dish Right Now</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(step, index) in steps" :key="index" class="dish-container m-2 col-12 col-md-6 d-flex justify-content-center">
                    <div class="container p-0">
                        <img class="dish-image" :src="step.image" :alt="step.title" />
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
            steps: [
                { image: require('@/assets/Images/1.jpg') },
                { image: require('@/assets/Images/2.jpg') },
                { image: require('@/assets/Images/3.jpg') },
                { image: require('@/assets/Images/4.jpg') },
                { image: require('@/assets/Images/5.jpg') },
                { image: require('@/assets/Images/6.jpg') },
                { image: require('@/assets/Images/7.jpg') },
                { image: require('@/assets/Images/8.jpg') },
                { image: require('@/assets/Images/9.jpg') },
                { image: require('@/assets/Images/10.jpg')},
                { image: require('@/assets/Images/11.jpg') },
                { image: require('@/assets/Images/12.jpg')},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.main-container {
    box-sizing: border-box;
    div {
        div {
            .dish-container {
                width: 21.875rem;
                height: 28.125rem;
                padding: 0;
                
                .dish-image {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                    border-radius: 5px;
                    transition: 0.5s ease-in-out;

                    &:hover {
                        transform: translateY(-10px);
                    }
                }
            }
        }
    }
}

</style>