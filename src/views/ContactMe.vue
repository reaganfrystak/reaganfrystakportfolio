<script setup>
</script>

<template>
  <h2>Contact Me</h2>

  <h3>
    Let's talk! You can shoot me a message or find me on the platforms below. I'll get back to you
    A.S.A.P.!
  </h3>

  <div class="contact-container">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="fname">Name:</label>
        <input type="text" id="fname" name="fname" placeholder="Your Name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="yourname@example.com" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <div class="contact-icons">
      <a href="https://www.instagram.com/poputchik.z" target="_blank" aria-label="Instagram" class="icon-link">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="#FEDEBB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          />
          <path
            d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
          />
        </svg>
      </a>

      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="icon-link">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="#FEDEBB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
          />
          <path
            d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
          />
          <path
            d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
          />
        </svg>
      </a>

      <a href="mailto:reaganfrystak@gmail.com" aria-label="Email" class="icon-link">
        <svg
          fill="#FEDEBB"
          width="60px"
          height="60px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M20,7.328 L12.6585046,13.7525767 C12.3128975,14.054983 11.8110564,14.0801835 11.4394103,13.8281783 L11.3414954,13.7525767 L4,7.329 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7.328 Z M18.48,6 L5.518,6 L12,11.6712318 L18.48,6 Z"
          />
        </svg>
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
  color: #f7bc21;
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

label {
  display: block;
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
}

input[type='text'],
input[type='email'],
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
  background: #c12026;
  color: #fedebb;
  border: none;
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #fedebb;
  color: #c12026;
  transform: translateY(-2px);
}

.contact-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background-color: #c12026;
  border: 3px solid #fedebb;
  border-radius: 50%;
  transition: all 0.3s ease;
  padding: 15px;
  box-sizing: border-box;
}

.icon-link:hover {
  transform: scale(1.1);
  background-color: #fedebb;
  border-color: #c12026;
}

.icon-link:hover svg {
  fill: #c12026;
}

.icon-link svg {
  transition: fill 0.3s ease;
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

  input[type='text'],
  input[type='email'],
  textarea {
    font-size: 14px;
    padding: 10px;
  }

  .submit-btn {
    font-size: 16px;
    padding: 12px;
  }

  .contact-icons {
    gap: 20px;
  }

  .icon-link {
    width: 60px;
    height: 60px;
    padding: 12px;
  }

  .icon-link svg {
    width: 30px;
    height: 30px;
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
