<template>
    <span 
        v-for="(star, index) in stars" 
        :key="index" 
        class="fa fa-star color"
        :style="{fontSize: font + 'px'}"
    >
    </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: ['rarity', 'font'],
    data() {
        return {
            stars: this.rarity,
        }
    },

})
</script>

<style scoped>
.color {
  color: #5c00ff;
}


</style>