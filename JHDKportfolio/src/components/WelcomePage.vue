<!-- WelcomePage.vue -->

<script setup>
import WelcomeItem from './WelcomeItem.vue';
import WaveIcon from './icons/IconWave.vue';
import TechIcon from './icons/IconTech.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';  
import CommunityIcon from './icons/IconCommunity.vue';
// import CameraIcon from './icons/IconCamera.vue'; for use with Photos page
import ContactModal from './ContactModal.vue';
import { FwbButton } from 'flowbite-vue'
import { ref } from 'vue';

// Contact Modal Script
const isContactModalOpen = ref(false);
const openContactModal = () => {
  isContactModalOpen.value = true;
};
const closeContactModal = () => {
  isContactModalOpen.value = false;
};
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <WaveIcon />
    </template>
    <template #heading>Welcome to my portfolio!</template>

    This portfolio is where I like to keep record of accomplishments, showcase my work, certificates, and anything else I wish to share! I will constantly keep updating this page as I learn more. It is built with  <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="green-link">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="green-link">Vue 3</a>, and migrated from my original portfolio built with <a href="https://create-react-app.dev/" target="_blank" rel="noopener" class="green-link">Create-React-App</a>. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TechIcon />
    </template>
    <template #heading>Technologies</template>

   I graduated from a 6 month Cohort through UC Berkeley Extenstion program in May of 2023. We focused on MERN Stack development with Javascript basis. I have since started learning other JS based frameworks, such as <a href="https://nextjs.org/" target="_blank" rel="noopener" class="green-link">Next.js</a>, and Vue/Vite. I am studying <a href="https://www.python.org/" target="_blank" rel="noopener" class="green-link">Python</a>, and intend to learn Java/C languages and learn more software development aswell. Visit the Technologies tab to see what else I've learned! 
  </WelcomeItem>
   
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
    <p> Download links for my Resume and Certificates that I have acquired </p>
    <fwb-button color="yellow" size="xs" outline @click="downloadResume">Resume</fwb-button>
    <br>
    <fwb-button color="yellow" size="xs" outline @click="downloadUcbcert">UCB Web Full-Stack Certificate</fwb-button>
    
  </WelcomeItem> 

  <!-- <WelcomeItem>
    <template #icon>
      <CameraIcon />
    </template>
    <template #heading>Photography</template>

    In my sparetime, I also really like taking photos of food and life. You can view them 
    on the Photography tab.
  </WelcomeItem> -->

    <!-- PLACEHOLDER TEMPLATE FOR ADDITIONAL CONTENT -->
  <!-- <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading></template>
   blahblahblah
  </WelcomeItem> -->
</template>


<script>
export default {
  methods: {
    downloadResume() {
      // Direct link to the Resume on Google Drive
      const resumeLink = 'https://drive.google.com/file/d/1Lrb0K5mN_CPUp2JyMDL8et4-UtWvwPWL/view?usp=sharing';
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

<style>

.green-link {
  color: #00a86b;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>