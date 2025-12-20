<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue'
import LightboxGallery from '@/components/LightboxGallery.vue'

import home1 from '@/assets/leave.png'
import home2 from '@/assets/block.png'
import home3 from '@/assets/hoops.png'

const homeImages = [home1, home2, home3]
</script>

<template>
  <div class="home-container">
    <div class="hero">
      <div class="hero-content">
        <div class="title">Reagan Frystak</div>
        <div class="designer">Graphic & UX/UI Design</div>
        <div class="homesubtitle">
          Welcome to my portfolio! My design work is primarily focused on branding and UX/UI design.
          I’ve had the wonderful opportunity to clients across the Twin Cities that I’ve worked
          with, and I’ve been able to see how my work is displayed in the real and digital world! To
          check out some of the work I’ve done, click the button below!
        </div>

        <router-link :to="{ name: 'work' }" class="button-link">
          <button class="worksbutton">See My Work</button>
        </router-link>
      </div>

      <div class="carousel-container desktop-only">
        <ImageCarousel :images="homeImages" :autoplay="true" :interval="4000" />
      </div>
    </div>

    <section class="mobile-gallery mobile-only">
      <LightboxGallery :images="homeImages" />
    </section>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.carousel-container {
  flex: 1;
  max-width: 600px;
  height: 500px;
}

.mobile-gallery {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

.title {
  display: inline-flex;
  color: #fedebb;
  background-color: #c12026;
  border-radius: 10px;
  flex-direction: column;
  justify-content: left;
  text-align: center;
  padding: 0 20px 0 20px;
  font-size: 60px;
  margin-bottom: 30px;
  font-family: Boldonse;
}

.designer {
  display: flex;
  justify-content: left;
  align-items: left;
  width: fit-content;
  background-color: #c12026;
  font-family: 'Lato Black';
  color: #fedebb;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
}

div.homesubtitle {
  display: block;
  max-width: 600px;
  margin: 20px 0;
  color: white;
  font-family: Lato;
  font-size: 16px;
  line-height: 2;
}

.worksbutton {
  display: inline-block;
  padding: 30px 70px;
  background-color: #c12026;
  color: #fedebb;
  border-radius: 5px;
  font-family: Lato;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  border: none;
}

.worksbutton:hover {
  background-color: #fedebb;
  color: #c12026;
}

.button-link {
  text-decoration: none;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .title,
  .designer {
    margin-left: auto;
    margin-right: auto;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .worksbutton {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 40px;
    padding: 10px 20px;
  }

  .designer {
    font-size: 18px;
  }

  .homesubtitle {
    font-size: 18px;
  }

  .worksbutton {
    padding: 20px 50px;
    font-size: 20px;
  }

  .mobile-gallery {
    padding: 20px 10px;
  }
}
</style>
