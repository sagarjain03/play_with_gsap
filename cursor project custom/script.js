var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var imagediv = document.querySelector(".image")
main.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease: "power1.out"
  })
})
imagediv.addEventListener("mouseenter",()=>{
  gsap.to(cursor,{
    scale:5,
    opacity:0.4,
    innerHTML:"Death<br/>incoming"
  })
})
imagediv.addEventListener("mouseleave",()=>{
  gsap.to(cursor,{
    scale:1,
    opacity:1,
    innerHTML:""
  })
})