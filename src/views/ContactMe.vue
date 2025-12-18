<script setup lang="ts">
</script>

<template>
  <div class="contacttitle">Contact Me</div>
  <div class="contactsubtitle">Let's Talk!</div>
  <div class="contactcontainer"></div>
</template>

<style scoped>

.contacttitle {
  font-family: Boldonse;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 30px;
  margin-top: 30px;
}

.contactsubtitle {
  font-family: "Lato Black";
  font-size: 20px;
  color: #F7BC21;

}

.contactcontainer {
  display: flex;
  justify-content: center;
  margin: 50px;
}

@media (max-width: 600px) {
  .contacttitle {
    display: flex;
    justify-content: center;
    font-family: Boldonse;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .contactsubtitle {
    text-align: center;
  }
}

</style>
