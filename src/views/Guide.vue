<template>
  <Header :activeClass="'guide'"/>
  <div class="guide">
    <span id="title">Guide</span>
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

<style scoped>
.guide{
  text-align: center;
  margin-top:5%;
}

#title{
  font-size:2rem;
  font-weight: bold;
}
</style>