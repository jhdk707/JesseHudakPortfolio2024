<template>
  <div class="flex items-center">
    <div class="about clearfix">
      <div class="title-content col-span-full flex flex-col justify-center items-center text-center my-8 space-y-4">
      <h1>About Me</h1>
    </div>
        <div class="bio">
          <img src="@/assets/images/HeadshotCasual12142023.png" alt="Jesse Hudak's headshot" class="w-60 float-right headshot">
          <fwb-p class="font-light text-white-600 dark:text-white-400">
            My name is Jesse Hudak, a dedicated problem solver, eager explorer of intricate challenges and an overall curious dude. I like to figure out what makes things tick.
          </fwb-p>
          <fwb-p class="font-light text-white-600 dark:text-white-400">
            Throughout my career, I've embraced a journey of perpetual growth and exploration, particularly within the dynamic realm of technology. While my love for tinkering with computers has been a lifelong passion, I've always sought a career path that offers a mix of creativity, fulfillment, and adaptability, allowing me to thrive in diverse environments.
          </fwb-p>
          <fwb-p class="font-light text-white-600 dark:text-white-400">
            My decision to join a cohort program at U.C Berkeley was a turning point in my professional trajectory. Despite the inevitable hurdles, I viewed it as a pivotal step towards aligning my aspirations with tangible goals.
          </fwb-p>
          <fwb-p class="font-light text-white-600 dark:text-white-400">
            In addition to formal education, I've delved into numerous personal projects and collaborative ventures with like-minded individuals, fostering an environment where innovation thrives. Continuously on the lookout for opportunities to contribute to open-source initiatives, I actively engage in challenging drills to hone my skills and keep pace with industry developments.
          </fwb-p>
            <fwb-p class="font-light text-white-600 dark:text-white-400">
            In essence, my professional journey is defined by an unwavering commitment to excellence, driven by an insatiable thirst for knowledge and a dedication to pushing the boundaries of what's achievable.
          </fwb-p>
        </div>
      <div class="container py-4 text-left">
      <ul style="list-style-type:circle;">
        <h3 class="hobbyheader">Hobbies & Interests</h3>
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
    </div>
  </div>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>


<style scoped>
.about{
 display: block;
 margin: 2em;
 width: 90vw;
 background-color:  rgba(0,0,0,.7);
 border-radius: 10px;
 overflow-y: auto;
}
.bio{
  font-size: medium;
  font-weight: 500;
  padding: 1em;
  top: 0;
  margin-top: 3em
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 3em;
  font-weight: 700;
}
.container::-webkit-scrollbar {
  display: none;
}
.break {
  margin-bottom: 1em;
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

.headshot{
  border: solid rgb(227, 160, 8);
}

.float-right {
    float: right;
    margin-left: 20px; /* Adds space between the text and the image */
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}



@media (max-width: 800px) {
  .about {
    margin-top: 2em;
    top: 0;
  }
  .float-right {
        float: none;
        display: block;
        margin: 0 auto 20px; /* Centers the image and adds space below it */
        width: 100%; /* Makes the image take full width */
    }
}
</style>
