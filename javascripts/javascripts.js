document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.display = "flex";
  window.addEventListener("load", function () {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
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

  // Обработчик клика на лягушку (frog-container)
  frogContainer.addEventListener("click", () => {
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

  // Функция для проверки, удалены ли все элементы
  function allElementsRemoved(elements) {
    return elements.every(
      (element) => document.body.contains(element) === false
    );
  }

  // Функция для показа финального изображения
  function showFinalImage() {
    console.log("Показываем финальное изображение");
    finalImage.classList.remove("hidden");
    setTimeout(() => {
      alert("О-нNnNNNNNNNNEEет, rvotniy reflex!!!");
      finalImage.classList.add("visible");
    }, 1);
  }

  // Добавляем обработчики кликов
  function addClickHandler(element) {
    element.addEventListener("click", () => {
      // Создаем экземпляр аудио для воспроизведения звука
      const sound = new Audio("sounds/zub.mp3");
      sound.volume = 1; // Устанавливаем громкость

      // Воспроизводим звук
      sound.play().catch((error) => {
        console.error("Ошибка воспроизведения звука:", error);
      });

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

  addClickHandler(left1);
  addClickHandler(left2);
  addClickHandler(left3);
  addClickHandler(left4);
  addClickHandler(ciga1);

  // Показываем финальное изображение
  function showFinalImage() {
    console.log("Показываем финальное изображение");
    finalImage.classList.remove("hidden");
    setTimeout(() => {
      alert("О-нNnNNNNNNNNEEет, rvotniy reflex!!!");
      finalImage.classList.add("visible");
    }, 1);
  }

  let clone; // Глобальная переменная для клона
  const clothess = new Audio("sounds/clothes.mp3");
  clothess.volume = 0.25;

  let isDragging = false;

  // Событие начала перетаскивания
  perch.addEventListener("dragstart", (event) => {
    console.log("Drag started");
    isDragging = true;
    event.dataTransfer.setData("text/plain", "perch");

    // Добавляем класс для изменения стиля
    perch.classList.add("dragging");
    perch.style.cursor = "grabbing";

    // Создаем клон элемента
    clone = perch.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.pointerEvents = "none"; // Отключаем взаимодействие
    clone.style.opacity = "0.7"; // Полупрозрачность
    clone.style.zIndex = "1000"; // Размещаем поверх других элементов
    document.body.appendChild(clone);

    // Обновляем позицию клона при движении мыши
    document.addEventListener("mousemove", moveClone);
  });

  // Событие окончания перетаскивания
  perch.addEventListener("dragend", () => {
    console.log("Drag ended");
    isDragging = false;

    // Удаляем класс для возврата к исходному стилю
    perch.classList.remove("dragging");
    perch.style.cursor = "grab";

    // Удаляем клон
    if (clone) {
      document.body.removeChild(clone);
      clone = null;
    }

    // Убираем обработчик движения мыши
    document.removeEventListener("mousemove", moveClone);
  });

  // Функция для перемещения клона
  function moveClone(event) {
    if (clone) {
      const rect = perch.getBoundingClientRect(); // Получаем размеры и позицию оригинального элемента
      const offsetX = event.clientX - rect.left; // Смещение по X
      const offsetY = event.clientY - rect.top; // Смещение по Y

      clone.style.left = `${event.clientX - offsetX}px`;
      clone.style.top = `${event.clientY - offsetY}px`;
    }
  }

  // Событие при входе в зону girl4
  girl4.addEventListener("dragover", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
    girl4.classList.add("highlight");
  });

  // Событие при выходе из зоны girl4
  girl4.addEventListener("dragleave", () => {
    girl4.classList.remove("highlight");
  });

  // Событие при "бросании" элемента
  girl4.addEventListener("drop", () => {
    console.log("Dropped on girl4");
    if (isDragging) {
      // Заменяем girl4 на girl4_th
      girl4.style.display = "none";
      girl4_th.style.display = "block";
      perch.style.display = "none";
      girl4.classList.remove("highlight");

      // Воспроизводим звук
      clothess.play().catch((error) => {
        console.error("Ошибка воспроизведения аудио:", error);
      });
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
    const clickSound = new Audio("sounds/gamesound.mp3");
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

    // Показываем элемент .error через 3 секунды
    setTimeout(() => {
      const errorElement = document.querySelector(".error");

      if (errorElement) {
        errorElement.classList.remove("hidden");
      }
    }, 1900);
    setTimeout(() => {
      const pipkaElement = document.querySelector(".pipka");
      if (pipkaElement) {
        pipkaElement.classList.remove("hidden");
      }
    }, 1900);
  });

  // ОБРАБОТЧИК КЛИКА ДЛЯ PIPKA
  const pipkaElement = document.querySelector(".pipka");
  const usElement = document.querySelector(".us");

  // Флаг для отслеживания состояния перетаскивания
  let isDraggingUs = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  pipkaElement.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    // Показываем элемент .us
    if (usElement.classList.contains("hidden")) {
      usElement.classList.remove("hidden");
      setTimeout(() => {
        usElement.classList.add("visible"); // Добавляем класс для анимации
      }, 10); // Небольшая задержка для корректного применения стилей
    }
  });

  // Начало перетаскивания
  usElement.addEventListener("mousedown", (e) => {
    isDraggingUs = true;
    startX = e.clientX; // Начальная позиция курсора по X
    startY = e.clientY; // Начальная позиция курсора по Y
    startLeft = parseFloat(window.getComputedStyle(usElement).left); // Текущая позиция элемента по X
    startTop = parseFloat(window.getComputedStyle(usElement).top); // Текущая позиция элемента по Y
    usElement.style.cursor = "grabbing"; // Меняем курсор на "захват"
  });

  // Движение мыши
  document.addEventListener("mousemove", (e) => {
    if (isDraggingUs) {
      const deltaX = e.clientX - startX; // Изменение позиции курсора по X
      const deltaY = e.clientY - startY; // Изменение позиции курсора по Y

      // Обновляем позицию элемента
      usElement.style.left = `${startLeft + deltaX}px`;
      usElement.style.top = `${startTop + deltaY}px`;
    }
  });

  // Окончание перетаскивания
  document.addEventListener("mouseup", () => {
    if (isDraggingUs) {
      isDraggingUs = false;
      usElement.style.cursor = "grab"; // Возвращаем курсор на "захват"
    }
  });
});
