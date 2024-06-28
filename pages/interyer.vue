<template>
  <section class="Popups">
    <div
      id="overlay"
      class="overlay"
      :class="{
        active: isOverlayActive,
      }"
      @click="toggleOverlayStatus(), closeZoomablePictures()"
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></div>
    <XmarkIcon
      class="CloseModalButton"
      :class="{
        active: isOverlayActive,
      }"
      @click="toggleOverlayStatus(), closeZoomablePictures()"
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></XmarkIcon>
    <div
      v-show="isZoomablePictureOpened"
      ref="zoomContainer"
      id="zoom-container"
      class="zoom-container"
      :aria-hidden="!isZoomablePictureOpened ? 'true' : 'false'"
    >
      <img
        alt="Zoomed interior view"
        ref="zoomContainer2"
        :src="openedImageSrc"
        class="InteriorZoomableBlock"
        :class="{ active: isZoomablePictureOpened }"
      />
    </div>
  </section>

  <header>
    <h1 class="InteriorTitle">
      ИНТЕРЬЕРЫ <span class="InteriorTitleSpan">KINKY STUDIO</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/interyer">Интерьер</nuxt-link>
    </nav>
  </header>

  <main>
    <section class="InteriorDescription">
      <p>
        Комнаты вебкам-моделей в студии обставляются дизайнерами и полностью
        звукоизолированы, чтобы обеспечить моделям комфортные условия работы. В
        отличие от стримов из дома, где в кадр могут попасть члены семьи или
        питомцы, в студии можно не переживать, что зрители увидят больше, чем им
        положено. Чистота, выдержанный стиль, подходящие друг к другу предметы
        обстановки и ничего лишнего за спиной модели — вот основные требования,
        которые предъявляются к вебкам-комнатам.
      </p>
    </section>
    <div class="SliderLine">
      <div class="InteriorSliderBlock">
        <ArrowCircleLeft
          class="InteriorArrowLeft pointer"
          id="ArrowLeftIconInterior"
          @click="moveCardInterior($event)"
        ></ArrowCircleLeft>
        <div
          :class="{
            carouselInterior: true,
            draggingInterior: draggingActiveInterior,
          }"
          ref="carouselInterior"
          @mousedown.prevent="dragStartInterior"
          @mouseup="dragStopInterior"
          @mousemove.prevent="draggingInterior"
          @mouseleave="dragStopInterior"
          @touchstart.prevent="dragStartInterior"
          @touchend="dragStopInterior"
          @touchmove.prevent="draggingInterior"
          @touchcancel="dragStopInterior"
        >
          <div class="InteriorSliderCard" ref="firstCardInterior">
            <img
              class="InteriorCardImg"
              src="../assets/images/Interior-1.webp"
            />
          </div>
          <div class="InteriorSliderCard">
            <img
              class="InteriorCardImg"
              src="../assets/images/Interior-2.webp"
            />
          </div>
          <div class="InteriorSliderCard">
            <img
              class="InteriorCardImg"
              src="../assets/images/Interior-3.webp"
            />
          </div>
          <div class="InteriorSliderCard">
            <img
              class="InteriorCardImg"
              src="../assets/images/Interior-4.webp"
            />
          </div>
          <div class="InteriorSliderCard">
            <img
              class="InteriorCardImg"
              src="../assets/images/Interior-5.webp"
            />
          </div>
        </div>
        <ArrowCircleRight
          class="InteriorArrowRight pointer"
          id="ArrowRightIconInterior"
          @click="moveCardInterior($event)"
        ></ArrowCircleRight>
      </div>
      <ScrollBarDistanceIndicatorDot
        v-for="dot in 5"
        :key="dot"
        class="ScrollDistanceIndicatorInterior"
        :class="{ scrollDotActive: dot === activeDotIndexInterior }"
        @click="scrollToDotInterior(dot)"
        ><div class="innerDot"></div
      ></ScrollBarDistanceIndicatorDot>
      <div class="InteriorMasonry">
        <img
          alt="First review card picture for mobile devices"
          src="~/assets/images/Interior-1.webp"
          class="InteriorPicture"
          @click="openZoomablePicture('../assets/images/Interior-1.webp')"
        />
        <img
          alt="Second review card picture for mobile devices"
          src="~/assets/images/Interior-2.webp"
          class="InteriorPicture"
          @click="openZoomablePicture('../assets/images/Interior-2.webp')"
        />
        <img
          alt="Third review card picture for mobile devices"
          src="~/assets/images/Interior-3.webp"
          class="InteriorPicture"
          @click="openZoomablePicture('../assets/images/Interior-3.webp')"
        />
        <img
          alt="Fourth review card picture for mobile devices"
          src="~/assets/images/Interior-4.webp"
          class="InteriorPicture"
          @click="openZoomablePicture('../assets/images/Interior-4.webp')"
        />
        <img
          alt="Fifth review card picture for mobile devices"
          src="~/assets/images/Interior-5.webp"
          class="InteriorPicture"
          @click="openZoomablePicture('../assets/images/Interior-5.webp')"
        />
      </div>
    </div>
    <section class="InteriorText">
      <h4
        class="InteriorTextPadding"
        :class="{
          collapsed: isAdditionalInfoBlockCollapsed,
        }"
      >
        <p class="InteriorTextTitle">Комнаты вебкам студии «KINKY STUDIO»</p>
        <p class="">
          В нашей студии у каждой из моделей есть собственная комната. Это
          значит, что, придя на смену, модель может рассчитывать на приватность,
          ей никто не будет мешать вести трансляцию.
        </p>
        <p class="">
          Интерьеры
          <span class="InteriorTextBold">комнат для вебкам-чатов</span>
          вы можете увидеть на этой странице сайта. Создавая их, мы
          придерживались сразу нескольких принципов:
        </p>
        <ul class="">
          <li>
            Лаконичный задний план. Он не должен отвлекать внимания от модели,
            но при этом и не должен быть слишком пустым — комната должна
            выглядеть так, чтобы можно было подумать, что модель в ней живет.
          </li>
          <div v-show="!isAdditionalInfoBlockCollapsed">
            <li>
              Гармоничное сочетание цветов. Самая яркая в трансляции —
              безусловно, модель. Но интерьер вебкам-комнаты не должен быть
              скучным, безликим, монотонным. Яркие детали добавляют в комнату
              жизни, делают ее уютнее.
            </li>
            <li>
              Качественная мебель.
              <span class="InteriorTextBold">Вебкам-интерьер </span>— это, в
              первую очередь, большая и красивая кровать, ведь модели гораздо
              комфортнее, если она может прилечь, а не только сидеть. В нашей
              студии вся мебель качественная, надежная и удобная.
            </li>
            <li>
              Оборудование вне кадра. Отличное качество картинки нельзя
              обеспечить без современного оборудования: камеры, света,
              компьютера. Мы размещаем его таким образом, чтобы оно не попадало
              в кадр, и у зрителей складывалось ощущение, что модель общается с
              ними из дома.
            </li>
          </div>
        </ul>
        <div v-show="!isAdditionalInfoBlockCollapsed">
          <p class="">
            В
            <span class="InteriorTextBold">комнате вебкам-чата</span>
            огромную роль играет освещение. Вы наверняка знаете, как
            неправильный свет может изменить внешность на фото или видео —
            слишком резкий свет выделяет на лице и теле малейшие несовершенства,
            а недостаток света и вовсе мешает рассмотреть картинку. Поэтому в
            нашей студии у моделей в комнатах установлен и настроен
            профессиональный свет — он помогает сгладить фактуру кожи,
            подчеркнуть блеск волос, сделать модель привлекательнее, чтобы на
            видео она нравилась не только зрителям, но и самой себе.
          </p>
          <p class="InteriorTextTitle">
            Вот что еще отмечают девушки, которые здесь работают:
          </p>
          <p class="">
            <span class="InteriorTextBold">Интерьер комнаты для вебкама</span> в
            нашей студии идеально подходят и для начинающих, и для опытных
            моделей. Здесь есть все необходимое для работы, в том числе реквизит
            и места для его удобного хранения.
          </p>
          <p class="">
            Если вы хотите, чтобы
            <span class="InteriorTextBold">вебкам-интерьер</span>
            помогал вам зарабатывать больше и при этом сохранял вашу
            анонимность, вести трансляции из дома нельзя. Мы приглашаем вас в
            нашу студию, где все модели получают высокий процент дохода и могут
            рассчитывать на лучшие условия работы.
          </p>
          <p class="">
            Заинтересованы в работе моделью? Оставьте немного информации о себе,
            заполнив нашу анкету. Или напишите в Телеграм по указанному на сайте
            номеру, мы сориентируем вас, подскажем, когда можно будет прийти на
            собеседование. Одновременно с этим вы сможете осмотреть комнаты, в
            которых работают модели, и выбрать для себя подходящий вариант.
          </p>
          <p class="InteriorTextTitle">Лучшие интерьеры вебкам студии в СПб</p>
          <p class="">
            Есть мнение, что модель может хорошо зарабатывать даже из дома. Да,
            это так, если у нее есть возможность выделить для работы отдельную
            комнату с хорошей звукоизоляцией и отличным ремонтом. Обшарпанные
            стены, старый диван и бабушкин сервант на фоне оттолкнут зрителя, а
            личные вещи в кадре могут стать причиной деанона, то есть раскрытия
            личности модели. Поэтому работа из дома подходит далеко не всем.
          </p>
          <p class="">
            <span class="InteriorTextBold">Интерьеры вебкам-студии </span>— то,
            что поможет вам продвинуться в качестве модели. Современные зрители
            очень избалованы обилием сайтов для взрослых с видеочатами, поэтому
            так важно вести трансляцию в эстетичной, стильной обстановке. Мы
            обеспечим вам самые комфортные условия, позаботимся о том, чтобы вы
            могли сосредоточиться на общении со зрителями, создадим красивую и
            привлекательную картинку в кадре.
          </p>
        </div>
        <ArrowCircleDown
          class="AdditionalInfoArrow pointer"
          :class="{
            ArrowDownIconRotateUp: !isAdditionalInfoBlockCollapsed,
            collapsed: !isAdditionalInfoBlockCollapsed,
          }"
          @click="toggleAdditionalInfoBlock()"
        ></ArrowCircleDown>
      </h4>
    </section>
  </main>

  <footer class="line-15">
    <FooterTopLine class="FooterTopLine" />
    <div class="FooterGrid">
      <button
        class="PrivacyPolicyLink font9 pointer"
        @click="goToPrivacyPolicy()"
      >
        Политика конфиденциальности
      </button>
      <ArrowCircleUp class="FooterGridArrowUp" @click="scrollToTop()" />
      <p class="Trademark font9">© kinky studio. 2019-2024 год.</p>
    </div>
  </footer>
  <hr class="FinalLine" />
