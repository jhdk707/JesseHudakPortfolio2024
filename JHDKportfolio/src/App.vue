
<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
// import CustomNavbar from './components/CustomNavbar.vue';
import CustomFooter from './components/CustomFooter.vue';
</script>


 <template class="overflow-y-auto">
      <div class="body">
        <div class="headercontainer">
        <MainHeader/>
        </div>
        <div class="viewcontainer">
        <RouterView />
        </div>
        <div class="footercontainer">
        <CustomFooter/>
        </div>
      </div>
</template> 



<style scoped>

.body {
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack child elements vertically */
  align-items: center; /* Center child elements horizontally */
  justify-content: center; /* Center child elements vertically */
  height: 90vh; /* Set full viewport height */
}

.viewcontainer {
  width: 90vw;
  margin-top: 10em;
  padding: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */
}

.headercontainer {
  position: fixed; /* Fix header at the top */
  top: 0; 
  width: 100vw; 
  z-index: 1000; /* Ensure header is above other content */
  background-color: #181818;
  padding-top: 1em;
}

.footercontainer {
  position: fixed; /* Fix footer at the bottom */
  bottom: 0; 
  width: 100vw; 
  z-index: 1000; /* Ensure footer is above other content */
}

</style>
