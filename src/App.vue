<script setup>
import Navbar from '@/components/Navbar.vue'
import { useAuth0 } from "@auth0/auth0-vue"

// const { isLoading } = useAuth0();
</script>


<template>
  <div class="max-w-7xl mx-auto">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>




<style>
body {
  background-color: #000000;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  /* transition: all .3s ease; */
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
