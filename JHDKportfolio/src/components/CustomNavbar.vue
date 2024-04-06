<!-- CustomNavbar.vue -->

<template>
  <nav class="flex items-center justify-between bg-gray-700 p-2">

    <!-- Navigation links -->
    <div class="flex flex-wrap lg:flex-nowrap lg:justify-start">
      <router-link to="/">
        <a :class="{ 'router-link-exact-active': isActive('/') }" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">Home</a>
      </router-link>
      <router-link to="/about">
        <a :class="{ 'router-link-exact-active': isActive('/about') }" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">About</a>
      </router-link>
      <router-link to="/projects">
        <a :class="{ 'router-link-exact-active': isActive('/projects') }" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">Projects</a>
      </router-link>
      <router-link to="/tech">
        <a :class="{ 'router-link-exact-active': isActive('/tech') }" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">Technologies</a>
      </router-link>
      <router-link to="/blog">
        <a :class="{ 'router-link-exact-active': isActive('/blog') }" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white">My Blog</a>
      </router-link>
    </div>
  </nav>
</template>



<script setup>
import { useRoute } from 'vue-router';
// import { ref } from 'vue';

const route = useRoute();

// const mobileMenuOpen = ref(false);

// const toggleMobileMenu = () => {
//   mobileMenuOpen.value = !mobileMenuOpen.value;
// };

const isActive = (routePath) => {
  return route.path === routePath;
};
</script>

<style scoped>


.link-style {
  color: rgb(227, 160, 8);
}

a {
  color: rgb(227, 160, 8);
  padding-left: .5em;
  text-shadow: 1px 1px 3px black;
}
a.router-link-exact-active:hover {
  background-color: transparent;
}



</style>

