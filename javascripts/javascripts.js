document.addEventListener("DOMContentLoaded", () => {
  navigation();
});

function navigation() {
  // Загрузка звукового файла
  const sound = new Audio("sounds/knopsound.mp3"); // Укажите путь к вашему MP3 файлу

  let screen1 = document.querySelector(".EKRAN1");
  let screen2 = document.querySelector(".EKRAN2");
  let screen3 = document.querySelector(".EKRAN3");
  let screen4 = document.querySelector(".EKRAN4");
  let screen5 = document.querySelector(".EKRAN5");

  let dalee1to2 = document.querySelector(".EKRAN1 .dalee");
  let obratno2to1 = document.querySelector(".EKRAN2 .obratno");
  let dalee2to3 = document.querySelector(".EKRAN2 .dalee");
  let obratno3to2 = document.querySelector(".EKRAN3 .obratno");
  let dalee3to4 = document.querySelector(".EKRAN3 .dalee");
  let obratno4to3 = document.querySelector(".EKRAN4 .obratno");
  let dalee4to5 = document.querySelector(".EKRAN4 .dalee");
  let obratno5to4 = document.querySelector(".EKRAN5 .obratno");

  // Функция для воспроизведения звука
  function playSound() {
    sound.currentTime = 0; // Сбрасываем звук на начало
    sound.play(); // Воспроизводим звук
  }

  dalee1to2.addEventListener("click", () => {
    playSound();
    screen1.classList.add("none");
    screen2.classList.remove("none");
  });

  obratno2to1.addEventListener("click", () => {
    playSound();
    screen1.classList.remove("none");
    screen2.classList.add("none");
  });

  dalee2to3.addEventListener("click", () => {
    playSound();
    screen2.classList.add("none");
    screen3.classList.remove("none");
  });

  obratno3to2.addEventListener("click", () => {
    playSound();
    screen3.classList.add("none");
    screen2.classList.remove("none");
  });

  dalee3to4.addEventListener("click", () => {
    playSound();
    screen3.classList.add("none");
    screen4.classList.remove("none");
  });

  obratno4to3.addEventListener("click", () => {
    playSound();
    screen4.classList.add("none");
    screen3.classList.remove("none");
  });

  dalee4to5.addEventListener("click", () => {
    playSound();
    screen4.classList.add("none");
    screen5.classList.remove("none");
  });

  obratno5to4.addEventListener("click", () => {
    playSound();
    screen5.classList.add("none");
    screen4.classList.remove("none");
  });
}
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

  const perch = document.querySelector(".perch");
  const girl4 = document.querySelector(".girl4");
  const girl4_th = document.querySelector(".girl4_th");

  // Получаем количество строк и столбцов

  // Массив элементов для удаления
  const elementsToRemove = [left1, left2, left3, left4, ciga1];

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
  const frogDance = document.querySelector(".frog_dance");
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
  // Функция для появления и исчезновения элементов
  function showAndHideElements() {
    // Перемешиваем массив классов
    shuffleArray(words);

    // Итерация по перемешанному массиву
    words.forEach((wordClass, index) => {
      const element = document.querySelector(`.${wordClass}`);

      if (element) {
        // Показываем элемент через задержку
        setTimeout(() => {
          element.style.display = "block"; // Показываем элемент
        }, index * 1000); // Задержка для каждого элемента

        // Скрываем элемент через задержку
        setTimeout(() => {
          element.style.display = "none"; // Скрываем элемент
        }, (index + 1) * 1000); // Задержка для скрытия
      }
    });

    // Повторяем процесс через определённое время
    setTimeout(showAndHideElements, words.length * 1000);
  }
  showAndHideElements();
  bezElement.addEventListener("click", () => {
    alert(
      "p.s. KRASNЫЕ перчатки помогают людишкам скрыть человечьи отпечатки от диджитал устройств абориглаба. так аборигены не поймут, что здесь был ЧЕЛОВЕК!---------------------->[перетащи перчатки героине] "
    );
  });
  // opa.addEventListener("click", () => {
  //   if (cvetok.classList.contains("animate")) {
  //     cvetok.classList.remove("animate");
  //     cvetok2.classList.remove("animate");
  //   } else {
  //     cvetok.classList.add("animate");
  //     cvetok2.classList.add("animate");
  //   }
  // });
  opa.addEventListener("click", () => {
    // Переключаем анимации для всех элементов
    if (cvetok.classList.contains("animate-cvetok")) {
      // Если анимации уже запущены, останавливаем их
      cvetok.classList.remove("animate-cvetok");
      cvetok2.classList.remove("animate-cvetok2");
      decor1.classList.remove("animate-decor");
      decor2.classList.remove("animate-decor");
      // frogLasty.classList.remove("animate-frog");
      zhem.classList.remove("pulse-animation");
      zhem2.classList.remove("pulse-animation");
    } else {
      // Если анимации не запущены, запускаем их
      cvetok.classList.add("animate-cvetok");
      cvetok2.classList.add("animate-cvetok2");
      decor1.classList.add("animate-decor");
      decor2.classList.add("animate-decor");
      // frogLasty.classList.add("animate-frog");
      zhem.classList.add("pulse-animation");
      zhem2.classList.add("pulse-animation");
    }
    vot.classList.remove("active");
  });
  opa.addEventListener("click", () => {
    // Переключаем анимацию танца
    if (frogLasty.classList.contains("dance-animation")) {
      frogLasty.classList.remove("dance-animation"); // Останавливаем анимацию
    } else {
      frogLasty.classList.add("dance-animation"); // Запускаем анимацию
    }
  });
});