</template>
<script setup>
import ArrowCircleDown from "@/assets/icons/ArrowCircleDown.vue";
import ArrowCircleUp from "@/assets/icons/ArrowCircleUp.vue";
import ArrowCircleLeft from "@/assets/icons/ArrowCircleLeft.vue";
import ArrowCircleRight from "@/assets/icons/ArrowCircleRight.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";
import ScrollBarDistanceIndicatorDot from "@/assets/icons/ScrollBarDistanceIndicatorDot.vue";
import XmarkIcon from "@/assets/icons/XmarkIcon.vue";

// Meta Tags Metadata
useHead({
  title: "Вебкам интерьер на студии «KINKY STUDIO» в Санкт Петербурге",
  meta: [
    {
      name: "description",
      content:
        "Вебкам интерьер на студии «KINKY STUDIO» в городе СПб. Реальные фото комнаты вебкам моделей для видео чатов, зайди и посмотри VIP интерьеры для работы",
    },
  ],
});

import {
  ref,
  computed,
  // watch,
  onMounted,
  onUnmounted,
} from "vue";

onMounted(() => {
  cloneElementsInfinitelyInterior();
  updateActiveDotIndexInterior();
});

// Misc methods start

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

function goToPrivacyPolicy() {
  window.open("/privacy-policy", "_blank", "noopener,noreferrer");
}

