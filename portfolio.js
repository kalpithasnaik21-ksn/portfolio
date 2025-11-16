/* ---------------------------------------------------------
   SCROLL REVEAL ANIMATION
--------------------------------------------------------- */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add("revealed");
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => {
  el.style.animationPlayState = "paused";
  revealObserver.observe(el);
});


/* ---------------------------------------------------------
   MOBILE MENU TOGGLE
--------------------------------------------------------- */

const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.maxHeight = "0px";
  }
});


/* ---------------------------------------------------------
   THEME TOGGLE (Dark / Light)
--------------------------------------------------------- */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  themeBtn.textContent = 
    document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});


/* ---------------------------------------------------------
   CONTACT FORM (Demo)
--------------------------------------------------------- */

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successMsg.hidden = false;

  setTimeout(() => {
    successMsg.hidden = true;
    form.reset();
  }, 2000);
});


/* ---------------------------------------------------------
   CERTIFICATION CLICK HANDLER (OPEN IMAGE IN NEW TAB)
--------------------------------------------------------- */

document.querySelectorAll(".cert-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const file = btn.getAttribute("data-file");
    window.open(`certificates/${file}`, "_blank");
  });
});



/* ---------------------------------------------------------
   SMOOTH SCROLL FOR NAV LINKS
--------------------------------------------------------- */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });

    // close menu on mobile
    navLinks.classList.remove("open");
    navLinks.style.maxHeight = "0px";
  });
});


/* ---------------------------------------------------------
   NEON BUTTON HOVER FX
--------------------------------------------------------- */

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 20px #c77dff";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});
