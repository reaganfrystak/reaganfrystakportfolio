<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div class="gallery">
    <div
      v-for="(img, index) in props.images"
      :key="index"
      class="thumb"
      @click="openLightbox(index)"
    >
      <img :src="img" alt="Gallery image" />
    </div>
  </div>

  <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
    <button class="close-btn" @click="closeLightbox">×</button>
    <button class="prev-btn" @click.stop="prevImage">‹</button>
    <img :src="props.images[currentIndex]" class="lightbox-img" alt="Lightbox view" />
    <button class="next-btn" @click.stop="nextImage">›</button>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
}

.thumb {
  width: 160px;
  height: 110px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumb:hover img {
  transform: scale(1.1);
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
}

.close-btn,
.prev-btn,
.next-btn {
  position: absolute;
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
}

.close-btn {
  top: 20px;
  right: 40px;
}

.prev-btn {
  left: 30px;
}

.next-btn {
  right: 30px;
}

@media (max-width: 600px) {
  .thumb {
    width: 110px;
    height: 80px;
  }

  .close-btn,
  .prev-btn,
  .next-btn {
    font-size: 2.2rem;
  }
}
</style>
