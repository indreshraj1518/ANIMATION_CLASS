gsap.from("#page1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotation: 360,
});

gsap.from("#page2 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotation: 360,
  //   scrollTrigger: "#page2 .box",
  scrollTrigger: {
    trigger: "#page2 .box",
    scroll: "body",
    markers: true,
    start: "top 60%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from("#page2 h1", {
  x: 500,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
gsap.from("#page2 h2", {
  x: -500,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
