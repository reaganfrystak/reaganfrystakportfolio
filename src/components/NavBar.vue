<script setup>
</script>

<template>
  <div class="container">
    <div class="logo"></div>

    <div class="links">
      <router-link to="{name: 'home'}">Home</router-link>
      <router-link to="{name: 'about-me'}">About Me</router-link>
      <router-link to="{name: 'contact-me'}">Contact Me</router-link>
    </div>
  </div>
</template>

<style scoped>

div.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  div.logo {
    height: 200px;
    width: 200px;
    background-color: purple;
    border-radius: 100px;
  }

  div.links {
    display: flex;
    flex-direction: column;

    a {
      color: purple;
      text-decoration: none;
      border: 1px white;
      padding: 5px;

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
}

</style>
