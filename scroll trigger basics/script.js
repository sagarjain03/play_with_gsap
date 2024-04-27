gsap.to(".box1",{
  delay:1,
  duration:2,
  // scale:1.5,
  rotate:720
})
gsap.to(".box2",{
  delay:1,
  duration:2,
  // scale:1.5,
  rotate:720,
  scrollTrigger:{
    trigger:".page2 .box2",
    scroll:"body",
    start:"top center",
    end:"bottom center",
    scrub:5 ,//iska use tb hota h jb muje apne scroll k hisaab se animation control krni ho jaise neeche se upar jaane ya upar se neeche jaane dono mei animation chle. 1 se 5 k beech mei koi bhi number dedo ye smoothness bhi adjust kr dega uske according
    pin:true //isse scroll aage tb tk ni hoga jb tk animation khtm na ho jaaye

  }
})
gsap.to(".box3",{
  delay:1,
  duration:2,
  // scale:1.5,
  rotate:720
})