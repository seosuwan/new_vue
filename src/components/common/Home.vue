<template>
<div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
</div>
  <div style="position: relative; z-index: 2;">
    <div>
    <div class="text-shadow-pop-br ">
      <div style="color: white; font-size: 60px;">
         
      </div>
    </div>
     <div id="wrap">
        <div class="imgHoverEvent event1">
            <div class="imgBox"><img style="width: 600px; height: 300px;" src="../../assets/running.gif" alt=""> </div>
            <div class="hoverBox">
                <p class="p1">SEOSUWAN</p>
                <p class="p2">age: 29 어쩌고저쩌고 신상정보 어쩌고저쩌고</p>
            </div>
        </div>
        </div> 
      <ul id="output"></ul>
    </div>

  </div>
</template>
    

<script>
 export default {
   data(){
     return{
       homeTitle: "PortFolio",
       name: "수와잉"
     }
     
     
   },
  name: 'Home',
  components:{

    
  }
  
}
</script>
<style scoped>

  p, h1, img{
  animation-duration: 3s;
  animation-name: slidein;
}
@keyframes shake-lr {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-8deg);
  }
  90% {
    transform: rotate(8deg);
  }
}
@keyframes text-shadow-pop-br {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 7px 7px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    transform: translateX(-20px) translateY(-20px);
  }
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
@keyframes text-flicker-in-glow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}

 img{min-height: 100%; max-width: 200%; }
.imgHoverEvent{width: 600px; height: 300px; margin: 30px; position: relative; overflow: hidden; display: inline-block;}
.imgHoverEvent .imgBox{width: 600px; height: 300px; text-align: center; background:url(../../assets/working.gif) no-repeat 100% 100%; background-size: 100% 100%;}
.imgHoverEvent .hoverBox{position: absolute; top:0; left: 0; width: 200px; height: 200px;}
.hoverBox p.p1{ font-size:30px;}
.hoverBox p.p2{margin-top: 110px;}
.event1 .hoverBox{ transform: translateY(60%); transition: 0.5s;}
.event1:hover .hoverBox{transform: translateY(0);}
.main{animation: shake-lr 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;}
.text-shadow-pop-br {animation: text-shadow-pop-br 0.3s both; text-align:center;}
.text-flicker-in-glow {animation: text-flicker-in-glow 4s linear both;}

</style>