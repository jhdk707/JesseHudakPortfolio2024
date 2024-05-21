<!-- BLOG PAGE 11/29/2023 -->

<template>
     <div class="title-content col-span-full flex flex-col justify-center items-center text-center my-12 space-y-4">
      <h1>Blog</h1>
      <fwb-p class="font-light text-white-600 dark:text-white-400">
        This space is to keep updates on things I am doing, parts of projects, accomplishments, or fun things that I am doing!
      </fwb-p>
    </div>
  <div class="blog-container grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 flex flex-wrap justify-center">
    <div v-for="post in blogPosts" :key="post.id" @click="openModal(post)" class="blog-post-card bg-white border border-gray-200 shadow hover:shadow-lg-blue-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-8 flex flex-col">
      <!-- Card Content Here -->
      <div class="blogcard flex-grow flex flex-col items-center justify-center p-1">
        <img class="rounded-lg" :src="post.image" alt="Blog post image" />
        <h5 class="text-lg font-bold text-gray-900 dark:text-white mt-3">{{ post.title }}</h5>
        <p class="text-gray-500">{{ post.date }}</p>
      </div>
    </div>
    <blog-post-modal :post="selectedPost" :isVisible="isModalVisible" @close="isModalVisible = false"></blog-post-modal>
  </div>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>

<script>
  // Import Modal component
  import BlogPostModal from '@/components/BlogPostModal.vue';
  //IMAGE IMPORTS FOR PROJECT CARDS - 11/29/2023
  import AMSOMMimg from '@/assets/images/AMSOMM.png';
  import Groovana  from '@/assets/images/groovanascreen.png';
  import Expanse from '@/assets/images/readingtree.jpg';
  import Skyline from '@/assets/images/skylinesnapdragon.jpg';
  import BoyHarsher from '@/assets/images/boyharsher.jpg';
  import Capacitor from '@/assets/images/ioniccapacitor.jpg';
  import Ingrediq from '@/assets/images/recipesearch.png';
  import Northern from '@/assets/images/northernlights.jpg'

  export default {
    components: {
      'blog-post-modal': BlogPostModal
  },
    data() {
      return {
        isModalVisible: false,
      selectedPost: null,
        blogPosts: [
        {
          id: 8,
          title: 'Ionic Capacitor',
          date: '05 / 15 / 24',
          image: Capacitor,
          blogtext: 'Ionic Capacitor is really, really cool. I wanted to take my Ingredient I.Q app to the next level and started looking into Vue-Native and how to build something with it. I found out about Ionic and how simple it is to use and implement into Vuejs. After jumping through a few hoops, learning how to install Java, setting the environment variables correctly, installing Android Studio, creating a Signed Bundle and figuring out how to use a keystore properly, I was able to create .APK and .AAB files. I am still working on getting the iOS portions set up, but I am in the process of testing my app in the Google Play Store to get it published! This is very helpful to know, as I would also like to move my Groovana project over to mobile aswell. Now I know! Smarter every day.',
        },
        {
          id: 7,
          title: 'Ingredient I.Q',
          date: '05 / 13 / 24',
          image: Ingrediq,
          blogtext: 'While working on this App, I was trying a lot of different things to speed up load times for the recipes and images, details, etc. I was using 2 different API calls to make this happen initially. One to search for recipes based on your search terms, and then another to use the recipe ID to launch a modal with the details that would then provide a link to the source page. Well, I noticed that the details endpoint had dietary aids like Vegan, Gluten Free, etc., and I wanted to implement that into the cards on the search, however it was the details endpoint that contained that. I was able to make it work initially by using an async function to render the icons but this was pretty slow and not working all too well. I did some exploring in the other endpoints that were available and found a bulk details function which allowed me to do everything I need with one call, including the details to provide the modal with the information it needs. This was a pretty neat discovery, as it allowed me to make the app more efficient by reducing 2 calls down to 1, makes the app run faster, provides instant data to the modal, including the images which was loading slow prior, even with lazy loading and everything else I had tried. Plus it also costs less to run now! Development is a lot of fun and I am glad that this little project has provided me with so much learning experience.',
        },
        {
          id: 6,
          title: 'Northern Lights! ',
          date: '05 / 11 / 24',
          image: Northern,
          blogtext: 'A once in a lifetime chance really. When a friend tells you the lights are visible in your hometown, you run outside and look. I could not believe how lucky I was to be able to witness such a beautiful display of nature and space. I was out for hours taking pictures and chasing views. I only wish I had a better camera to take better shots but the memories are worth so much more than that.',
        },
        {
          id: 5,
          title: 'Hiking',
          date: '04 / 18 / 24',
          image: Skyline,
          blogtext: 'On top of my usual exercise which involves a lot of kettlebells, cardio, jumpropes and barbells, I have been going on 1-2 long hikes a week and I have been loving it. It is really nice to be able to get out and explore nature and find my boyhood wonder of life, flora and fauna again. This photo was taken of this gorgeous flower which I suspect to be some kind of wild snapdragon or close to it, growing out of a ruin from some old mine. We did a nice steep 6 miles and also got to watch some red-tailed hawks coasting on the wind.',
        },
   	    {
          id: 4,
          title: 'Boy Harsher',
          date: '04 / 18 / 24',
          image: BoyHarsher,
          blogtext: 'A good concert really does a lot for cleansing the soul, I tell you what. Boy Harsher played at the Regency Ballroom in SF. I went to see them with my cousin. We danced and swayed all night. The sound was so good and I loved how simple but effective the light show was. We had such a good time',
        },
       	{
          id: 3,
          title: 'The Expanse',
          date: '04 / 13 / 24',
          image: Expanse,
          blogtext: ' I have been really enjoying reading the "Expanse" series of books written by James S.A Corey. I cannot believe the level of detail and creativity that went into writing these. I was recommended this series by a wonderful gentleman at Borderlands books in S.F when I went in asking for a good Hard-Scifi recommendation. I also have found the perfect tree for reading on, which I usually visit once a week for a few hours to get some nature and reading time in.',
        },
        {
          id: 2,
          title: 'The American Sommelier',
          date: '03 / 20 / 24',
          image: AMSOMMimg,
          blogtext: 'A good friend of mine needed a website built for a Wine Course that he was putting together. He wanted something simple that he would easily add content to, create his courses, upload course material, create appointments, etc. We decided to use Squarespace to create this, which was a interesting project. It allowed us to create a website pretty quickly and focus mostly on design, and making sure that everything is laid-out well and themed properly. However, it does really make me appreciate a REACT based webpage more now after having to see each page load vs just components and views that I have been used to.',
        },
      	{
          id: 1,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '03 / 06 / 24',
          image: Groovana,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        // {
        //   id: null,
        //   title: 'null',
        //   date: 'x / xx / xx',
        //   image: null,
        //   blogtext: 'null',
        // },
        ],
    };
  },
  methods: {
    openModal(post) {
      this.selectedPost = post;
      this.isModalVisible = true;
    }
  }
};
</script>
  

<style scoped>
.blog-container {
  margin: 1em;
  margin-top: 4em;
  overflow-y: auto;
}

p{
  margin: 1em;
}

.title-content {
  display: flex;
  align-items: center;
  margin-top: 5em;
}

.blog-post-card{
max-width: 400px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 3em;
  font-weight: 700;
}

h5 {
  padding-bottom: 1em;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
  
  
  
  