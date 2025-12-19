<script setup>
import instaIcon from '@/assets/svg/insta-icon.svg'
import linkedinIcon from '@/assets/svg/linkedin-icon.svg'
import mailIcon from '@/assets/svg/mail-icon.svg'
</script>


<template>

  <h2>Contact Me</h2>

  <h3>Let's talk! You can shoot me a message or find me on the platforms below. I'll get back to you A.S.A.P.!</h3>

  <div class="contact-container">

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="fname">Name:</label>
        <input type="text" id="fname" name="fname" placeholder="Your Name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="yourname@example.com" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message here..." rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <div class="contact-icons">
      <a href="https://instagram.com" target="_blank" aria-label="Instagram">
        <img :src="instaIcon" alt="Instagram icon" />
      </a>

      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <img :src="linkedinIcon" alt="LinkedIn icon" />
      </a>

      <a href="mailto:your@email.com" aria-label="Email">
        <img :src="mailIcon" alt="Email icon" />
      </a>
    </div>

  </div>
</template>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  font-family: Boldonse;
  font-size: 3rem;
  color: white;
  text-align: left;
  margin: 30px 20px 10px 30px;
}

h3 {
  display: block;
  color: #F7BC21;
  font-family: Lato;
  font-size: 20px;
  line-height: 2;
  margin: 30px 20px 10px 30px;
}

.contact-form {
  font-family: Lato;
  padding: 30px;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

a {
  color: white;
}

label {
  display: block;
  color: white;
  font-size: 18px;
  margin-bottom: 8px;;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #C12026;
  color: #FEDEBB;
  border: none;
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #FEDEBB;
  color: #C12026;
  transform: translateY(-2px);
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;

}

.contact-icons img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.contact-icons img:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-size: 20px;
  }

  .contact-form {
    padding: 20px;
  }

  label {
    font-size: 16px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 14px;
    padding: 10px;
  }

  .submit-btn {
    font-size: 16px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 15px;
  }

  h2 {
    font-size: 2.25rem;
  }

  .contact-form {
    padding: 15px;
  }
}
</style>
