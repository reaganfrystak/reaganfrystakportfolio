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

    <footer>Made by Reagan Frystak 2025</footer>
  </section>
</template>

<style scoped>
  section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > * {
      border: 1px solid darkblue;
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
    text-align: center;
    padding: 10px;
    transform: translateY(200px);
  }
</style>
