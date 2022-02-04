<template>
  <div class="home" :class="homeClassList[homeClassIndex]">
    <Header/>
    <div class="arrow">
      <div class="left" @click="showPrevBack()">&lt;</div>
      <div class="right" @click="showNextBack()">&gt;</div>
    </div>
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
      homeClassList: ['main', 'two', 'three'],
      homeClassIndex : 0
    }
  },
  methods:{
    showPrevBack: function(){
      console.log('prev');
      this.homeClassIndex--;

      if(this.homeClassIndex < 0){
        this.homeClassIndex = 2;
      }
    },
    showNextBack:function(){
      console.log('next');
      this.homeClassIndex++;
      console.log(this.homeClassIndex);

      if(this.homeClassIndex > 2){
        this.homeClassIndex = 0;
      } 
    }
  }
};
</script>

<style scoped>
.arrow{
  font-size:5rem;
  color:rgb(219, 219, 219);
  position: absolute;
  top: 50%;
  height: 5rem;
  width:100%;
  /*요소의 높이(100px)의 반 만큼 위로 이동*/
  margin-top: -5rem;
  cursor: pointer;
}

.left{
  float:left;
  color:transparent;
}

.left:hover{
  color:rgb(184, 184, 184);
}

.right{
  float:right;
  color:transparent;
}

.right:hover{
  color:rgb(184, 184, 184);
}

.home{
  position: relative;
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
}

.main{
  background-image: url('../assets/background.jpg');
}

.two{
  background-image: url('../assets/background2.jpeg');
}

.three{
  background-image: url('../assets/background3.jpeg');
}
</style>