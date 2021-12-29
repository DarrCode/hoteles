<template>

    <div 
        v-for="(hotel, index) in hoteles" 
        :key="index" 
        class="card"
    >
        <div class="cardContent">
            <div class="cardImage">
                <img :src="hotel.image" :alt="hotel.name" width="100">
            </div>
            <div class="cardInfo">
                <h2 class="cardTitle">{{hotel.name}}</h2>
                <p class="cardText">{{hotel.description}}</p>
            </div>
        </div>
        <div class="userActions">
          <Rarity :font="20" :rarity="hotel.attributes.rarity"/>
          <br>
          <router-link class="btn btn-primary" :to="'/hotel/'+hotel.id">
            Detalles
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
          </router-link>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import Rarity from '@/components/rarity.vue'

export default defineComponent({
    name: "cardsHotel",
    computed: {
      ...mapGetters({
        hoteles: 'filteredHoteles'
      })
    },
    components:{
        Rarity
    }
});
</script>

<style>

svg {
  margin: 0 5px;
}

.card:hover {
  box-shadow: 0 4px 10px #00000030;
}
.cardImage {
  margin-right: 16px;
}

.cardContent {
  display: flex;
  padding: 30px;
}

.cardTitle {
  line-height: 1.2;
}

.cardText {
  line-height: 1.6;
  font-weight: normal;
  opacity: 1;
  transition: all 0.5s cubic-bezier(0.83, 0, 0.18, 0.78);
}

.userActions {
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.83, 0, 0.18, 0.78);
  position: absolute;
  bottom: 0;
}

.card:hover .cardText {
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.83, 0, 0.18, 0.78);
}

.card:hover .userActions {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  text-align: center;
  opacity: 1;
  transition: all 0.5s cubic-bezier(0.83, 0, 0.18, 0.78);
}
</style>