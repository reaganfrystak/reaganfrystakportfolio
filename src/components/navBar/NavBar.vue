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
  <div class="container">
    <div class="top-nav">
      <div class="logo"></div>

      <a href="javascript:void(0)" class="hamburger" @click="toggleMobileNav">
        <i class="fa fa-bars"></i>
      </a>

      <nav-links class="nav-links-desktop" />
    </div>

    <nav-links class="nav-links-mobile" />
  </div>
</template>

<style scoped>
div.container {
  div.top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    div.logo {
      height: 100px;
      width: 100px;
      background-color: purple;
      border-radius: 100px;
      display: flex;
      justify-content: left;
    }

    .nav-links-desktop {
      display: none;
    }
  }

  @media screen and (width > 400px) {
    .hamburger {
      display: none;
    }

    .nav-links-mobile {
      display: none !important;
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
