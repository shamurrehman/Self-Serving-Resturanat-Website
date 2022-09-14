let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};

let login = document.querySelector(".login");
document.querySelector("#login").onclick = () => {
  login.classList.toggle("action");
};

document.querySelector("#close").onclick = () => {
  login.classList.remove("action");
};

document.getElementById("tag").onclick = () => {
  alert("In Progress");
};

document.getElementById("tag1").onclick = () => {
  alert("In Progress");
};
document.getElementById("tag2").onclick = () => {
  alert("In Progress");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};

document.querySelectorAll(".small-image-1").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-1").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-2").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-2").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-3").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-3").src = images.getAttribute("src");
  };
});

let countDate = new Date("jan 1, 2023 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);

var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

function incrementValue() {
  var value = parseInt(document.getElementById("counter").value, 0);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("counter").innerText = value;
}

// let count = 0;

// const counter = document.getElementById("counter");
// document.getElementById("add-animation").addEventListener("click", (event) => {
//   const cl = counter.classList;
//   const c = "animated-counter";
//   count++;

//   counter.innerHTML = count;
//   cl.remove(c, cl.contains(c));
//   setTimeout(() => counter.classList.add("animated-counter"), 1);
// });
