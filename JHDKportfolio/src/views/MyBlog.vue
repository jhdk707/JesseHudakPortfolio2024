<!-- BLOG PAGE 11/29/2023 -->

<template>
  <div class="blog-container flex flex-wrap justify-center">
    <div v-for="post in blogPosts" :key="post.id" class="max-w-full bg-white border border-gray-200 shadow hover:shadow-lg-blue-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-8 hover:shadow-lg flex">
      <div class="w-2/3 p-5">
        <p class="text-gray-500">{{ post.date }}</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ post.blogtext }}</p>
      </div>
      <div class="w-1/3">
        <img class="rounded-r-lg" :src="post.image" alt="screenshot of webpage" />
      </div>
    </div>
  </div>
</template>

  
<script>
  
  //IMAGE IMPORTS FOR PROJECT CARDS - 11/29/2023
  import AMSOMMimg from '@/assets/images/AMSOMM.png';
  
  
  
  export default {
    data() {
      return {
        blogPosts: [
        {
          id: 1,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: AMSOMMimg,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        {
          id: 2,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: AMSOMMimg,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        {
          id: 2,
          title: 'AWS Amplify V6 and Vue3.js ',
          date: '4 / 5 / 24',
          image: AMSOMMimg,
          blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
        },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
  .blog-container {
    width: 90vw;
    height: 80vh;
  }


  </style>
  
  
  
  