let isAdditionalInfoBlockCollapsed = ref(true);
function toggleAdditionalInfoBlock() {
  isAdditionalInfoBlockCollapsed.value = !isAdditionalInfoBlockCollapsed.value;
}

let isOverlayActive = ref(false);
function toggleOverlayStatus() {
  isOverlayActive.value = !isOverlayActive.value;
}

const isZoomablePictureOpened = ref(false);
const openedImageSrc = ref("");
function openZoomablePicture(src) {
  toggleOverlayStatus();
  isZoomablePictureOpened.value = true;
  openedImageSrc.value = src;
  document.body.style.overflow = "hidden";
}
function closeZoomablePictures() {
  isZoomablePictureOpened.value = false;
  openedImageSrc.value = "";
  document.body.style.overflow = "";
}

// Misc methods end

// Review Image Slider #2 start

const carouselInterior = ref();
const firstCardInterior = ref();

let imgWidthInterior = 1308;
// let imgWidthInterior = computed(() => {
// return window.innerWidth >= 1600 ? 1308 : 470;
// });
let prevDragFractionInterior = ref(0);
let draggingStartedInterior = ref(false);
let draggingActiveInterior = ref(false);
let prevPageXInterior = ref();
let prevScrollLeftInterior = ref();
let positionDiffInterior;

