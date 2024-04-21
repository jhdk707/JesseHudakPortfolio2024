<!-- BLOG PAGE 11/29/2023 -->


<template>
  <div class="blog-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
    <div v-for="post in blogPosts" :key="post.id" class="bg-white border border-gray-200 shadow hover:shadow-lg-blue-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-8 flex flex-col">
      <!-- Image and Title -->
      <div class="flex-grow flex flex-col items-center justify-center p-4">
        <img class="rounded-lg" :src="post.image" alt="Blog post image" />
        <h5 class="text-lg font-bold text-gray-900 dark:text-white mt-4">{{ post.title }}</h5>
        <p class="text-gray-500">{{ post.date }}</p>
      </div>
      <!-- Content with Dropdown at the bottom -->
      <div class="flex flex-col flex-grow">
        <div v-if="expandedPostId === post.id" class="p-5">
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ post.blogtext }}</p>
        </div>
        <button @click="togglePost(post.id)" class="w-full p-4 text-left text-sm font-medium text-gray-500 mt-auto">
          Read Post
          <span v-if="expandedPostId === post.id">▲</span>
          <span v-else>▼</span>
        </button>
      </div>
    </div>
  </div>
</template>


  
<script>
  
  //IMAGE IMPORTS FOR PROJECT CARDS - 11/29/2023
  import AMSOMMimg from '@/assets/images/AMSOMM.png';
  import Groovana  from '@/assets/images/groovanascreen.png';
  import Expanse from '@/assets/images/readingtree.jpg';
  import Skyline from '@/assets/images/skylinesnapdragon.jpg';
  import BoyHarsher from '@/assets/images/boyharsher.jpg';

  
  
  
  export default {
    data() {
      return {
        blogPosts: [
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
      expandedPostId: null,  // Track the ID of the expanded post
    };
  },
  methods: {
    togglePost(id) {
      // Toggle the expanded state; if it's already expanded, close it
      this.expandedPostId = this.expandedPostId === id ? null : id;
    }
  }
};
</script>
  
<style scoped>
  
.blog-container {
  width: 90vw;
  height: 80vh;
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
  
  
  
  