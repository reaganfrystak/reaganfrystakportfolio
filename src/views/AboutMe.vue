<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue'
import LightboxGallery from '@/components/LightboxGallery.vue'

import me1 from '@/assets/printingpress.jpg'
import me2 from '@/assets/axegame.jpg'
import me3 from '@/assets/desheadshot.jpg'

const homeImages = [me1,me2,me3]
</script>

<template>
  <div class="abouttitle">About Me</div>

  <div class="aboutcontainer">
    <div class="about-content">

      <div class="carousel-container desktop-only">
        <ImageCarousel :images="homeImages" :autoplay="true" :interval="4000" />
      </div>


      <div class="text-content">
        <div class="hiiam">Hi! I'm Reagan.</div>

        <div class="introdesc">
          <p>
            I'm a 22 year old junior graphic design major and ux minor attending the University of Minnesota. While growing up, I've always had a passion for art and design. I had never taken art classes in high school but I would always be drawing, editing fun pictures, and writing! I have a knack for branding; illustration; and animation, and my ultimate dream goal is to work within the entertainment industry, specifically with animated TV series, and to one day create a series of my own to share with the world. For now, I work within branding and advertising to get myself familiar with working as a creative within a team setting. I'm always looking to push my design skills to make more engaging material!
          </p>
          <p>
            Outside of design, I love to explore my surroundings! Going on long walks while daydreaming to music is my favorite way to destress. I also enjoy biking, swimming, and skiing – basically anything that gets my body moving. I also like reading and making creative writing pieces outside of the school year. Everything I do is something I can take inspiration from in one way or another!
          </p>
        </div>
      </div>
    </div>

    <section class="mobile-gallery mobile-only">
      <LightboxGallery :images="homeImages" />
    </section>
  </div>
</template>

<style scoped>
.abouttitle {
  font-family: Boldonse;
  font-size: 3rem;
  color: white;
  margin: 30px 20px 10px 30px;
}

.aboutcontainer {
  width: 100%;
  margin: 50px 0;
}

.about-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.carousel-container {
  flex: 1;
  max-width: 600px;
  height: 800px;
  width: 100%;
}

.mobile-gallery {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  max-width: 600px;
}

.hiiam {
  color: #F7BC21;
  font-size: 36px;
  font-family: Boldonse;
  line-height: 1.2;
  margin-bottom: 12px;
  margin-top: 16px;
}

.introdesc {
  color: white;
  font-size: 16px;
  font-family: Lato;
  line-height: 1.6;
}

.introdesc p {
  margin-bottom: 16px;
}

.introdesc p:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .abouttitle {
    text-align: center;
    font-size: 2.5rem;
    margin: 20px 16px 10px 16px;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0 16px;
  }

  .text-content {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  .introdesc {
    max-width: 680px;
    text-align: center;
  }

  .hiiam {
    font-size: 28px;
  }
}
</style>
