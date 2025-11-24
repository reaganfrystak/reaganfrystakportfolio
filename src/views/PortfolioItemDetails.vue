<script setup>
import {useRoute} from "vue-router";
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const itemData= portfolioData.filter(portfolioData => portfolioData.id === Number(route.params.portfolioId))[0]
</script>

<template>
<div v-if="itemData">
  <div class="top-line">
    <img :src="itemData.thumbnail"/>
  </div>
</div>

  <p v-else>Sorry, this item does not exist</p>
</template>

<style scoped>
.top-line {
  display: flex;
  justify-content: space-between;
  border: 10px solid white;
}
</style>
