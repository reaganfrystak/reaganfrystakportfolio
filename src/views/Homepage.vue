<script setup>
</script>

<template>
  <div class="title">Reagan Frystak</div>
  <div class="designer">Graphic & UX/UI Design</div>
  <div class="homesubtitle">Welcome to my portfolio! My design work is primarily focused on branding and ux/ui design. I’ve had the wonderful opportunity to clients across the Twin Cities that I’ve worked with, and I’ve been able to see how my work is displayed in the real and digital world! To check out some of the work I’ve done, click the button below!</div>
  <button class="worksbutton">See My Work</button>

</template>

<style scoped>

.title {
  display: inline-flex;
  color: #FEDEBB;
  background-color: #C12026;
  border-radius: 10px;
  flex-direction: column;
  justify-content: left;
  font-size: 60px;
  padding: 10px 60px 0 10px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  font-family: Boldonse;
}

.designer {
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #C12026;
  font-family: "Lato Black";
  color: #FEDEBB;
  font-size: 20px;
  margin-left: 20px;
  padding: 10px 30px 10px 10px;
  border-radius: 10px;
}

div.homesubtitle {
  display: flex;
  color: white;
  font-family: Lato;
  flex-direction: row;
  justify-content: left;
  font-size: 16px;
  margin: 30px 60px 0 20px;
  line-height: 2;
}

.worksbutton {
  display: inline-block;
  padding: 30px 70px;
  background-color: #C12026;
  color: #FEDEBB;
  border: 1px solid black;
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


@media (max-width: 600px) {

  .title {
    display: inline-flex;
    color: #FEDEBB;
    background-color: #C12026;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    font-size: 60px;
    text-align: center;
    padding: 10px 30px 10px;
    font-family: Boldonse;
  }

  div.homesubtitle {
    display: flex;
    color: white;
    font-family: Lato;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    line-height: 2;
  }

  .worksbutton {
    display: flex;
    justify-content: center;
    padding: 30px 70px;
    background-color: #C12026;
    color: #FEDEBB;
    border: 1px solid black;
    border-radius: 5px;
    font-family: Lato;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    margin-top: 30px;

    &:hover {
      background-color: #FEDEBB;
      color: #C12026;
    }
  }
}
</style>

