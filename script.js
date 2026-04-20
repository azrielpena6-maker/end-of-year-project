// GSAP setup
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Hero animations
gsap.from(".hero-content h1", {
  y: 80,
  opacity: 0,
  duration: 1.2
});

gsap.from(".hero-content p", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

gsap.from(".hero-content button", {
  y: 30,
  opacity: 0,
  delay: 0.6,
  duration: 1
});

// Parallax zoom
gsap.to(".hero-video", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Feature animations
gsap.from(".feature", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

// Card animations
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});