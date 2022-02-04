<template>
  <Header :activeClass="'schedule'"/>
  <div class="schedule">
    <span id="title">Guide</span>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    name:'Schedule',
    components:{
      Header
    }
  }
</script>
