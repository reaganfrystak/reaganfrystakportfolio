<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="hero" :style="`background-image: url(./src/assets/${props.thumbnail})`">
    <div class="opaque-footer" v-text="props.title" />
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid black;
  border-radius: 15px;
  min-height: 250px;
  min-width: 300px;
  max-width: 80%;
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
    font-family: Lato;
  }
}
</style>
