var tl = gsap.timeline()

tl.to("aside",{
  right:0,

})
tl.from("aside ul li",{
  x:150,
  duration:0.2,
  stagger:0.2,
  opacity:0
})

// tl.from("aside i",{
  
//   duration:0.1
// })
tl.pause();

var open = document.querySelector("nav i");
open.addEventListener('click',()=>{
  tl.play();
})

var close = document.querySelector("aside i");
close.addEventListener('click',()=>{
  tl.reverse();
})