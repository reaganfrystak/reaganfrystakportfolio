<script setup lang="ts">
</script>

<template>
  <div class="links">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'work'}">Work</router-link>
    <router-link :to="{name: 'about-me'}">About Me</router-link>
    <router-link :to="{name: 'contact-me'}"> Contact Me</router-link>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  font-size: 15px;
  font-family: Boldonse;
}

.links a {
  color: #FEDEBB;
  text-decoration: none;
  padding: 5px;
}

.links a:hover {
  background-color: #FEDEBB;
  color: #272963;
}


@media (min-width > 600px) {
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
}
</style>
