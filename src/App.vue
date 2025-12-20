<script setup>
import NavBar from '@/components/navBar/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar/>
    </header>

    <section class="content">
      <router-view/>
    </section>

    <footer>Website Designed By ©Reagan Frystak 2025</footer>
  </section>
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
  section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > * {

    }

    content {
      display: flex;
      flex-direction: space-between;
      background-color: white;
      color: black;
      padding: 10px;
      border-radius: 10px;
    }
  }

  footer {
    margin: 40px auto 0 auto;
    width: 100%;
    text-align: center;
    padding: 20px;
    color: white;
    font-family: Lato Light;
    font-size: 16px;
    background-color: #121212;
  }
</style>
