<template>
    <section class="main-container">
        <div class="container">
            <h2 class="heading fw-bold text-center my-5">Reviews</h2>
            <div class="reviews-wrapper">
                <div class="reviews-container">
                    <div v-for="(review, index) in reviews" :key="index" class="review-box">
                        <div class="eachWrapper">
                            <img class="user-image my-4" :src="review.image" :alt="review.title" />
                            <h3 class="user-name">{{ review.name }}</h3>
                            <p class="reviews-text">{{ review.content }}</p>
                        </div>
                    </div>
                    <!-- Duplicate reviews to create seamless scroll -->
                    <!-- <div v-for="(review, index) in reviews" :key="'duplicate-' + index" class="review-box">
                        <div class="eachWrapper">
                            <img class="user-image my-4" :src="review.image" :alt="review.title" />
                            <h3 class="user-name">{{ review.name }}</h3>
                            <p class="reviews-text">{{ review.content }}</p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'John Michael Feltimos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'John Michael Feltimos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                  {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'John Michael Feltimos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                  {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'John Michael Feltimos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                  {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'John Michael Feltimos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                
                
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    .reviews-wrapper {
        overflow: hidden; 
        position: relative;
        width: 100%;

        .reviews-container {
            display: flex; /* Ensure reviews are displayed in a row */
            width: 500px; 
            animation: scrollReviews 50s linear infinite; 
            box-sizing: border-box;

            .review-box {
                width: 500px; /* Ensure all boxes have the same width */
                padding: 1rem;
                margin-right: 1rem; /* Space between review boxes */
                border: 1px solid #ccc;
                background-color: #f9f9f9;
                border-radius: 5px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                box-sizing: border-box; /* Include padding and border in width */

                .eachWrapper {
                    .user-image {
                        width: 30px;
                    }
                }
            }
        }
    }

    @keyframes scrollReviews {
        0% {
            transform: translateX(0); /* Start at the first set of reviews */
        }
        100% {
            transform: translateX(-100%); /* Move the entire set left by 100% */
        }
    }
}
</style>
