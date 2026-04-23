const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeSwitch.checked = true;
}

// Toggle theme on switch change
themeSwitch.addEventListener("change" , () => {
    if (themeSwitch.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme" , "light");
    }
});

(function() {
  const video = document.querySelector('.sdz-video');
  const content = document.querySelector('.sdz-content');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Parallax effect (video moves slower than scroll)
    if (video) {
      video.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;
    }

    // Fade out text as you scroll
    if (content) {
      const fadeStart = 0;
      const fadeEnd = 300;

      let opacity = 1 - (scrollY / fadeEnd);
      opacity = Math.max(opacity, 0);

      content.style.opacity = opacity;
      content.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
  });
})();