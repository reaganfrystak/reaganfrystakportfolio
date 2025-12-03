<script setup lang="ts">
import PortfolioHero from './PortfolioHero.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isResponsive: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="all-items">
    <div v-if="items.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
      <router-link
          v-for="item in props.items"
          :key="item.id"
          :to="{ name: 'portfolio-item-details', params: { portfolioId: item.id } }"
      >
        <portfolio-hero :thumbnail="item.thumbnail" :title="item.title" />
      </router-link>
    </div>
    <p v-else>You got to give me something to work with</p>
  </div>

</template>

<style scoped>
div.all-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

div.non-responsive {
  overflow: auto;
  flex-wrap: nowrap;
}
</style>
