document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  // Показываем прелоадер при загрузке DOM
  preloader.style.display = "flex";

  // Скрываем прелоадер, когда вся страница загружена
  window.addEventListener("load", function () {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // Соответствует длительности анимации
  });
});

document.addEventListener("DOMContentLoaded", () => {
  navigation();
});

function navigation() {
  const sound = new Audio("sounds/another2.mp3");
  sound.volume = 0.4;

  const screens = [
    document.querySelector(".EKRAN1"),
    document.querySelector(".EKRAN2"),
    document.querySelector(".EKRAN3"),
    document.querySelector(".EKRAN4"),
    document.querySelector(".EKRAN5"),
  ];

  const buttons = {
    dalee: [
      document.querySelector(".EKRAN1 .dalee"),
      document.querySelector(".EKRAN2 .dalee"),
      document.querySelector(".EKRAN3 .dalee"),
      document.querySelector(".EKRAN4 .dalee"),
    ],
    obratno: [
      document.querySelector(".EKRAN2 .obratno"),
      document.querySelector(".EKRAN3 .obratno"),
      document.querySelector(".EKRAN4 .obratno"),
      document.querySelector(".EKRAN5 .obratno"),
    ],
  };

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }

  buttons.dalee.forEach((button, index) => {
    button.addEventListener("click", () => {
      playSound();
      screens[index].classList.add("none");
      screens[index + 1].classList.remove("none");
    });
  });

  buttons.obratno.forEach((button, index) => {
    button.addEventListener("click", () => {
      playSound();
      screens[index + 1].classList.add("none");
      screens[index].classList.remove("none");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
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

  const perch = document.querySelector(".perch");
  const girl4 = document.querySelector(".girl4");
  const girl4_th = document.querySelector(".girl4_th");

  // Массив элементов для удаления
  const elementsToRemove = [left1, left2, left3, left4, ciga1];
  // Финальное изображение
  const finalImage = document.getElementById("ura");

  const bezElement = document.getElementById("bez");
  // Массив классов слов

  const words = ["word1", "word2", "word3", "word4", "word5"];

  // ЦВЕТОК КРУЖИТСЯ
  const opa = document.getElementById("opa");
  const cvetok = document.querySelector(".cvetok");
  const cvetok2 = document.querySelector(".cvetok2");
  const decor1 = document.querySelector(".decor1");
  const decor2 = document.querySelector(".decor2");
  const frogLasty = document.querySelector(".frog_lasty");
  const zhem = document.querySelector(".zhem");
  const zhem2 = document.querySelector(".zhem2");
  const vot = document.querySelector(".vot");
  // const frogDance = document.querySelector(".frog_dance");

  // Создаем объект Audio для звука

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
      alert("О-нNnNNNNNNNNEEет, rvotniy reflex!!!");
      finalImage.classList.add("visible");
    }, 1); // Небольшая задержка для корректного применения анимации
  }

  // Добавляем обработчики клика для каждого элемента
  addClickHandler(left1);
  addClickHandler(left2);
  addClickHandler(left3);
  addClickHandler(left4);
  addClickHandler(ciga1);
  let isDragging = false;

  // Событие начала перетаскивания
  perch.addEventListener("dragstart", (event) => {
    isDragging = true;
    event.dataTransfer.setData("text/plain", "perch"); // Устанавливаем данные для перетаскивания
    perch.style.cursor = "grabbing"; // Меняем курсор
  });

  // Событие окончания перетаскивания
  perch.addEventListener("dragend", () => {
    isDragging = false;
    perch.classList.remove("dragging"); // Убираем класс
    perch.style.cursor = "grab"; // Возвращаем курсор
  });

  // Событие при входе в зону girl4
  girl4.addEventListener("dragover", (event) => {
    event.preventDefault(); // Разрешаем перетаскивание
    girl4.classList.add("highlight");
  });
  girl4.addEventListener("dragleave", () => {
    girl4.classList.remove("highlight"); // Убираем подсветку
  });
  // Событие при отпускании перетаскиваемого элемента
  girl4.addEventListener("drop", () => {
    if (isDragging) {
      // Заменяем girl4 на girl4_th
      girl4.style.display = "none";
      girl4_th.style.display = "block";
      perch.style.display = "none";
      girl4.classList.remove("highlight"); // Убираем подсветку
    }
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function showAndHideElements() {
    shuffleArray(words);

    words.forEach((wordClass, index) => {
      const element = document.querySelector(`.${wordClass}`);

      if (element) {
        setTimeout(() => {
          element.style.display = "block";
        }, index * 1000);

        setTimeout(() => {
          element.style.display = "none";
        }, (index + 1) * 1000);
      }
    });

    setTimeout(showAndHideElements, words.length * 1000);
  }
  showAndHideElements();
  bezElement.addEventListener("click", () => {
    alert(
      "p.s. KRASNЫЕ перчатки помогают людишкам скрыть человечьи отпечатки от диджитал устройств абориглаба. так аборигены не поймут, что здесь был ЧЕЛОВЕК!---------------------->[перетащи перчатки героине] "
    );
  });

  const sound = new Audio("sounds/another4.mp3");
  sound.volume = 0.15;

  const backgroundMusic = new Audio("sounds/backgroundmusic.mp3");
  backgroundMusic.volume = 0.2;
  backgroundMusic.loop = true;
  let isBackgroundMusicPlaying = false;
  opa.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    if (!isBackgroundMusicPlaying) {
      backgroundMusic.play();
      isBackgroundMusicPlaying = true;
    } else {
      backgroundMusic.pause();
      isBackgroundMusicPlaying = false;
    }
    const isAnimated = cvetok.classList.contains("animate-cvetok");
    if (isAnimated) {
      cvetok.classList.remove("animate-cvetok");
      cvetok2.classList.remove("animate-cvetok2");
      decor1.classList.remove("animate-decor");
      decor2.classList.remove("animate-decor");
      zhem.classList.remove("pulse-animation");
      zhem2.classList.remove("pulse-animation");
    } else {
      cvetok.classList.add("animate-cvetok");
      cvetok2.classList.add("animate-cvetok2");
      decor1.classList.add("animate-decor");
      decor2.classList.add("animate-decor");
      zhem.classList.add("pulse-animation");
      zhem2.classList.add("pulse-animation");
    }

    frogLasty.classList.toggle("dance-animation");

    vot.classList.remove("active");
  });

  document.getElementById("opa2").addEventListener("click", function () {
    const clickSound = new Audio("sounds/gamesound.mp3"); // Путь к файлу звука клика
    clickSound.volume = 0.4;
    clickSound.play();

    const frogLasty = document.querySelector(".frog_lasty");
    const final = document.querySelector(".final");
    const final2 = document.querySelector(".final2");
    const decorating = document.querySelector(".decorating");
    const detCont = document.querySelector(".det-cont");

    if (frogLasty) {
      frogLasty.remove();
      vot.classList.remove("active");
    }
    if (decorating) {
      decorating.remove();
    }
    if (detCont) {
      detCont.remove();
    }

    final.classList.add("scaled");
    final2.classList.add("scaled");
    opa.classList.add("moved-down");
    opa2.classList.add("moved-down");
  });
});
