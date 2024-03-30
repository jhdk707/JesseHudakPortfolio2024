
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
  height: 100vh; /* Set full viewport height */
}

.viewcontainer {
  width: 80vw;
}

.headercontainer {
  position: fixed; /* Fix header at the top */
  top: 0; /* Position at the top */
  width: 90vw; /* Occupy full width */
  z-index: 1000; /* Ensure header is above other content */
  background-color: #181818;
}

.footercontainer {
  position: fixed; /* Fix footer at the bottom */
  bottom: 0; /* Position at the bottom */
  width: 70vw; /* Occupy full width */
  z-index: 1000; /* Ensure footer is above other content */
}

</style>
