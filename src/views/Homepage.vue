<script setup>
import portfolioData from '@/data/portfolio.json'
import HeroContainer from '@/components/portfolio/HeroContainer.vue'

const featuredItems = [portfolioData[0], portfolioData[1], portfolioData[2]]
</script>

<template>
  <p>This is responsive one</p>
  <hero-container :is-responsive="true" :items="featuredItems"/>

  <p>Non Responsive</p>
  <hero-container :is-responsive="false" :items="portfolioData"/>
</template>

<style scoped>
div.all-items {
  display: flex;
  gap: 1rem;
}

div.item {
  border: 1px solid black;
  min-width: 200px;
}
</style>
