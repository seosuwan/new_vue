<template>
<main>
  <div class="content">
    <h1>Scroll Wobble</h1>
    <svg class="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 1000" width="500" height="1000" preserveAspectRatio="none">
      <path class="wobble" d="M0 0 C 250 0, 500 0, 500 0 C 500 250, 500 500, 500 500 C 250 500, 0 500, 0 500 C 0 250, 0 500, 0 0 Z" fill="#6141A3" />
    </svg>
  </div>
</main>    
</template>

<script>

  import { Elastic } from "gsap";
export default {
    data(){
        var main = document.getElementsByTagName('main')[0],
    wobbles = document.getElementsByClassName('wobble'),
    curve = 500;

function setWobble(){
  for (var x = 0; x < wobbles.length; x++){
    wobbles[x].setAttribute('d', 'M0 0 C 250 0, 500 0, 500 0 C 500 250, 500 500, 500 500 C 250 ' + curve + ', 0 500, 0 500 C 0 250, 0 500, 0 0 Z');
  }
  requestAnimationFrame(setWobble);
}

setWobble();

main.addEventListener('scroll', trackScroll);

var scrollSpeed,
    curveAmount;

function trackScroll(){
  scrollSpeed = checkScrollSpeed();
  curveAmount = 500 + scrollSpeed*2;
  
  if (curveAmount > 500){
    curveAmount = Math.min(curveAmount, 750);
  } else {
    curveAmount = Math.max(curveAmount, 250);
  }
  
  (window, 2.2, {ease: Elastic.easeOut.config(1, 0.3), curve: curveAmount});
  
  if(scrollSpeed != 0){
    requestAnimationFrame(trackScroll);
  }
}

var lastPos,
    newPos,
    timer,
    delta, 
    delay = 100;

var checkScrollSpeed = (function(){
  
    function clear() {
      lastPos = null;
      delta = 0;
    }
  
    clear();
    
    return function(){
      newPos = main.scrollTop;
      
      if ( lastPos != null ){
        delta = newPos -  lastPos;
      }
      
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      
      return delta;
    };
})}}
</script>
<style lang="scss" scoped>

// @import "@/style/_variables.scss";
// @import "@/styles/_mixins.scss";
// @import "@/styles/_functions.scss";

body {
  background-color: #EE534F;
  font-family: 'Pacifico', cursive;
  overflow: hidden;
}

h1{
  color: #FEFEFE;
  font-size: 50px;
  left: 50%;
  margin: 0;
  pointer-events: none;
  position: fixed;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  white-space: nowrap;
  
  @media (max-width: 600px){
    font-size: 10vmin;
  }
}

main {
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  top: 0;
}

.content {
  height: 180%;
  width: 100%;
}

.bg{
  height: 100%;
  width: 100%;
}
</style>
