<template>
  <Header :activeClass="'reservation'"/>
  <div class="reservation">
    <span id="title">Guide</span>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    name:'Reservation',
    components:{
      Header
    }
  }
</script>
