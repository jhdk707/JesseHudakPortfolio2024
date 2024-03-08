<!-- CustomNavbar.vue -->

<template>
  <nav>
    <router-link to="/">
      <a :class="{ 'router-link-exact-active': isActive('/') }">Home</a>
    </router-link>
    <router-link to="/about">
      <a :class="{ 'router-link-exact-active': isActive('/about') }">About</a>
    </router-link>
    <router-link to="/projects">
      <a :class="{ 'router-link-exact-active': isActive('/projects') }">Projects</a>
    </router-link>
    <router-link to="/tech">
      <a :class="{ 'router-link-exact-active': isActive('/tech') }">Technologies</a>
    </router-link>
    <!-- <router-link to="/photos">
      <a :class="{ 'router-link-exact-active': isActive('/photos') }">Photography</a>
    </router-link> -->
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (routePath) => {
  return route.path === routePath;
};
</script>

<style scoped>
nav {
  /* display: flex; */
  /* justify-content: space-around; */
  align-items: center;
  color: #00a86b;
  text-shadow: 1px 1px 3px black;
  background: radial-gradient(farthest-corner at 50px 37px, #353535 10%, #272727 25%, #181818 75% );
  border-radius: 20px;
  border-left: solid rgb(227, 160, 8);
  border-bottom: solid rgb(227, 160, 8);
  /* margin-top: 2em; */
  width: 100%;
}  

a.router-link-exact-active {
  color: rgb(227, 160, 8);
}

a {
  padding: .50em;
}
a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (max-width: 540px) {
  nav {
    width: 100%;
  }
}

@media (max-width: 300px) {
  nav {
    max-width: 250px;
  }
  a {
  padding: .10em;
  }
}

</style>

