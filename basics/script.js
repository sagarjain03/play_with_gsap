//to ka mtlb h initial position se aage jao
// gsap.to(".box",{
//   x:1000,
//   duration:2,
//   delay:1,
 
// })    
//from the mtlb h final position se initial pr aao
// gsap.from(".box",{
//   x:1000,
//   duration:2,
//   delay:1,
//   stagger:1//stagger tb use krte h jb same type k element pr ek time interval k baad animation lgna ho 
 
// })    
//isme css ki saari property use kr skte h bs camel case mei krna pdega

//ye timeline tb use hota h jb different type k elements ho . ek tarah se multiple elements ka stagger ho
let tl = gsap.timeline();

tl.to("h4",{
  x:1000,
    duration:2,
    
})
tl.to("h2",{
  x:1000,
    duration:2,
    
})
tl.to("h1",{
  x:1000,
    duration:2,
    
})
