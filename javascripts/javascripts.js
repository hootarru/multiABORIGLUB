document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.style.display = "flex";
    window.addEventListener("load", () => {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });
  }
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
    if (button && screens[index] && screens[index + 1]) {
      button.addEventListener("click", () => {
        playSound();
        screens[index].classList.add("none");
        screens[index + 1].classList.remove("none");
      });
    }
  });

  buttons.obratno.forEach((button, index) => {
    if (button && screens[index + 1] && screens[index]) {
      button.addEventListener("click", () => {
        playSound();
        screens[index + 1].classList.add("none");
        screens[index].classList.remove("none");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // контейнеры
  const frogContainer = document.getElementById("frog-container");
  const replicaContainer = document.getElementById("replica-container");

  // лягушки + девчонка
  const frogRed1 = document.querySelector(".frog_red1");
  const frog3 = document.getElementById("frog3");
  const girlElement = document.getElementById("girl-box");
  const frogyElement = document.getElementById("frogy");

  // реплики
  const replicaElement = document.getElementById("replica-box");
  const mindElement = document.getElementById("slova2_1");
  const wordElement = document.getElementById("slova2_2");

  // анимация с перчатками
  const perch = document.querySelector(".perch");
  const girl4 = document.querySelector(".girl4");
  const girl4_th = document.querySelector(".girl4_th");

  // ДОП ЭЛЕМЕНТЫ = АЛЕРТ
  const bezElement = document.getElementById("bez");

  // ДЕТАЛИ ПОСЛЕДНЕГО ЭКРАНА
  const cvetok = document.querySelector(".cvetok");
  const cvetok2 = document.querySelector(".cvetok2");
  const decor1 = document.querySelector(".decor1");
  const decor2 = document.querySelector(".decor2");
  const frogLasty = document.querySelector(".frog_lasty");
  const zhem = document.querySelector(".zhem");
  const zhem2 = document.querySelector(".zhem2");
  const vot = document.querySelector(".vot");

  // слова для циклического показа
  const words = ["word1", "word2", "word3", "word4", "word5"];

  // обработчик клика на лягушку (FROG-CONTAINER : появление реплики)!!!
  frogContainer.addEventListener("click", () => {
    if (replicaContainer.classList.contains("hidden")) {
      replicaContainer.classList.remove("hidden");
    } else {
      replicaContainer.classList.add("hidden");
    }

    // анимация исчезновения ПЕРВОЙ ЛЯГУШКИ!!!
    frogRed1.style.opacity = "0";
    setTimeout(() => {
      frogContainer.classList.add("hidden");
      frogRed1.classList.add("hidden");
    }, 400);

    // показ ЛЯГУШКА С СИГАРЕТОЙ!!!
    setTimeout(() => {
      frog3.classList.remove("hidden");
      frog3.style.opacity = "1";
    }, 500);
  });

  // обработчик клика на девочку (GIRL-BOX)!!!
  girlElement.addEventListener("click", () => {
    if (replicaElement.classList.contains("hidden")) {
      replicaElement.classList.remove("hidden");
      setTimeout(() => {
        replicaElement.classList.add("visible");
      }, 10);
    }
  });
  // обработчик клика на лягушку (EKRAN2 : реплика с паузой)!!!
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

  // получение элементов : ЗУБЫ & СИГАРЕТА!!!
  const left1 = document.getElementById("left");
  const left2 = document.getElementById("left2");
  const left3 = document.getElementById("left3");
  const left4 = document.getElementById("left4");
  const ciga1 = document.getElementById("ciga");
  const ciga2 = document.getElementById("ciga2");
  const ciga3 = document.getElementById("ciga3");
  const ciga4 = document.getElementById("ciga4");
  const ciga5 = document.getElementById("ciga5");
  const finalImage = document.getElementById("ura");

  // массив элементов для удаления : ЗУБЫ & СИГАРЕТА
  const elementsToRemove = [left1, left2, left3, left4, ciga1];

  // массив элементов для удаления : ЗУБЫ & СИГАРЕТА = мобилка
  const elementsToRemoveMobile = [ciga2, ciga3, ciga4, ciga5];

  // анимация зубы и сигара
  function allElementsRemoved(elements) {
    return elements.every((element) => !document.body.contains(element));
  }
  function playSound(soundPath, volume = 1) {
    const sound = new Audio(soundPath);
    sound.volume = volume;

    sound.play().catch((error) => {
      console.error("ошибка воспроизведения звука:", error);
    });
  }

  function addClickHandler(element, elementsToRemove, finalCallback) {
    if (!element) {
      console.warn("элемент не найден.");
      return;
    }

    // обработ. клика - зубы
    element.addEventListener("click", () => {
      playSound("sounds/zub.mp3");
      element.classList.add("hidden");
      setTimeout(() => {
        element.remove();
        if (allElementsRemoved(elementsToRemove)) {
          finalCallback();
        }
      }, 500);
    });
  }

  // --> показ "блевоты"
  function showFinalImage() {
    if (!finalImage) {
      console.error(
        "финальное изображение не найдено (ошибка рвотного рефлекса)!"
      );
      return;
    }

    console.log("показ финального изображения");
    finalImage.classList.remove("hidden");

    setTimeout(() => {
      alert("О-нNnNNNNNNNNEEет, rvotniy reflex!!!");
      finalImage.classList.add("visible");
    }, 1);
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    // для десктопа
    elementsToRemove.forEach((element) => {
      if (element) {
        addClickHandler(element, elementsToRemove, showFinalImage);
      }
    });
  } else {
    // для малого экрана (айпад)
    elementsToRemoveMobile.forEach((element) => {
      if (element) {
        addClickHandler(element, elementsToRemoveMobile, showFinalImage);
      }
    });
  }
  const clothess = new Audio("sounds/clothes.mp3");
  clothess.volume = 0.25;
  // клон перчаток
  let clone;
  let isDragging = false;

  // перемещение клонированных перчаток
  function moveClone(event) {
    if (clone) {
      const rect = perch.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      clone.style.left = `${event.clientX - offsetX}px`;
      clone.style.top = `${event.clientY - offsetY}px`;
    }
  }

  // перетаскивание перчаток
  perch.addEventListener("dragstart", (event) => {
    console.log("перетаскивание перчаток : начало");
    isDragging = true;
    event.dataTransfer.setData("text/plain", "perch");

    perch.classList.add("dragging");
    perch.style.cursor = "grabbing";

    // клонирование --> "перчатки к девочонке"
    clone = perch.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.pointerEvents = "none";
    clone.style.opacity = "0.7";
    clone.style.zIndex = "1000";
    document.body.appendChild(clone);

    document.addEventListener("mousemove", moveClone);
  });

  //  завершение перетаскивания
  perch.addEventListener("dragend", () => {
    console.log("Drag перетаскивание перчаток : окончание");
    isDragging = false;

    perch.classList.remove("dragging");
    perch.style.cursor = "grab";

    if (clone) {
      document.body.removeChild(clone);
      clone = null;
    }

    document.removeEventListener("mousemove", moveClone);
  });

  // --> (girl4)
  girl4.addEventListener("dragover", (event) => {
    event.preventDefault();
    girl4.classList.add("highlight");
  });

  girl4.addEventListener("dragleave", () => {
    girl4.classList.remove("highlight");
  });

  girl4.addEventListener("drop", () => {
    console.log("перетаскивание перчаток : перчатки у девчонки");
    if (isDragging) {
      //  girl4 --> girl4_th
      girl4.style.display = "none";
      girl4_th.style.display = "block";
      perch.style.display = "none";
      girl4.classList.remove("highlight");

      clothess.play().catch((error) => {
        console.error("ошибка воспроизведения аудио:", error);
      });
    }
  });

  // перемешивание массива : рандомные слова жабы
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // показ и скрытик элементов : рандомные слова жабы
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

  // "обработчик клика для bezElement"
  bezElement.addEventListener("click", () => {
    alert(
      "p.s. KRASNЫЕ перчатки помогают людишкам скрыть человечьи отпечатки от диджитал устройств абориглаба. так аборигены не поймут, что здесь был ЧЕЛОВЕК!---------------------->[перетащи перчатки героине]"
    );
  });
  const sound = new Audio("sounds/another4.mp3");
  sound.volume = 0.15;

  const backgroundMusic = new Audio("sounds/backgroundmusic.mp3");
  backgroundMusic.volume = 0.2;
  backgroundMusic.loop = true;
  let isBackgroundMusicPlaying = false;

  // ОБРАБОТЧИК КЛИКА ДЛЯ OPA =кнопка1
  const opa = document.getElementById("opa");
  opa.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();

    // абориг. музыка
    if (!isBackgroundMusicPlaying) {
      backgroundMusic.play();
      isBackgroundMusicPlaying = true;
    } else {
      backgroundMusic.pause();
      isBackgroundMusicPlaying = false;
    }
    // "дискотека"
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

  // ОБРАБОТЧИК КЛИКА ДЛЯ OPA2 =кнопка2

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

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      opa.classList.add("hidden-mobile");
      opa2.classList.add("hidden-mobile");
      final.classList.add("scaled");
      final2.classList.add("scaled");
    } else {
      final.classList.add("scaled");
      final2.classList.add("scaled");
      opa.classList.add("moved-down");
      opa2.classList.add("moved-down");
    }

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

  // ОБРАБОТЧИК КЛИКА ДЛЯ PIPKA ==кнопка3
  const pipkaElement = document.querySelector(".pipka");
  const usElement = document.querySelector(".us");
  let isDraggingUs = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  pipkaElement.addEventListener("click", () => {
    const sound = new Audio("sounds/another4.mp3");
    sound.volume = 0.3;

    sound.currentTime = 0;
    sound.play();

    // -> показ: кураторы .us
    if (usElement.classList.contains("hidden")) {
      usElement.classList.remove("hidden");
      setTimeout(() => {
        usElement.classList.add("visible");
      }, 10);
    }
  });

  // ОБРАБОТЧИК ДЛЯ ПЕРЕТАСКИВАНИЯ ЭЛЕМЕНТА .us
  usElement.addEventListener("mousedown", (e) => {
    isDraggingUs = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseFloat(window.getComputedStyle(usElement).left);
    startTop = parseFloat(window.getComputedStyle(usElement).top);
    usElement.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDraggingUs) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      usElement.style.left = `${startLeft + deltaX}px`;
      usElement.style.top = `${startTop + deltaY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDraggingUs) {
      isDraggingUs = false;
      usElement.style.cursor = "grab";
    }
  });
});
