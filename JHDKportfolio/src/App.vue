
<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
// import CustomNavbar from './components/CustomNavbar.vue';
import CustomFooter from './components/CustomFooter.vue';
</script>


 <template class="overflow-y-auto">
   <header>
      <div class="wrapper">
      <!-- Insert header components here, ROUTER LINKS are in /components/CustomNavBar.vue -->
        <MainHeader/>
        <!-- <CustomNavbar  /> -->
      </div>
    </header>
      <div class="body">
        <RouterView />
        <CustomFooter/>
      </div>
    <!-- <div class="footer">
        <CustomFooter/>
    </div> -->
</template> 



<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
  }
}


</style>
