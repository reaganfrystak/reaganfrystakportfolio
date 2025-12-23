<script setup>
import portfolioData from '@/data/portfolio.json'
import HeroContainer from '@/components/portfolio/HeroContainer.vue'

const featuredItems = [portfolioData[0], portfolioData[1], portfolioData[2], portfolioData[3], portfolioData[4], portfolioData[5],portfolioData[6]]
</script>

<template>
  <div class="choose">Choose A Project</div>
  <hero-container :is-responsive="true" :items="featuredItems"/>
</template>

<style scoped>
.choose {
  font-family: Boldonse;
  font-size: 3rem;
  color: white;
  margin: 30px 20px 50px 30px;
}

div.all-items {
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

div.item {
  width: 100%;
  max-width: 260px;
}

@media (max-width: 600px) {
  div.choose {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: Boldonse;
  }
}
</style>
