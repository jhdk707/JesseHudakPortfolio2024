<!-- MainHeader.vue -->

<template>
  <div class="headercontainer">
   <div class="greetings">
   <h1 class="text-5xl font-extrabold dark:text-white">Jesse Hudak</h1>
   <h2 class="text-3xl font-extrabold dark:text-gray">Full Stack Web Developer</h2>
   <p>{{ quote }}</p>
   <CustomNavbar/>
   </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import CustomNavbar from './CustomNavbar.vue';

import { ref, onMounted } from 'vue';

// Define a reactive property to hold the quote
const quote = ref('');

// Function to fetch the quote from the API
const fetchRandomQuote = async () => {
  const options = {
    method: 'GET',
    url: 'https://motivational-content.p.rapidapi.com/quotes',
    params: { limit: '100'},
    headers: {
      'X-RapidAPI-Key': '16f87e2059mshe937410fce7f782p1d1cc9jsnae5dd54150f4',
      'X-RapidAPI-Host': 'motivational-content.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // Get a random quote from the response
    const randomIndex = Math.floor(Math.random() * response.data.length);
    quote.value = response.data[randomIndex].quote;
    // Store the quote in localStorage
    localStorage.setItem('quote', quote.value);
  } catch (error) {
    console.error(error);
  }
}

// Function to get the quote from localStorage on page load
const getStoredQuote = () => {
  const storedQuote = localStorage.getItem('quote');
  if (storedQuote) {
    // Update the quote property with the stored quote
    quote.value = storedQuote;
  } else {
    // If no stored quote, fetch a new one
    fetchRandomQuote();
  }
}

// Call the fetchQuote function when the component is mounted
onMounted(() => {
  getStoredQuote();
});

// Clear local storage on tab or window close
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('quote');
});

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<style scoped>

h1 {
  font-size: 2.6rem;
  position: left;
  top: -10px;
  color: hsla(160, 100%, 37%, 1);
  text-shadow: 2px 3px 3px rgb(30, 30, 30);
  padding-left: .5em;
}

h2 {
  font-size: 1.6rem;
  position: left;
  text-shadow: 2px 3px 3px rgb(30, 30, 30);
  padding-left: .75em;
}

p{
  padding-bottom: 1em;
  position: left;
  padding-left: 1.25em;
}

</style>
