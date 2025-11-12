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
  <div v-if="items.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
    <portfolio-hero
      v-for="item in props.items"
      :key="item.id"
      :thumbnail="item.thumbnail"
      :title="item.title"
    />
  </div>

  <p v-else>You got to give me something to work with</p>
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
