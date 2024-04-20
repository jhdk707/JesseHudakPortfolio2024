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
  
  
  
  export default {
    data() {
      return {
        blogPosts: [
        {
          id: 1,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: Groovana,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        {
          id: 2,
          title: 'The American Sommelier',
          date: '3 / 20 / 24',
          image: AMSOMMimg,
          blogtext: 'A good friend of mine needed a website built for a Wine Course that he was putting together. He wanted something simple that he would easily add content to, create his courses, upload course material, create appointments, etc. We decided to use Squarespace to create this, which was a interesting project. It allowed us to create a website pretty quickly and focus mostly on design, and making sure that everything is laid-out well and themed properly. However, it does really make me appreciate a REACT based webpage more now after having to see each page load vs just components and views that I have been used to.',
        },
        {
          id: 3,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: AMSOMMimg,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        {
          id: 4,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: Groovana,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        {
          id: 5,
          title: 'The American Sommelier',
          date: '3 / 20 / 24',
          image: AMSOMMimg,
          blogtext: 'A good friend of mine needed a website built for a Wine Course that he was putting together. He wanted something simple that he would easily add content to, create his courses, upload course material, create appointments, etc. We decided to use Squarespace to create this, which was a interesting project. It allowed us to create a website pretty quickly and focus mostly on design, and making sure that everything is laid-out well and themed properly. However, it does really make me appreciate a REACT based webpage more now after having to see each page load vs just components and views that I have been used to.',
        },
        {
          id: 6,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: AMSOMMimg,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
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
  
  
  
  