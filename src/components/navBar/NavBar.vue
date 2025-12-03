<script setup>
import NavLinks from '@/components/navBar/NavLinks.vue'

const toggleMobileNav = () => {
  const nav = document.querySelector('.nav-links-mobile')

  if (nav.style.display === 'none') {
    nav.style.display = 'block'
  } else {
    nav.style.display = 'none'
  }
}
</script>

<template>
  <header class="site-header">
  <div class="container">
    <div class="top-nav">
      <div class="logo">
      </div>
      <a href="javascript:void(0)" class="hamburger" @click="toggleMobileNav">
        <i class="fa fa-bars"></i>
      </a>

      <nav-links class="nav-links-desktop" />
    </div>

    <nav-links class="nav-links-mobile" />
  </div>
  </header>
</template>

<style scoped>

div.container {
  background-color: #121212;
  width: 100%;

  .logo {
    width: 200px;
    height: 100px;
    background: url('@/assets/typograph.png') no-repeat center/contain;
    margin-left: 20px;
  }

  i {
    color: white;
    margin-right: 20px;
  }

  div.top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    align-items: center;

    .nav-links-desktop {
      display: none;
      gap: 50px;
    }

    .nav-links-mobile {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }



  @media (min-width: 600px) {
    .hamburger {
      display: none;
    }

    .nav-links-mobile {
      display: none !important;
      justify-content: left;

    }

    .nav-links-desktop {
      display: block !important;
    }
  }

  .nav-links-mobile {
    display: none;
  }
}
</style>
