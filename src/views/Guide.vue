<template>
  <div class="guide">
    <Header :activeClass="'guide'"/>
    <div class="guidline">
      test
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    name:'Guide',
    components:{
      Header
    }
  }
</script>
