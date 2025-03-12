// // console.log("privet");
document.addEventListener("DOMContentLoaded", () => {
  navigation();
});

function navigation() {
  let screen1 = document.querySelector(".hz");
  let screen2 = document.querySelector(".EKRAN2");
  let dalee1to2 = document.querySelector(".hz .dalee");
  let obratno2to1 = document.querySelector(".EKRAN2 .obratno");

  dalee1to2.addEventListener("click", () => {
    screen1.classList.add("none");
    screen2.classList.remove("none");
  });
  obratno2to1.addEventListener("click", () => {
    screen1.classList.remove("none");
    screen2.classList.add("none");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const frogContainer = document.getElementById("frog-container");
  const replicaContainer = document.getElementById("replica-container");
  const frogRed1 = document.querySelector(".frog_red1");
  const frog3 = document.getElementById("frog3");

  frogContainer.addEventListener("click", () => {
    if (replicaContainer.classList.contains("hidden")) {
      replicaContainer.classList.remove("hidden");
    } else {
      replicaContainer.classList.add("hidden");
    }
  });
  frogContainer.addEventListener("click", () => {
    frogRed1.style.opacity = "0";
    setTimeout(() => {
      frogContainer.classList.add("hidden");
      frogRed1.classList.add("hidden");
    }, 400);
    // показ лягушки с сигаретой
    setTimeout(() => {
      frog3.classList.remove("hidden");
      frog3.style.opacity = "1";
    }, 500);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const girlElement = document.getElementById("girl-box");
  const replicaElement = document.getElementById("replica-box");

  girlElement.addEventListener("click", () => {
    if (replicaElement.classList.contains("hidden")) {
      replicaElement.classList.remove("hidden");
      setTimeout(() => {
        replicaElement.classList.add("visible");
      }, 10);
      // } else {
      //   replicaElement.classList.remove("visible");
      //   setTimeout(() => {
      //     replicaElement.classList.add("hidden");
      //   });
    }
  });
});
