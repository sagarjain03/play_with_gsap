function splitTheText() {
  const h1 = document.querySelector("h1");
  const textContent = h1.textContent;
  const splittedText = textContent.split(''); 
  let clutter = "";
  let halflength = Math.floor(textContent.length / 2);
  splittedText.forEach((char,idx) => {
    if(idx < halflength){
      clutter += `<span class='a'>${char}</span>`;
    }
    else{
      clutter += `<span class='b'>${char}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

splitTheText();

// Animation for the characters
gsap.from("h1 .a", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.8,
  stagger: 0.15 
});
gsap.from("h1 .b", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.8,
  stagger: -0.15 
});