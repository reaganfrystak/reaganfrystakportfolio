<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar/>
    </header>

    <section class="content">
      <router-view/>
    </section>

    <footer>Made by me</footer>
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
      background-color: white;
      color: black;
      padding: 10px;
      border-radius: 10px;
    }

    footer {
      text-align: center;
      padding: 10px;
    }
  }
</style>
