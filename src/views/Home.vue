<template>
  <div class="home">
    <Header :navList="navList"/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data(){
    return{
      navList : ['test', 'test']
    }
  }
};
</script>

<style scoped>
.home{
  background-image: url('../assets/background.jpg');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>