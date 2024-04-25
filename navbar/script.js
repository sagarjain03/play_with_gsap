let tl = gsap.timeline()

tl.from("h2",{
  opacity:0,
  y:10,
  duration:0.4,
  // delay:1
})
tl.from("h4",{
  opacity: 0,
  y:10,
  duration:0.4,
  // delay:1,
  stagger:1
})