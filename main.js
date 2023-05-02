const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");

let counter = 31;
const blurring = setInterval(blurBg, 30);

function blurBg() {
  counter--;

  if (counter <= 0) {
    clearInterval(blurring);
  }

  document.body.style.filter = `blur(${counter}px)`;
}

mobileNav.addEventListener("click", function () {
  primaryNav.toggleAttribute("data-visible");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    primaryNav.removeAttribute("data-visible");
  }

  const reveals = document.querySelectorAll(".reveal");
  slideIn(reveals);
});

function slideIn(reveals) {
  reveals.forEach((reveal, index) => {
    if (index === 1) {
      reveal.classList.add("reveal-right");
    }
    const windowHeight = window.innerHeight;
    const elementTop = reveals[index].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[index].classList.add("active");
    } else {
      reveals[index].classList.remove("active");
    }
  });
}

// letter animation on scroll

const title = document.querySelector(".letter-animate");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

title.addEventListener("mouseover", () => {
  let titleContent = title.textContent.split("");
  let counter = 0;
  const titleValue = title.dataset.value;
  let letterAnimation = setInterval(() => {
    counter += 1 / 3;
    titleContent = titleContent.map((letter, index) => {
      if (index < counter - 1) {
        return titleValue[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    });
    title.textContent = titleContent.join("");
    if (counter > titleValue.length) {
      clearInterval(letterAnimation);
      title.textContent = titleValue;
    }
  }, 30);
});
