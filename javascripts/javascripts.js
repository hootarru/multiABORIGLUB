// // console.log("privet");
document.addEventListener("DOMContentLoaded", () => {
  navigation();
});

// function navigation() {
//   let screen1 = document.querySelector(".EKRAN1");
//   let screen2 = document.querySelector(".EKRAN2");
//   let screen3 = document.querySelector(".EKRAN3");
//   let screen4 = document.querySelector(".EKRAN4");
//   let screen5 = document.querySelector(".EKRAN5");

//   let dalee1to2 = document.querySelector(".EKRAN1 .dalee");
//   let obratno2to1 = document.querySelector(".EKRAN2 .obratno");
//   let dalee2to3 = document.querySelector(".EKRAN2 .dalee");
//   let obratno3to2 = document.querySelector(".EKRAN3 .obratno");
//   let dalee3to4 = document.querySelector(".EKRAN3 .dalee");
//   let obratno4to3 = document.querySelector(".EKRAN4 .obratno");
//   let dalee4to5 = document.querySelector(".EKRAN4 .dalee");
//   let obratno5to4 = document.querySelector(".EKRAN5 .obratno");

//   dalee1to2.addEventListener("click", () => {
//     screen1.classList.add("none");
//     screen2.classList.remove("none");
//   });
//   obratno2to1.addEventListener("click", () => {
//     screen1.classList.remove("none");
//     screen2.classList.add("none");
//   });
//   dalee2to3.addEventListener("click", () => {
//     screen2.classList.add("none");
//     screen3.classList.remove("none");
//   });
//   obratno3to2.addEventListener("click", () => {
//     screen3.classList.add("none");
//     screen2.classList.remove("none");
//   });
//   dalee3to4.addEventListener("click", () => {
//     screen3.classList.add("none");
//     screen4.classList.remove("none");
//   });
//   obratno4to3.addEventListener("click", () => {
//     screen4.classList.add("none");
//     screen3.classList.remove("none");
//   });
//   dalee4to5.addEventListener("click", () => {
//     screen4.classList.add("none");
//     screen5.classList.remove("none");
//   });
//   obratno5to4.addEventListener("click", () => {
//     screen5.classList.add("none");
//     screen4.classList.remove("none");
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  // Находим все необходимые элементы
  const frogContainer = document.getElementById("frog-container");
  const replicaContainer = document.getElementById("replica-container");
  const frogRed1 = document.querySelector(".frog_red1");
  const frog3 = document.getElementById("frog3");
  const girlElement = document.getElementById("girl-box");
  const replicaElement = document.getElementById("replica-box");
  const frogyElement = document.getElementById("frogy");
  const mindElement = document.getElementById("slova2_1");
  const wordElement = document.getElementById("slova2_2");

  const left1 = document.getElementById("left");
  const left2 = document.getElementById("left2");
  const left3 = document.getElementById("left3");
  const left4 = document.getElementById("left4");
  const ciga1 = document.getElementById("ciga");

  // Массив элементов для удаления
  const elementsToRemove = [left1, left2, left3, left4, ciga1];

  const finalImage = document.getElementById("ura");

  // Обработчик клика на лягушку (frog-container)
  frogContainer.addEventListener("click", () => {
    // Переключение видимости реплики
    if (replicaContainer.classList.contains("hidden")) {
      replicaContainer.classList.remove("hidden");
    } else {
      replicaContainer.classList.add("hidden");
    }

    // Анимация исчезновения первой лягушки
    frogRed1.style.opacity = "0";
    setTimeout(() => {
      frogContainer.classList.add("hidden");
      frogRed1.classList.add("hidden");
    }, 400);

    // Показ лягушки с сигаретой
    setTimeout(() => {
      frog3.classList.remove("hidden");
      frog3.style.opacity = "1";
    }, 500);
  });

  // Обработчик клика на девочку (girl-box)
  girlElement.addEventListener("click", () => {
    if (replicaElement.classList.contains("hidden")) {
      replicaElement.classList.remove("hidden");
      setTimeout(() => {
        replicaElement.classList.add("visible");
      }, 10);
    }
  });

  frogyElement.addEventListener("click", () => {
    mindElement.classList.toggle("hidden");
    setTimeout(() => {
      mindElement.classList.toggle("visible");
    }, 10);
    setTimeout(() => {
      wordElement.classList.remove("hidden");
      setTimeout(() => {
        wordElement.classList.add("visible");
      }, 10);
    }, 2300);
  });
  function addClickHandler(element) {
    element.addEventListener("click", () => {
      // Добавляем класс "hidden" для плавного исчезновения
      element.classList.add("hidden");

      // Удаляем элемент из DOM после завершения анимации
      setTimeout(() => {
        element.remove();

        // Проверяем, остались ли ещё элементы
        if (allElementsRemoved(elementsToRemove)) {
          showFinalImage();
        }
      }, 500); // Время соответствует длительности анимации (0.5s)
    });
  }

  // Проверка, удалены ли все элементы
  function allElementsRemoved(elements) {
    return elements.every((el) => !document.body.contains(el));
  }

  // Показываем финальное изображение
  function showFinalImage() {
    finalImage.classList.remove("hidden");
    setTimeout(() => {
      finalImage.classList.add("visible");
    }, 1); // Небольшая задержка для корректного применения анимации
  }

  // Добавляем обработчики клика для каждого элемента
  addClickHandler(left1);
  addClickHandler(left2);
  addClickHandler(left3);
  addClickHandler(left4);
  addClickHandler(ciga1);
});
