document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".page2 h1", {
      x: -window.innerWidth, // Move left by the width of the viewport
      duration: 2,
      scrollTrigger: {
          trigger: ".page2", // Trigger animation when .page2 comes into view
          start: "top center", // Start animation when top of .page2 hits center of viewport
          end: "bottom center", // End animation when bottom of .page2 hits center of viewport
          scrub: true // Smoothly scrub through the animation
      }
  });
});
