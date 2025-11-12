<script setup>
const props = defineProps({

})
</script>

<template>
  <div class="hero" :style="background-image: url(./src/assets/${props.thumbnail})`">
    <div class="opaque-footer">({props.title})</div>
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid black;
  border-radius: 15px;
  min-height: 150px;
  min-width: 300px;
  max-width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .opaque-footer {
    background-color: black;
    color: white;
    padding: 16px;
    text-transform: uppercase;
    opacity: 0.7;
    border-radius: 15px;
    font-family: arial, sans-serif;
  }
}
</style>
