<script setup>

//image carousel made with Claude to be utilized on other webpages.

import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && props.images.length > 1) {
    autoplayInterval = setInterval(nextSlide, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="carousel-inner">
      <div
        v-for="(img, index) in props.images"
        :key="index"
        class="carousel-slide"
        :class="{ active: index === currentIndex }"
      >
        <img :src="img" :alt="`Slide ${index + 1}`" />
      </div>
    </div>

    <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous slide">
      ‹
    </button>
    <button class="carousel-btn next" @click="nextSlide" aria-label="Next slide">
      ›
    </button>

    <div class="carousel-indicators">
      <button
        v-for="(img, index) in props.images"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  min-height: 400px;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(193, 32, 38, 0.7);
  color: #FEDEBB;
  border: none;
  font-size: 2.5rem;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
  border-radius: 4px;
}

.carousel-btn:hover {
  background: #c12026;
}

.carousel-btn.prev {
  left: 15px;
}

.carousel-btn.next {
  right: 15px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #FEDEBB;
  background: transparent;
  cursor: pointer;
  transition: background 0.3s ease;
}

.indicator.active {
  background: #C12026;
}

.indicator:hover {
  background: rgba(193, 32, 38, 0.5);
}

@media (max-width: 600px) {
  .carousel {
    height: 300px;
    min-height: 300px;
  }

  .carousel-btn {
    font-size: 2rem;
    padding: 8px 12px;
  }

  .carousel-btn.prev {
    left: 10px;
  }

  .carousel-btn.next {
    right: 10px;
  }

  .carousel-indicators {
    bottom: 15px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}
</style>
