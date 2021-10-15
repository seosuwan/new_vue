<template>
        <div class="scroll-downs">
            ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
        <div class="mousey">
            ㅁㅇㄹㅁㄴㅇㄹㅇㄹ
            <div class="scroller"></div>
            ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
        </div>
    </div>
</template>
<style scoped>
    .scroll-downs {
        position: absolute;
        top: 300px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        width: 34px;
        height: 55px;
    }
    
.mousey {
        width: 3px;
        padding: 7px 12px;
        height: 35px;
        border-radius: 25px;
        border: 2px solid #fff;
        box-sizing: content-box;
    }
    
.scroller {
        width: 3px;
        height: 8px;
        border-radius: 25%;
        background-color: #fff;
        animation-name: scroll;
        animation-duration: 2.2s;
        animation-timing-function: cubic-bezier(.15, .41, .69, .94);
        animation-iteration-count: infinite;
    }
    
@keyframes scroll {
        
        0% {
            opacity: 0;
        }
        
        10% {
            transform: translateY(0);
            opacity: 1;
        }
        
        100% {
            transform: translateY(15px);
            opacity:0;
        }
}
@keyframes downup {
            
            0% {
                opacity: 0;
                transform: translateY(0, 100px);
            }
            
            100% {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
        
        @keyframes bounce {
            
            from,
            to {
                margin-bottom: 0;
                animation-timing-function: ease-out;
            }
            
            50% {
                margin-bottom: 8px;
                animation-timing-function: ease-in;
            }
        }
</style>