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

    <footer>© Reagan Frystak 2025</footer>
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
    margin: 40px auto 10px auto;
    text-align: center;
    padding: 10px;
    color: #FEDEBB;
    font-family: Lato;
    font-size: 16px;
    background-color: #121212;
  }
</style>