function draggingInterior(e) {
  if (!draggingStartedInterior.value) return;
  draggingActiveInterior.value = true;
  carouselInterior.value.classList;
  positionDiffInterior =
    (e.pageX || e.touches[0].pageX) - prevPageXInterior.value;
  carouselInterior.value.scrollLeft =
    prevScrollLeftInterior.value - positionDiffInterior;
}
function dragStartInterior(e) {
  draggingStartedInterior.value = true;
  prevPageXInterior.value = e.pageX || e.touches[0].pageX;
  prevScrollLeftInterior.value = carouselInterior.value.scrollLeft;
}
function dragStopInterior() {
  draggingStartedInterior.value = false;
  draggingActiveInterior.value = false;

  // if (!draggingActive.value) return;
  autoSlideInterior();
  updateActiveDotIndexInterior();
}
function dragHardStopInterior() {
  draggingStartedInterior.value = false;
  draggingActiveInterior.value = false;

  // if (!draggingActive.value) return;
  draggingActiveInterior.value = false;
  autoSlideInterior();
}

let isScrollingInterior = false;
function moveCardInterior(element) {
  if (isScrollingInterior) return;
  isScrollingInterior = true;

  const distanceToScrollToInterior = Math.ceil(
    carouselInterior.value.scrollLeft +
      (element.target.id == "ArrowLeftIconInterior"
        ? -imgWidthInterior
        : imgWidthInterior)
  );
  // console.log(distanceToScrollToInterior);
  carouselInterior.value.scrollTo({
    left: distanceToScrollToInterior,
    behavior: "smooth",
  });

  let scrollTimeoutInterior;
  function handleScrollEndInterior() {
    clearTimeout(scrollTimeoutInterior);
    scrollTimeoutInterior = setTimeout(() => {
      isScrollingInterior = false;
      carouselInterior.value.removeEventListener(
        "scroll",
        handleScrollEndInterior
      );
    }, 40);
  }
  carouselInterior.value.addEventListener("scroll", handleScrollEndInterior);

  updateActiveDotIndexInterior();
}

function autoSlideInterior() {
  let currentScrollInterior = carouselInterior.value.scrollLeft;
  let directionInterior = positionDiffInterior < 0 ? 1 : -1;
  let thresholdInterior = 0.3;

  // console.log(
  //   `Current Scroll: ${currentScroll}, Direction: ${direction}, PositionDiff: ${positionDiff}`
  // );

  let currentCardIndexInterior = Math.floor(
    currentScrollInterior / imgWidthInterior
  );
  let dragFractionInterior = Math.abs(positionDiffInterior) / imgWidthInterior;

  // console.log(dragFraction);

  // console.log(`Drag Fraction: ${dragFraction}, Threshold: ${threshold}`);

  let moveToNextCardInterior = currentCardIndexInterior;

  // console.log(currentCardIndex);

  // console.log("first:", moveToNextCard);

  if (dragFractionInterior == prevDragFractionInterior.value) return;
  prevDragFractionInterior.value = dragFractionInterior;
  if (dragFractionInterior > thresholdInterior && directionInterior > 0) {
    moveToNextCardInterior += directionInterior;
  } else if (
    dragFractionInterior > thresholdInterior &&
    directionInterior < 0
  ) {
    moveToNextCardInterior;
  } else if (
    dragFractionInterior < thresholdInterior &&
    directionInterior < 0
  ) {
    moveToNextCardInterior += 1;
  }

  // console.log("second:", moveToNextCard);

  moveToNextCardInterior = Math.max(
    0,
    Math.min(
      moveToNextCardInterior,
      Math.floor(carouselInterior.value.scrollWidth / imgWidthInterior) - 1
    )
  );

  // console.log("third  :", moveToNextCard);

  // console.log(direction, moveToNextCard, carousel.value.scrollWidth, imgWidth);

  let newScrollPositionInterior = moveToNextCardInterior * imgWidthInterior;

  // console.log(
  //   `Moving to Card Index: ${moveToNextCard}, New Scroll Position: ${newScrollPosition}`
  // );

  carouselInterior.value.scrollTo({
    left: newScrollPositionInterior,
    behavior: "smooth",
  });
}

