
<template>
  <div class="body overflow-y-auto">
    <div class="headercontainer">
      <CustomNavbar />
    </div>
    <div class="viewcontainer">
      <Loading v-if="loading" />
      <transition
        name="fade"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <RouterView v-slot="{ Component }">
          <component :is="Component" @hook:mounted="loading = false" />
        </RouterView>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import CustomNavbar from './components/NavHeader.vue';
import Loading from './components/LoadingSpinner.vue'
</script>

<script>
export default {
  name: 'App',
  components: {
    CustomNavbar,
    Loading
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease-in-out";
        el.style.opacity = 1;
        done();
      }, 100); 
    },
    leave(el, done) {
      el.style.transition = "opacity 0.5s ease-in-out";
      el.style.opacity = 0;
      setTimeout(() => {
        done();
      }, 500); 
    }
  },
  watch: {
    $route() {
      this.loading = true;
    }
  },
  mounted() {
    this.$router.beforeEach((_to, _from, next) => {
      this.loading = true;
      next();
    });
    this.$router.afterEach(() => {
    });
  }
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.headercontainer {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #181818; 
}

.viewcontainer {
  overflow-y: auto;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

@media (max-width: 1200px) {

.headercontainer {
position: fixed;
width: 100%;
z-index: 1000;
background-color: #181818;
}

.viewcontainer {
width: 100vw;
overflow-y: auto; 
box-sizing: border-box;
margin-top: 2em;
}

.body {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin: 0;
padding: 0;
overflow: hidden; 
}
}
</style>

