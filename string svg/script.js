// Define the initial and final path strings
let initialPath = "M 10 100 Q 500 100 1000 100";
let finalPath = "M 10 100 Q 500 100 1000 100";

// Select the interactive element
const string = document.querySelector(".string");

// Select the SVG path element
const svgPath = document.querySelector("svg path");

// Add mousemove event listener
string.addEventListener('mousemove', (event) => {
    // Update initialPath based on mouse coordinates
    initialPath = `M 10 100 Q ${event.clientX} ${event.clientY} 1000 100`;

    // Animate the SVG path to the updated initialPath using GSAP
    gsap.to(svgPath, {
        attr: { d: initialPath }, // Update the 'd' attribute of the SVG path
        duration: 0.3,
        ease: 'power3.out'
    });
});

// Add mouseleave event listener
string.addEventListener('mouseleave', () => {
    // Animate the SVG path back to the finalPath using GSAP
    gsap.to(svgPath, {
        attr: { d: finalPath }, // Update the 'd' attribute of the SVG path
        duration: 0.3,
        ease: 'elastic.out(1, 0.2)'
    });
});
