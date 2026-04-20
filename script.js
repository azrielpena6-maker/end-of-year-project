// Register plugin
gsap.registerPlugin(ScrollTrigger);

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// HERO ANIMATION (fade + slide up)
gsap.from(".hero-content h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-content button", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

// PARALLAX HERO EFFECT
gsap.to(".hero-video", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// FEATURES ANIMATION
gsap.utils.toArray(".feature").forEach((feature, i) => {
  gsap.from(feature, {
    scrollTrigger: {
      trigger: feature,
      start: "top 80%",
    },
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// CARDS STAGGER ANIMATION
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

// SLIDER ANIMATION
gsap.from(".slide", {
  scrollTrigger: {
    trigger: ".slider",
    start: "top 85%",
  },
  x: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8
});