function cloneElementsInfinitelyInterior() {
  let scrollPositionInterior;
  let sliderInterior;
  {
    sliderInterior = document.querySelector(".carouselInterior");
    if (sliderInterior) {
      let itemsInterior = [...document.querySelectorAll(".InteriorSliderCard")];

      itemsInterior.forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone", "clone-right");
        sliderInterior.appendChild(clone);
      });

      itemsInterior.reverse().forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone", "clone-left");
        sliderInterior.insertBefore(clone, sliderInterior.firstChild);
      });

      scrollPositionInterior = 6 * imgWidthInterior;

      setTimeout(() => {
        sliderInterior.scrollTo({
          left: scrollPositionInterior,
          behavior: "auto",
        });
      }, 50);
    } else {
      console.error("Slider not found");
    }
  }

  {
    const originalCardCountInterior = 5;
    let isRecyclingInterior = false;

    function setupInfiniteScrollDynamic() {
      carouselInterior.value.addEventListener("scroll", () => {
        // Prevent recursion or re-entry while adjusting scroll position
        if (isRecyclingInterior) return;

        let currentScroll;
        if (!carouselInterior.value.scrollLeft) return;
        currentScroll = carouselInterior.value.scrollLeft;

        const maxScrollLeft =
          carouselInterior.value.scrollWidth -
          carouselInterior.value.clientWidth;

        // Thresholds for when to recycle elements
        if (currentScroll < imgWidthInterior) {
          // User has scrolled to the left end; move last elements to the start
          recycleCards("left");
        } else if (currentScroll > maxScrollLeft - 0.1 * imgWidthInterior) {
          // User has scrolled to the right end; move first elements to the end
          recycleCards("right");
        }
      });
    }

    function recycleCards(directionInterior) {
      isRecyclingInterior = true;

      if (directionInterior === "left") {
        // Move elements from right end to left end
        for (let i = 0; i < originalCardCountInterior; i++) {
          const lastCard = carouselInterior.value.lastElementChild;
          carouselInterior.value.insertBefore(
            lastCard,
            carouselInterior.value.firstElementChild
          );
        }
        // Adjust scroll position to new position after moving elements
        carouselInterior.value.scrollLeft +=
          originalCardCountInterior * imgWidthInterior;
      } else if (directionInterior === "right") {
        // Move elements from left end to right end
        for (let i = 0; i < originalCardCountInterior; i++) {
          const firstCardInterior = carouselInterior.value.firstElementChild;
          carouselInterior.value.appendChild(firstCardInterior);
        }
        // Adjust scroll position to new position after moving elements
        carouselInterior.value.scrollLeft -=
          originalCardCountInterior * imgWidthInterior;
      }

      isRecyclingInterior = false;
    }

    setupInfiniteScrollDynamic();
  }
}

let activeDotIndexInterior = ref(3);
function scrollToDotInterior(dotIndex) {
  const totalCardsInterior = 15;
  const sectionLengthInterior = 5;
  const currentScrollInterior = Math.ceil(carouselInterior.value.scrollLeft);
  const cardWidthInterior = imgWidthInterior;
  const viewportWidthInterior = carouselInterior.value.offsetWidth;

  // Calculate the current section based on scroll position
  const currentSectionInterior =
    dotIndex == 1 || dotIndex == 2
      ? Math.round(
          Math.ceil(currentScrollInterior) /
            (sectionLengthInterior * cardWidthInterior)
        )
      : Math.floor(
          Math.ceil(currentScrollInterior) /
            (sectionLengthInterior * cardWidthInterior)
        );

  let targetCardIndexWithinSectionInterior = dotIndex - 1;

  let overallTargetIndexInterior =
    currentSectionInterior * sectionLengthInterior +
    targetCardIndexWithinSectionInterior;
  // console.log(overallTargetIndex + 1);

  // activeDotIndex.value = dotIndex;
  updateActiveDotIndexInterior();

  overallTargetIndexInterior = Math.max(
    0,
    Math.min(overallTargetIndexInterior, totalCardsInterior - 1)
  );

  // Calculate new scroll position to bring the target card into view
  let newScrollPositionInterior =
    overallTargetIndexInterior * cardWidthInterior -
    (viewportWidthInterior - cardWidthInterior) / 2;

  // Scroll to the target position
  carouselInterior.value.scrollTo({
    left: newScrollPositionInterior,
    behavior: "smooth",
  });
}

function updateActiveDotIndexInterior() {
  const breakpoint = 1601;
  if (window.innerWidth <= breakpoint) {
    setTimeout(() => {
      const scrollLeftInterior = carouselInterior.value.scrollLeft;
      let currentCardIndexInterior = Math.floor(
        (scrollLeftInterior + imgWidthInterior / 2) / imgWidthInterior
      );
      activeDotIndexInterior.value = (currentCardIndexInterior % 5) + 1;
    }, 650);
  } else {
    setTimeout(() => {
      const scrollLeftInterior = carouselInterior.value.scrollLeft;
      let currentCardIndexInterior = Math.floor(
        (scrollLeftInterior + imgWidthInterior / 2) / imgWidthInterior
      );
      activeDotIndexInterior.value = (currentCardIndexInterior % 5) + 1;
    }, 650);
  }
}

// Review Image Slider ends
</script>
<style scoped>
@import "@/assets/styles/InteriorStyle.css";
</style>
