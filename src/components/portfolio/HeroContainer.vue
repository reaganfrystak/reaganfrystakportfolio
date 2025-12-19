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
  <div class="container">
    <div v-if="items.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
      <router-link
        v-for="item in props.items"
        :key="item.id"
        :to="{ name: 'portfolio-item-details', params: { portfolioId: item.id } }"
        class="item-link"
      >
        <portfolio-hero :thumbnail="item.thumbnail" :title="item.title" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
div.container {
  width: 100%;
  padding: 0 1rem;
}

div.all-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}

.item-link {
  width: 100%;
  max-width: 300px;
  text-decoration: none;
}


@media (max-width: 600px) {
  div.all-items {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-content: center;
  }

  .item-link {
    max-width: 100%;
  }
}


@media (min-width: 600px)  {
  div.all-items {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (min-width: 901px) {
  div.all-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

div.non-responsive {
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
</style>
