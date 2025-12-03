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
      <h2 v-text="itemData.classOrganization"></h2>
      <h3 v-text="itemData.yearsCreated"></h3>
      <p v-text="itemData.description"/>
      <img :src="`../../src/assets/${itemData.thumbnail}`" alt="" />
      <img :src="`../../src/assets/${itemData.highResImage}`" alt="" />
    </div>
  </div>

  <p v-else>Sorry, this item does not exist</p>
</template>

<style scoped>
.top-line {
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  flex-direction: column;
  color: white;

  h1 {
    font-family: Boldonse;
    font-size: 2.75rem;
    color: white;
  }

  h2 {
    font-family: Lato;
    font-size: 1rem;
    color: white;
  }

  h3 {
    font-family: Lato;
    font-size: 1rem;
    color: white;
  }

  p {
    font-family: Lato;
    font-size: 16px;
    color: #FEDEBB;
    margin-bottom: 50px;
  }

  img {
    width: 20%;
    height: auto;
  }
}

@media (max-width: 600px) {
  h1 {
    display: flex;
    justify-content: center;
    font-family: Boldonse;
    font-size: 2.5rem;
    color: white;
    text-align: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    font-family: Lato;
    font-size: 1.5rem;
    color: #FEDEBB;
    text-align: center;
  }

  h3 {
    display: flex;
    justify-content: center;
    font-family: Lato;
    font-size: 1.5rem;
    color: #FEDEBB;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: #FEDEBB;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
