<script setup lang="ts">
import MailIcon from '@/assets/svg/mail-icon.vue'
</script>

<template>
  <div class="links">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'work'}">Work</router-link>
    <router-link :to="{name: 'about-me'}">About Me</router-link>
    <router-link :to="{name: 'contact-me'}"><mail-icon/> Contact Me</router-link>
  </div>
</template>

<style scoped>
div.links {
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 10px;
  font-size: 16px;
  font-family: Lato;

  a {
    color: purple;
    text-decoration: none;
    border: 1px white;
    padding: 5px;

    svg {
      height: 20px;
      width: 20px;
    }

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media (width > 600px) {
    /*overrides flex-direction of column on div.links*/
    flex-direction: row;
  }
}
</style>
