<script setup>
import { useRoute } from 'vue-router'
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const itemData = portfolioData.filter(
  (portfolioData) => portfolioData.id === Number(route.params.portfolioId),
)[0]
</script>

<template>
  <div v-if="itemData">
    <div class="top-line">
      <h1 v-text="itemData.title"></h1>
      <p v-text="itemData.description"/>
      <img :src="`../../src/assets/${itemData.thumbnail}`" alt="" />
    </div>
  </div>

  <p v-else>Sorry, this item does not exist</p>
</template>

<style scoped>
.top-line {
  display: flex;
  justify-content: space-between;
  border: 10px solid white;
  flex-direction: column;
  color: white;

  img {
    width: 40%;
  }
}
</style>
