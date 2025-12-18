<script setup>
  import LightboxGallery from '@/components/LightboxGallery.vue'

  import home1 from '@/assets/home1.png'
  import home2 from '@/assets/home2.png'

  const homeImages = [home1, home2]
</script>

<template>
    <div class="hero">
      <div class="title">Reagan Frystak</div>
      <div class="designer">Graphic & UX/UI Design</div>
      <div class="homesubtitle">...</div>

      <router-link :to="{ name: 'work' }" class="button-link">
        <button class="worksbutton">See My Work</button>
      </router-link>
    </div>

    <section class="home-gallery">
      <LightboxGallery :images="homeImages" />
    </section>
  </template>

<style scoped>
.title {
  display: inline-flex;
  color: #FEDEBB;
  background-color: #C12026;
  border-radius: 10px;
  flex-direction: column;
  justify-content: left;
  text-align: center;
  padding: 0 20px 0 20px;
  font-size: 60px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  font-family: Boldonse;
}

.designer {
  display: flex;
  justify-content: left;
  align-items: left;
  margin: auto 20px auto;
  width: fit-content;
  background-color: #C12026;
  font-family: "Lato Black";
  color: #FEDEBB;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 10px;
}

div.homesubtitle {
    display: block;
    max-width: 600px;
    margin: 30px 60px 0 20px;
    color: white;
    font-family: Lato;
    font-size: 16px;
    line-height: 2;
}

.worksbutton {
  display: inline-block;
  padding: 30px 70px;
  background-color: #C12026;
  color: #FEDEBB;
  border-radius: 5px;
  font-family: Lato;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  margin: 30px 70px 0 20px;

  &:hover {
    background-color: #FEDEBB;
    color: #C12026;
  }
}

.button-link {
  text-decoration: none;
}

.home-gallery {
  padding: 40px 20px;
}

@media (max-width: 600px) {

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 36px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 15px auto;
    max-width: min(70%, 500px);
    padding: 10px 30px;
    background-color: #C12026;
    color: #FEDEBB;
    border-radius: 10px;
    font-family: Boldonse;
    font-size: 60px;
    text-align: center;
  }

  .designer {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: #C12026;
    font-family: "Lato Black";
    color: #FEDEBB;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
    padding: 10px auto 10px;
    border-radius: 10px;
  }

  div.homesubtitle {
    display: inline-flex;
    color: white;
    font-family: Lato;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    line-height: 2;
    margin: 40px auto 20px auto;
  }

  .worksbutton {
    display: flex;
    justify-content: center;
    padding: 30px 70px;
    background-color: #C12026;
    color: #FEDEBB;
    border-radius: 5px;
    font-family: Lato;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    margin: 30px auto 0 auto;


    &:hover {
      background-color: #FEDEBB;
      color: #C12026;
    }
  }
}
</style>

