<script setup>
</script>

<template>
  <div class="homecontainer"></div>
  <div class="title">Reagan Frystak</div>
  <div class="homesubtitle">Welcome to my portfolio. My design work consists primarily of branding design and UI/UX.</div>
  <div class="worksbutton">See My Work</div>

</template>

<style scoped>
div.homecontainer{
  margin: 50px;
}

.title {
  display: flex;
  color: #FEDEBB;
  flex-direction: column;
  justify-content: left;
  font-size: 3rem;
  font-family: Boldonse;
}

div.homesubtitle {
  display: flex;
  color: white;
  font-family: Lato;
  flex-direction: column;
  justify-content: left;
  font-size: 16px;
  transform: translate(0px, 50px);
}

.worksbutton {
  border: 1px solid black;
  padding: 5px;
  background-color: #C12026;
  font-family: Lato;
  color: #FEDEBB;
  border-radius: 5px;
  transform: translate(0px, 150px);

  &:hover {
    background-color: #FEDEBB;
    color: #C12026;
  }
}
</style>

