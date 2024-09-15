<template>
    <section class="main-container">
        <div class="container-fluid">
            <h2 class="heading fw-bold text-center my-5">What Our Customers Are Saying?</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="(review, index) in reviews" :key="index" class="review-box m-2 px-3 pb-2 pt-1 pt-md-2 pt-lg-3 pt-xl-4 col-12 col-md-6 text-white">
                    <div class="container py-4 h-100">
                        <div class="image-name-div d-flex gap-1">
                            <img class="user-image" :src="review.image" :alt="review.title" />
                            <h6 class="user-name mt-2 d-flex flex-column flex-column">{{ review.name }}
                                <div class="star-holder">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p class="dates fw-light fst-italic">{{ review.date }}</p>
                            </h6>
                        </div>
                        <p class="reviews-text m-0 my-3">{{ review.content }}</p>
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
            reviews: [
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Sarah L.',
                    content: 'Amazing service! QuickBite has made ordering food so easy, and the real-time order tracking is a game-changer!.',
                    date: 'July 15, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'James K.',
                    content: 'The variety of restaurants on QuickBite is incredible. I can always find something I love, no matter what Im craving.',
                    date: 'June 28, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Mia R.',
                    content: 'I’ve been using QuickBite for months, and it’s always a smooth experience. Plus, the exclusive offers make it super affordable.',
                    date: 'August 3, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Tom S.',
                    content: 'QuickBite is my go-to for ordering food. The interface is user-friendly, and my orders always arrive hot and on time!',
                    date: 'July 9, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Emily A.',
                    content: 'I love the convenience of being able to browse menus and order in just a few clicks. QuickBite never disappoints!',
                    date: 'August 18, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Kevin W.',
                    content: 'What I like the most is the speed of delivery and the accuracy of the orders. It’s a must-have app for foodies like me!',
                    date: 'June 5, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Rachel M.',
                    content: 'QuickBite’s customer support is fantastic. They quickly resolved an issue with my order, and I’m very impressed with their service!',
                    date: 'July 22, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'David P.',
                    content: 'The app makes it so easy to reorder my favorite meals. Plus, I get to try new restaurants without ever leaving home!',
                    date: 'August 1, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Lily G.',
                    content: 'I’ve saved so much time using QuickBite. No more calling restaurants or waiting in lines—just browse, order, and enjoy!',
                    date: 'July 30, 2024'
                },
                {
                    image: require('@/assets/Images/nopfp.png'),
                    name: 'Sophia A.',
                    content: 'QuickBite has made my busy nights so much easier. The fast delivery and delicious food keep me coming back!',
                    date: 'August 12, 2024'
                },
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';
.main-container {
    box-sizing: border-box;
    div {
        div {
            .review-box {
                width: 18.75rem;
                height: 18.75rem;
                background-color: #9CAD8C;
                border-radius: 5px;
                box-sizing: border-box;
                padding: 0;
        
                div {
                    .user-image {
                        height: 10vh;
                        text-align: center;
                        border-radius: 50%;
                    }

                    .star-holder {
                        i {
                            color: #FFCC00;
                        }
                    }

                    .reviews-text {
                        font-family: $sub-font;
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
    }
}
</style>
