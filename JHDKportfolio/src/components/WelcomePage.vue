<template>
  <div class="homeContainer justify-center overscroll-auto absolute inset-0">
    <div class="welcome-content">
      <div class="welcome-paragraph">
        <h1>Welcome to my portfolio!</h1>
        <h2>
          This portfolio is where I like to keep record of accomplishments, showcase my work, certificates, and anything else I wish to share!
        </h2>
      </div>
    </div>
    
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Contact Me</template>
      <fwb-button color="yellow" size="xs" outline>
        <a href="https://github.com/jhdk707" target="_blank" rel="noopener" class="button-link">
          GitHub
        </a>
      </fwb-button>
      <br>
      <fwb-button color="yellow" size="xs" outline>
        <a href="https://www.linkedin.com/in/jesse-h-085117272/" target="_blank" rel="noopener">LinkedIn</a>
      </fwb-button>
      <br>
      <div>
        <!-- Button to open the ContactModal -->
        <fwb-button color="yellow" size="xs" outline @click="openContactModal">Email Me</fwb-button>
        <!-- Include the ContactModal component -->
        <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading> Resume & Certificates </template>
      Download links for my Resume and Certificates that I have acquired
      <br>
      <fwb-button color="yellow" size="xs" outline @click="downloadResume">Resume</fwb-button>
      <br>
      <fwb-button color="yellow" size="xs" outline @click="downloadUcbcert">UCB Web Full-Stack Certificate</fwb-button>
    </WelcomeItem> 

    <WelcomeItem>
      <template #icon>
        <QuoteIcon />
      </template>
      <template #heading>Quote of the Day</template>
      <p v-if="quote">{{ quote }}</p>
      <p v-else>Loading quote...</p> <!-- Placeholder content -->
      <br>
    </WelcomeItem>

    <!-- PLACEHOLDER TEMPLATE FOR ADDITIONAL CONTENT -->
    <!-- <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading></template>
      blahblahblah
    </WelcomeItem> -->
  </div>
</template>

<script setup>
import WelcomeItem from './WelcomeItem.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';  
import CommunityIcon from './icons/IconCommunity.vue';
import QuoteIcon from './icons/IconQuote.vue';
import ContactModal from './ContactModal.vue';
import { FwbButton } from 'flowbite-vue'
import { ref } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';

// Contact Modal Script
const isContactModalOpen = ref(false);
const openContactModal = () => {
  isContactModalOpen.value = true;
};
const closeContactModal = () => {
  isContactModalOpen.value = false;
};

// Quote Fetch API
const quote = ref('');

// Function to fetch a random quote from the API
const fetchRandomQuote = async () => {
  const options = {
    method: 'GET',
    url: 'https://motivational-content.p.rapidapi.com/quotes',
    params: { limit: '100' },
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
    // Update local storage with the new quote
    localStorage.setItem('quote', quote.value);
  } catch (error) {
    console.error('Failed to fetch new quote:', error);
    // Fallback to local storage if the API call fails
    getStoredQuote();
  }
}

// Function to get the quote from localStorage
const getStoredQuote = () => {
  const storedQuote = localStorage.getItem('quote');
  if (storedQuote) {
    quote.value = storedQuote;
  }
}

// Call fetchRandomQuote function directly when the component is mounted to ensure a new quote on each refresh
onMounted(() => {
  fetchRandomQuote(); // Always fetch a new quote on mount
});
</script>

<script>
export default {
  methods: {
    downloadResume() {
      // Direct link to the Resume on Google Drive
      const resumeLink = 'https://docs.google.com/document/d/19c8M7t-vj8eIJZKqQHP-VgHq5THDh4p0rAlKDfiZfQQ/edit?usp=sharing';
      window.open(resumeLink, '_blank');
    },
    downloadUcbcert() {
      // Direct link to the UCB Full Stack Cert on Google Drive
      const ucbCertLink = 'https://drive.google.com/file/d/1g9cpCORzjobqCHFcjVXqtUlti0skvfXq/view?usp=sharing';
      window.open(ucbCertLink, '_blank');
    },
  },
};
</script>

<style scoped>
.homeContainer {
  margin: 3em;
  margin-top: 10em;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 3em;
  font-weight: 700;
}

h2 {
  text-align: center;
  font-weight: 600;
}

.welcome-content {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.icon-container {
  margin-right: 1rem;
}

.welcome-paragraph {
  flex: 1;
}

.green-link {
  color: #00a86b;
}

.fwb-button {
  margin-bottom: 0.5rem;
}

@media (max-width: 680px) {
  .homeContainer {
    margin: 1em;
    margin-top: 5em;
  }

  .welcome-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .icon-container {
    margin-bottom: 1rem;
    margin-right: 0;
  }

  h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2em;
  font-weight: 700;
  }
}
</style>
