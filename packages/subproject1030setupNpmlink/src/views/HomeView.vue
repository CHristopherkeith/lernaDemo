<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App 66"/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HelloWorld1 from '../components/HelloWorld.vue'; 
import AboutView from './AboutView.vue'; 

// export default defineComponent({
//   name: 'HomeView',
//   components: {
//     HelloWorld,
//   },
// });
</script>
