<template>
<section id="scroll1" class="demo">
  <a href="#scroll2"><span></span>내리슈</a>
</section>
</template>

<script>
  export default {
      data(){
      (function() {
        ('a[href*=#]').on('click', function(e) {
            e.preventDefault();
        ('html, body').animate({ scrollTop: ((this).attr('href')).offset().top}, 500, 'linear');});});}
      }
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);

section {
  position: relative;
  width: 100%;
  height: 30%;
}
.demo a {
  position: absolute;
  left: 40%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}
.demo a:hover {
  opacity: .5;
}
#scroll1 a {
  padding-top: 70px;
}
#scroll1 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: scro 1.5s infinite;
  animation: scro 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes scro {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes scro {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>