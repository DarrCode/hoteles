<template>
  <main >    
    <div class="cards-container " >      
      <cards-hotel></cards-hotel>       
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import cardsHotel from '@/components/cardsHotel.vue'


export default defineComponent({
  name: "home",
  components:{
    cardsHotel
  },
});
</script>

<style>

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
}


.cards-container {
  max-width: 1300px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media all and (max-width: 1024px) {
  main {
    padding: 14px;
  }
}
</style>