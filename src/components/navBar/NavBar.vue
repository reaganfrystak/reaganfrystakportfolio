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
      <div class="typograph">
        <img
          src="D:\Webstorm\portfolio_website\photos and media\typograph.png"
          alt="typograph"
          width="200"
        />
      </div>

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

  background-color: #121212;

  .typograph {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  div.top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    .nav-links-desktop {
      display: none;
    }
  }

  @media screen and (width > 600px) {
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
