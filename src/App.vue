<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
</script>

<template>
    <Navbar />     
    <router-view />
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&display=swap);

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  position: relative;
}

body {
  font-family: "Palanquin", sans-serif;
  background: #edecf6!important;
  min-height: 100vh;
   transition:  all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

.btn {
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  background: #141a31;
  color: #fff;
  font-weight: 500;
  border: 0;
  border-radius: 5px;
  transition: all 0.1s ease-in;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
}

.btn:hover {
  background: #5c00ff!important;
}

.btn:focus {
  outline: none!important;
}


.btn-primary {
  background: #141a31!important;
}
.btn-secondary {
  background: #ffffff;
  color: #141a31;
}

.btn-secondary:hover {
  color: #fff;
}


</style>
