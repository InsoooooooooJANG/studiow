<template>
  <Header :activeClass="'room'"/>
  <div class="room">
    <span id="title">Guide</span>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    name:'Room',
    components:{
      Header
    }
  }
</script>
