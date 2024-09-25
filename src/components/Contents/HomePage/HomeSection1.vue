<template>
    <section class="main-container">
        <div class="container-fluid">
            <div class="row">
                <div class="hero-container col-12 col-md-6">
                    <h5 class="fw-bold">Good to see you again! Let's get your next meal started.</h5>
                    <AppSearch />
                </div>
                <div class="image-container col-12 col-md-6">
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppSearch from '@/components/Search/AppSearch.vue';

const backgroundImage = require('../../../assets/Images/food pattern.jpg');
export default {
   components: {AppSearch},
   data () {
    return {
        backgroundImage
    }
   }
}
</script>

<style lang="scss">
.main-container {
    position: relative; /* Position the container relative to its children */
    height: 50vh;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(v-bind(backgroundImage));
        background-size: cover;
        background-position: center;
        filter: blur(2px); /* Apply blur only to the background */
        z-index: -1; /* Ensure it's behind the content */
    }

    .container-fluid {
        position: relative;
        z-index: 1; /* Ensure the content is above the blurred background */
    }

    .hero-container {
        margin-top: 50px;
        z-index: 5; /* Ensure it's above the background */
    }
}

</style>