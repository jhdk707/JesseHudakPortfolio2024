<template>
  <div class="flex items-center">
    <div class="container">
      <div class="carousel container h-100">
        <fwb-carousel no-indicators :pictures="pictures" />
      </div>
      <p class="bio">
        My name is Jesse Hudak, a dedicated problem solver, eager explorer of intricate challenges, and a conversationalist with a knack for engaging dialogue.
        <br class="break">
        Throughout my career, I've embraced a journey of perpetual growth and exploration, particularly within the dynamic realm of technology. While my love for tinkering with computers has been a lifelong passion, I've always sought a career path that offers a mix of creativity, fulfillment, and adaptability, allowing me to thrive in diverse environments.
        <br class="break">
        My decision to join a cohort program at U.C Berkeley was a turning point in my professional trajectory. Despite the inevitable hurdles, I viewed it as a pivotal step towards aligning my aspirations with tangible goals.
        <br class="break">
        In addition to formal education, I've delved into numerous personal projects and collaborative ventures with like-minded individuals, fostering an environment where innovation thrives. Continuously on the lookout for opportunities to contribute to open-source initiatives, I actively engage in challenging drills to hone my skills and keep pace with industry developments.
        <br class="break">
        In essence, my professional journey is defined by an unwavering commitment to excellence, driven by an insatiable thirst for knowledge and a dedication to pushing the boundaries of what's achievable.
        <br class="break">
      </p>
      <div class="container py-4 text-left">
      <ul style="list-style-type:circle;">
        <h3 class="hobbyheader">Random Hobbies & Interests</h3>
        <li>Beach trips & Tidepooling</li>
        <li>Body Surfing</li>
        <li>Working Out & Hiking, have lost 40lbs+ since last April!</li>
        <li>Boardgames, puzzles, video games</li>
        <li>Record Collecting & Vintage Audio Gear</li>
        <li>Discovering new artists</li>
        <li>Driving & Automotive Events</li>
        <li>Live music shows</li>
        <li>Cooking and learning new techniques or cuisune from various cultures</li>
        <li>Seeking out eateries and restaurants</li>
        <li>Watching cooking shows & competitions</li>
        <li>Playing Guitar</li>
        <li>Succulents</li>
        <li>Reading, currently on a Sci-Fi kick</li>
        <li>Spending hours on Google Maps looking at the world, finding interesting places to go or research </li>
      </ul>
      </div>

      <!-- <h4>
        <p>Copyright 2023 @ Jesse Hudak | Made with Vue.js/ Vite/ TailwindCSS & VSCode</p>
      </h4> -->
    </div>
  </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: 'src/assets/images/HeadshotCasual12142023.png', alt: 'Headshot'},
  {src: 'src/assets/images/Carweek.jpg', alt: 'Jesse at Carshow'},
  {src: 'src/assets/images/EscapeRoom.jpg', alt: 'Escape Room Team Photo'},
  {src: 'src/assets/images/BeneciaFriends.jpg', alt: 'Downtown Benecia on birthday'},
  {src: 'src/assets/images/BabyGoat.jpg', alt: 'Jesse with baby goat'},
  {src: 'src/assets/images/OaklandMetro.jpg', alt: 'Jesse with Aaron from Giant Squid'},
  {src: 'src/assets/images/OroBeach.jpg', alt: 'Oro Beach Portrait'},
  {src: 'src/assets/images/PossoStage.jpg', alt: 'Posso Stage band with Grandfather'},
  {src: 'src/assets/images/RuthGrange.jpg', alt: 'Rutherford battle of the bands'},
]
</script>

<style>
.bio{
  margin-top: 2em;
  font-size: medium;
  font-weight: 500;
  background: linear-gradient(125deg, rgb(16, 16, 16) 2%, rgba(23,23,23,1) 35%, rgba(24,24,24,1) 100%);
  padding: 1em;
  border-radius: 2%;
}

.container {
  color: white;
  max-height: 750px; 
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */
}

.container::-webkit-scrollbar {
  display: none;
}


.break {
  margin-bottom: 1em;
}

img, video {
  object-fit: cover;
  height: auto;
}

.portrait {
  height: auto;
  border: 2px solid #353535;
  box-shadow: 3px 3px 5px #272727;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

ul{
  align-items: left;
  margin-left: 2em;
}

li{
  margin-top: .10em;
}

.hobbyheader{
 font-size: medium;
 font-weight: 700;
 color: rgb(227, 160, 8);
 margin-left: -1.5em;
 border-bottom: solid rgb(227, 160, 8);
 margin-bottom:.25em;
}

h4{
  margin-top: 5em;
}

@media (max-width: 1200px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


  .container {
    margin-top: 2em;
  }
}
</style>
