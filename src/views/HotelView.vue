<template>
 
<div class="hotel-container">	
	<div class="product-details">		
	  <h1 class="text-center">{{ hotel.name }}</h1>
    <span class="hint-star star">
      <Rarity :font="30" :rarity="hotel.attributes.rarity"/>
    </span>
		<p class="information mt-4">Estas navidades disfruta en familia de este maravilloso hotel <b>"{{hotel.name}}"</b> de <b>{{hotel.attributes.rarity}}</b> estrellas. Cuenta con <b>{{hotel.attributes.rooms}}</b> habitaciones bastatante amplias y <b>{{hotel.attributes.staff}}</b> personas completamente capacitadas para su buena atencion.</p>
			 <button class="btn btn-primary">
            Calificar
          </button>
  </div>
	
  <div class="product-image">
    
    <img :src="hotel.image" :alt="hotel.name">
    <div class="info">
      <h2> Descripcion </h2>
      <ul>
        <li>
          <b>Habitaciones: </b>
          {{hotel.attributes.rooms}}
        </li>
        <li>
          <b>Personal: </b>
          {{hotel.attributes.staff}}
        </li>
        <li>
          <b>Estrellas: </b>
          <Rarity :font="20" :rarity="hotel.attributes.rarity"/>
        </li>
        
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

import DataService from "@/services/dataService";
import Hotel from "@/types/hotel";
import Rarity from '@/components/rarity.vue'

export default defineComponent({
    name: "Hotel",
    components: {
      Rarity
    },
    data() {
        return {
            hotel: [] as Hotel[],
        };
    },
    methods: {
        Hotel() {
            DataService.getHotel(this.$route.params.id)
            .then((res: any) => {
                this.hotel = res.data;                
            })
            .catch((e: Error) => {
                console.log(e);
            });
        }
    },
    created() {
        this.Hotel();
    }  
});
</script>

<style scoped>
.btn {
  margin: 0px;
}

.hotel-container{
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.90);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: 700px;	
}

.product-details {
	position: relative;
	text-align: center;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 55%;

}

.hotel-container .product-details h1{
	display: inline-block;
	position: relative;
	font-size: 30px;
	color: #344055;
	margin: 0;	
}

.hint-star {
	display: inline-block;
	width: 50%;
}


.hotel-container .product-details > p {
	text-align: center;
	font-size: 18px;
	color: #7d7d7d;
	
}


.product-image {
	transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 45%;
	display: inline-block;
}

.hotel-container img {width: 100%;height: 100%;}

.info {
    background: rgba(27, 26, 26, 0.9);
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: pointer;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    padding: 30px 0;
}

.info h2 {text-align: center}
.product-image:hover .info{transform: translateX(0);}

.info ul li{transition: 0.3s ease;}
.info ul li:hover{transform: translateX(50px) scale(1.3);}

.product-image:hover img {transition: all 0.3s ease-out;}
.product-image:hover img {transform: scale(1.2, 1.2);}

</style>