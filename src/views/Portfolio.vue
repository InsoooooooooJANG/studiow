<template>
  <Header :activeClass="'portfolio'"/>
  <div class="portfolio">
    <span id="title">Guide</span>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    name:'Portfolio',
    components:{
      Header
    }
  }
</script>
