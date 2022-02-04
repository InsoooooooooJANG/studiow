<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" alt="logo"/>

    <div :class="topNavClass" id="myTopnav">
      <a href="/" :class="activeClass=='home'? 'active':''">Home</a>
      <a href="guide" :class="activeClass=='guide'? 'active':''">Guide</a>
      <a href="room" :class="activeClass=='room'? 'active':''">Room</a>
      <a href="portfolio" :class="activeClass=='portfolio'? 'active':''">Portfolio</a>
      <a href="schedule" :class="activeClass=='schedule'? 'active':''">Schedule</a>
      <a href="reservation" :class="activeClass=='reservation'? 'active':''">Reservation</a>
      <a href="javascript:void(0);" class="icon" @click="toggleMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      activeClass: {
        type:String,
        default:'home'
      }
    },
    data(){
      return{
        topNavClass: 'topnav'
      }
    },
    methods:{
      toggleMenu:function(){
        if(this.topNavClass == 'topnav'){
          this.topNavClass = 'topnav responsive';
        }else{
          this.topNavClass = 'topnav';
        }
      }
    }
  }
</script>

<style scoped>
.header{
  width:100%;
  height:15%;
}

.header:hover{
  background-color:white;
}

.logo{
  width:5rem;
  height:5rem;
  position:absolute;
  top:45px;
  left:70px; 
}

.topnav {
  background-color: transparent;
  overflow: hidden;
  padding-top:50px;
  float:right;
  margin-right:5%;
  font-weight: bold;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 32px;
  margin : 0 30px;
  text-decoration: none;
  font-size: 18px;
}

/* Change the color of links on hover */
.topnav a:hover {
  border-bottom: 2px solid rgb(58, 54, 54);
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  border-bottom: 2px solid black;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .header:hover{
    background-color:transparent;
  }
  .topnav a {display: none;}
  .topnav a.icon {
    border-bottom: 0 none ;
    float: right;
    margin-right:0px;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {padding-top:50px;position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 50px;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>