<template>
      
       <div class="imgHoverEvent event7">
        <div class="imgBox"><img src="../../assets/working.gif" alt=""> </div>
            <div class="hoverBox">
                <span>
                <p class="p1">title</p>
                <p class="p2">내용내용내용내용</p>
                </span>
                </div>
                </div>
                
</template>
<style scoped>

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