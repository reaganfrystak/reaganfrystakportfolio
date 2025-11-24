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
div.links {
  display: flex;
  flex-direction: column;
  justify-content: right;
  font-size: 15px;
  font-family: Boldonse;

  a {
    color: #FEDEBB;
    text-decoration: none;
    border: 1px white;
    padding: 5px;

    &:hover {
      background-color: #FEDEBB;
      color: #272963;
    }
  }

  @media (width > 600px) {
    /*overrides flex-direction of column on div.links*/
    flex-direction: row;
  }
}
</style>
