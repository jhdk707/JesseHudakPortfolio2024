<template>
  <fwb-navbar class="bg-yellow-400 text-black">
    <template #logo>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-black">Jesse Hudak's Portfolio</h1>
  </template>
  
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu" class="text-black">
        <fwb-navbar-link :style="{ color: isActive('/home') ? 'blue' : 'black' }" link="/home" class="text-black hover:text-gray-700">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link :style="{ color: isActive('/projects') ? 'blue' : 'black' }" link="/projects" class="text-black hover:text-gray-700">
          Projects
        </fwb-navbar-link>
        <fwb-navbar-link :style="{ color: isActive('/about') ? 'blue' : 'black' }" link="/about" class="text-black hover:text-gray-700">
          About
        </fwb-navbar-link>
	      <fwb-navbar-link :style="{ color: isActive('/tech') ? 'blue' : 'black' }" link="/tech" class="text-black hover:text-gray-700">
          Tech
        </fwb-navbar-link>
	      <fwb-navbar-link :style="{ color: isActive('/blog') ? 'blue' : 'black' }" link="/blog" class="text-black hover:text-gray-700">
          Blog
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>


<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
}
</script>

<style scoped>
h1{
  color:white;
}

/* Further emphasize hover states as well */
.fwb-navbar-link[aria-current="page"]:hover {
  color: rgb(2, 149, 19); 
}
</style>