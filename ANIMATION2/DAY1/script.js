// gsap.to(".box", {
//   x: 500,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
// yoyo:true,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   stagger: 1,
//   y: 30,
//   repeat: -1,
//   yoyo: true,
// });

// nav
var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.1,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
gsap.to(".img", {
  x: 300,
  duration: 2,
  delay: 1,
  rotate: 360,
  yoyo: true,
});
