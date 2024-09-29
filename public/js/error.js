let t1 = gsap.timeline();
let t2 = gsap.timeline();
let t3 = gsap.timeline();

t1.to(".cog1", {
  transformOrigin: "50% 50%",
  rotation: "+=360",
  repeat: -1,
  ease: "none", // Updated ease syntax
  duration: 8
});

t2.to(".cog2", {
  transformOrigin: "50% 50%",
  rotation: "-=360",
  repeat: -1,
  ease: "none", // Updated ease syntax
  duration: 8
});

t3.fromTo(".wrong-para", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1,
  repeat: -1, // Repeats indefinitely
  yoyo: true // Reverses the animation each time it repeats
});
