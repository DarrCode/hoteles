<template>
  <header>
		<div class="container">
			<nav class="navbar navbar-expand-lg hotels-navbar" id="ftco-navbar">
		    <div class="container">
		    	<a href="/" class="navbar-brand">Hoteles<span>.</span>com</a>
		    	
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="fa fa-bars"></span> Menu
		      </button>
		      <div class="collapse navbar-collapse " id="ftco-nav">
		        <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" exact-active-class="exact-active" class="nav-link me-4">Home</router-link>
              </li>
		        </ul>

            <Search v-if="!$route.params.id"/>
		      </div>
		    </div>
		  </nav>
    </div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/search.vue";

export default defineComponent({
  components: {
    Search,
  }
})
</script>

<style scoped>

header {
  padding: 4em 0; 
}

.hotels-navbar {
  background: #0f0f6d;
  z-index: 3;
  padding: 10px 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 20px -17px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 5px 20px -17px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 5px 20px -17px rgba(0, 0, 0, 0.34); 
}
  
@media (max-width: 991.98px) {
  .hotels-navbar {
    background: #000 !important;
    position: relative;
    top: 0;
    padding: 10px 15px; 
  } 
}

.navbar-brand {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700; 
  padding-left: 20px;
}

.navbar-brand span{
  color: #fc7fb2;
}

@media (max-width: 991.98px) {
  .hotels-navbar .navbar-nav {
    padding-bottom: 10px; 
  } 
}

.hotels-navbar .navbar-nav > .nav-item > .nav-link {
  font-size: 20px;
  padding: 1.2rem 20px;
  font-weight: 400;
  color: #fff;
  position: relative;
  opacity: 1 !important;
  will-change: transform;
  transition: transform 450ms;
}
    
@media (max-width: 991.98px) {
  .hotels-navbar .navbar-nav > .nav-item > .nav-link {
    pad: .5rem 0;
    color: rgba(255, 255, 255, 0.7); 
  }
  .hotels-navbar .navbar-nav > .nav-item > .nav-link:hover {
    color: #fff; 
  } 
}

.exact-active  {
  border-bottom: 2px solid #fc7fb2; 
  transition: transform 125ms;
    transform: translateY(-4px);
}

.hotels-navbar .navbar-toggler {
  border: none;
  color: rgba(255, 255, 255, 0.5) !important;
  cursor: pointer;
  padding-right: 0;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: .1em; 
}
.hotels-navbar .navbar-toggler:focus {
  outline: none !important; 
}
</style>

