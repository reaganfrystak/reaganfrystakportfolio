<script setup>

import { useRoute } from 'vue-router'
import ImageCarousel from '@/components/ImageCarousel.vue'
import LightboxGallery from '@/components/LightboxGallery.vue'
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const itemData = portfolioData.filter(
  (portfolioData) => portfolioData.id === Number(route.params.portfolioId),
)[0]

const getImageUrl = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href
}

const projectImages = itemData?.highResImage?.map(img => getImageUrl(img)) || []

console.log('Project Images:', projectImages)
console.log('Item Data:', itemData)
</script>

<template>
  <div v-if="itemData" class="portfolio-detail">
    <!-- Desktop Layout -->
    <div class="desktop-layout">
      <div class="text-content">
        <h1 v-text="itemData.title"></h1>
        <h2 v-text="itemData.classOrganization"></h2>
        <h3 v-text="itemData.medium"></h3>
        <h4 v-text="itemData.type"></h4>
        <p v-text="itemData.description" />
      </div>

      <div class="media-content">
        <div class="carousel-container">
          <ImageCarousel :images="projectImages" :autoplay="true" :interval="4000" />
        </div>

        <div class="thumbnail-gallery">
          <LightboxGallery :images="projectImages" />
        </div>
      </div>
    </div>

    <div class="mobile-layout">
      <h1 v-text="itemData.title"></h1>
      <h2 v-text="itemData.classOrganization"></h2>
      <h3 v-text="itemData.medium"></h3>
      <h4 v-text="itemData.type"></h4>
      <p v-text="itemData.description" />

      <LightboxGallery :images="projectImages" />
    </div>
  </div>
</template>

<style scoped>
.portfolio-detail {
  color: white;
}

.desktop-layout {
  display: flex;
  gap: 30px;
  padding: 30px;
  align-items: flex-start;
}

.text-content {
  flex: 1;
  max-width: 610px;
}

.media-content {
  flex: 1;
  min-width: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.carousel-container {
  width: 100%;
  margin: auto 0 auto 80px;
}

.thumbnail-gallery {
  width: 100%;
  margin: -10px 0 auto 80px;
}

h1 {
  font-family: Boldonse;
  font-size: 3rem;
  color: white;
  margin: 0 0 20px 0;
}

h2 {
  font-family: Lato;
  font-size: 2rem;
  color: #f7bc21;
  margin: 0 0 20px 0;
}

h3 {
  font-family: "Lato Light";
  font-size: 1rem;
  color: #fedebb;
  margin: 10px 0;
}

h4 {
  font-family: Lato Hairline;
  font-size: 1rem;
  color: white;
  margin: 10px 0;
}

p {
  color: white;
  font-family: Lato;
  font-size: 16px;
  line-height: 2;
  margin: 20px 0;
}

.mobile-layout {
  display: none;
}

@media (max-width: 900px) {
  .desktop-layout {
    display: none;
  }

  .mobile-layout {
    display: block;
    padding: 20px;
  }

  .mobile-layout h1 {
    font-family: Boldonse;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin: 20px 0;
  }

  .mobile-layout h2 {
    font-family: Lato;
    font-size: 1.5rem;
    color: #f7bc21;
    text-align: center;
    margin: 15px 0;
  }

  .mobile-layout h3 {
    font-family: "Lato Light";
    font-size: 1.3rem;
    color: #fedebb;
    text-align: center;
    margin: 10px 0;
  }

  .mobile-layout h4 {
    font-family: Lato Hairline;
    font-size: .8rem;
    color: white;
    text-align: center;
    margin: 10px auto 20px auto;
  }

  .mobile-layout p {
    font-size: 14px;
    color: white;
    text-align: center;
    margin: 30px 0 30px 0;
  }
}
</style>
