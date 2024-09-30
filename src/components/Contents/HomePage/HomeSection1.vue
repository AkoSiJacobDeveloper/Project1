<template>
    <section class="main-container">
        <div class="image-container"></div>
        <div class="container-fluid mt-5 d-flex justify-content-center align-items-center">
            <div class="hero-container col-12 col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
                <h1 class="fw-bold text-center">Good to see you again! Let's get your next meal started.</h1>
                <AppSearch />
                <FilterButton />
            </div>
        </div>
    </section>
</template>



<script>
import AppSearch from '@/components/Search/AppSearch.vue';
import FilterButton from '@/components/Buttons/FilterButton.vue';

export default {
   components: {AppSearch, FilterButton},

}
</script>

<style lang="scss" scoped>
.main-container {
    height: 48vh;
    position: relative;
  
    .image-container {
      background-image: url('@/assets/Images/food pattern.jpg');
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0.6%;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      filter: blur(2px); 
      height: 50vh;
      width: 100%;
      overflow: hidden;
    }

    .image-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }

    .hero-container {
      position: relative;
      z-index: 3;
      margin-top: 20px;
      color: white;

      h1 {
        font-size: 2.5em;
      }
    }
}
  
@media (min-width: 1024px) {
  .main-container {
    height: 80vh;

    .image-container {
      height: 80vh;
    }

    .hero-container {
      margin-top: 10rem;

      h1 {
        font-size: 3.5rem;
      }
    }
  } 
}
    
</style>

