<template>
       <div id="wrap">
        <div class="imgHoverEvent event1">
            <div class="imgBox"><img src="../../assets/images.png" alt=""> </div>
            <div class="hoverBox">
                <p class="p1">title</p>
                <p class="p2">내용내용내용내용</p>
            </div>
        </div>
        </div> 
       <div class="imgHoverEvent event7">
        <div class="imgBox"><img src="../../assets/cool.png" alt=""> </div>
            <div class="hoverBox">
                <span>
                <p class="p1">title</p>
                <p class="p2">내용내용내용내용</p>
                </span>
                </div>
                </div>
                
</template>
<style scoped>
 img{min-height: 100%; max-width: 100%; }
        .imgHoverEvent{width: 200px; height: 200px; margin: 30px; position: relative; overflow: hidden; display: inline-block;}
        .imgHoverEvent .imgBox{width: 200px; height: 200px; text-align: center; background:url(http://gahyun.wooga.kr/portfolio/triple/resources/img/city00.jpg) no-repeat 50% 50%; background-size: auto 100%;}
        .imgHoverEvent .hoverBox{position: absolute; top:0; left: 0; width: 200px; height: 200px;}
        .hoverBox p.p1{text-align:center; font-size:18px;}
        .hoverBox p.p2{margin-top: 40px;}
        .event1 .hoverBox{background: linear-gradient(to bottom, rgba(0,0,0,0) 5%,rgba(255,255,255,1) 90%); transform: translateY(60%); transition: 0.5s;}
        .event1:hover .hoverBox{transform: translateY(0);}
        .event7 .hoverBox span{display: block; border: 4px solid #ccc; position: absolute; top: 50%; transform: translateY(-50%); height: 30px; width: 80%; left: 10%;transition: 0.5s;}
        .event7 .hoverBox span p{ opacity: 0; }
        .event7:hover .hoverBox span{animation: event7Ani 0.8s linear 1; height: 150px;}
        .event7:hover .hoverBox span p{animation: event7Ani2 0.8s linear 1; opacity: 1;}

        @keyframes event7Ani{
            0%{height: 30px;}
            80%{height: 150px;}
            100%{height: 150px;;}
        }
        @keyframes event7Ani2{
            0%{opacity: 0;}
            80%{opacity: 0;}
            100%{opacity: 1;}
        }

      
</style>