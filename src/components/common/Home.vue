<template>
  <div style="position: relative; z-index: 2;">
  <body onload="setup()">
    <div class="main" >
      <div style="color: white; font-size: 40px; font-weight: 800; height: 90px; position: relative; z-index: 2;">
          PortFolio
      </div>
      <div style="color: black; font-size: 40px; font-weight: 800; height: 90px; position: relative; left: 5px;  top: -95px;z-index: 1;">
          PortFolio
      </div>
    <h1 id="watchme" style="font-size: 8em bold;">{{ homeTitle }}</h1>
     <div id="wrap">
        <div class="imgHoverEvent event1">
            <div class="imgBox"><img style="width: 600px; height: 300px;" src="../../assets/running.gif" alt=""> </div>
            <div class="hoverBox">
                <p class="p1">SEOSUWAN</p>
                <p class="p2">age: 29 어쩌고저쩌고 신상정보 어쩌고저쩌고</p>
            </div>
        </div>
        </div> 
    <p>저는 이걸 잘하고 저걸잘하고 요러코롬 저로코롬 여하튼 뭐든지 다 집어넣어보고....ㅎㅎ</p>
      <ul id="output"></ul>
    </div>
  </body>
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
  .box{
    max-width: 70em;
}
  .main{
    margin-left: 5em;
  }
  p, h1, img{
  animation-duration: 3s;
  animation-name: slidein;
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
 img{min-height: 100%; max-width: 200%; }
        .imgHoverEvent{width: 600px; height: 300px; margin: 30px; position: relative; overflow: hidden; display: inline-block;}
        .imgHoverEvent .imgBox{width: 600px; height: 300px; text-align: center; background:url(../../assets/working.gif) no-repeat 100% 100%; background-size: 100% 100%;}
        .imgHoverEvent .hoverBox{position: absolute; top:0; left: 0; width: 200px; height: 200px;}
        .hoverBox p.p1{text-align:center; font-size:30px;}
        .hoverBox p.p2{margin-top: 110px;}
        .event1 .hoverBox{ transform: translateY(60%); transition: 0.5s;}
        .event1:hover .hoverBox{transform: translateY(0);}


</style>