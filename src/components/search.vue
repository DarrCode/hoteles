<template>
    <form class="apiSearch"  @submit.prevent="myMethod">
        <div class="searchIcon">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg>
        </div>
        <input 
          v-model="search" 
          autocomplete="off"
          id="userInput" 
          placeholder="Consigue hoteles aqui"
        >
    </form>
</template>

<script>
  export default {
    computed: {
        search: {
          get(){
            return this.$store.state.filter.query
          },
          set(val){
            this.$store.commit('SET_QUERY', val)
          }
        }
    }
  }
</script>

<style scoped>
.apiSearch {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.searchIcon {
  position: absolute;
  top: 30%;
  left: 5%;
  color: #8e97b6;
}

#userInput {
  padding: 16px 16px 16px 65px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  border: 1px solid #dfe8ed;
  border-radius: 50px;
  line-height: 1.2;
  background: #ffffff;
  color: #141a31;
}

#userInput::placeholder {
  color: #8e97b6;
  font-weight: 400;
}

#userInput:focus {
  outline: none;
}
@media all and (max-width: 1024px) {
  .apiSearch {
    margin: 30px auto;
  }
  #userInput {
    font-size: 14px;
  }
  .searchIcon {
    top: 25%;
  }
}
</style>