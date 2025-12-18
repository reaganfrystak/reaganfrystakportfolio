<script setup>
import NavLinks from '@/components/navBar/NavLinks.vue'
import { ref } from 'vue'

const isMobileOpen = ref(false)

const toggleMobileNav = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="top-nav">
        <div class="logo"></div>

        <button class="hamburger" @click="toggleMobileNav">
          <i class="fa fa-bars"></i>
        </button>

        <nav-links class="nav-links-desktop" />
      </div>

      <nav-links
        v-if="isMobileOpen"
        class="nav-links-mobile"
      />
    </div>
  </header>
</template>

<style scoped>
.container {
  background-color: #121212;
  width: 100%;
  position: relative;
}

.logo {
  width: 200px;
  height: 100px;
  background: url('@/assets/typograph.png') no-repeat center/contain;
  margin-left: 20px;
}

i {
  color: white;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: block;
}


.nav-links-desktop {
  display: none;
}

.nav-links-desktop ul {
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links-desktop li {
  text-align: right;
}

.nav-links-mobile {
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  background-color: #121212;
  padding: 20px;
  gap: 16px;
  z-index: 10;
}

.nav-links-mobile ul {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links-mobile li {
  text-align: right;
}

@media (min-width: 600px) {

  .logo {
    width: 200px;
    height: 100px;
    background: url('@/assets/typograph.png') no-repeat center/contain;
    justify-content: center;
  }

  .hamburger {
    display: none;
  }

  .nav-links-desktop {
    display: block !important;
  }

  .nav-links-mobile {
    display: none !important;
  }
}
</style>
