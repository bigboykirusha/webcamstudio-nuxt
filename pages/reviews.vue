<template>
  <header>
    <h1 class="ReviewsTitle">
      ОТЗЫВЫ О <span class="ReviewsTitleSpan">KINKY STUDIO</span>
    </h1>
    <nav class="ReviewsTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="ReviewsTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/reviews">Отзывы</nuxt-link>
    </nav>
  </header>

  <main>
    <section class="ReviewsDescription">
      <background-reviews />
      <p>
        Отзывы о работе вебкам-студии помогают тем, кто ищет работу в индустрии
        развлечений для взрослых. Они дают представление об условиях работы,
        уровне дохода и, конечно, об отношении администрации конкретной студии к
        персоналу. Именно оно зачастую определяет выбор, который делают модели,
        администраторы, ведь, помимо высоких заработков, многим хочется еще и
        ходить на работу с удовольствием, получать приятные эмоции от своей
        профессии.
      </p>
    </section>
    <section class="SliderLine">
      <div class="ReviewsPicturesScroll">
        <ArrowCircleLeft
          class="ArrowLeftIcon pointer"
          id="ArrowLeftIcon"
          @click="moveCard($event)"
        ></ArrowCircleLeft>
        <div
          :class="{ carousel: true, dragging: draggingActive }"
          ref="carousel"
          @mousedown.prevent="dragStart"
          @mouseup="dragStop"
          @mousemove.prevent="dragging"
          @mouseleave="dragStop"
          @touchstart.prevent="dragStart"
          @touchend="dragStop"
          @touchmove.prevent="dragging"
          @touchcancel="dragStop"
        >
          <div class="Card" ref="firstCard">
            <img
              alt="First review card picture"
              class="CardImg"
              src="/src/assets/images/ReviewCardImage1.webp"
            />
            <div class="CardBackground">
              <img
                alt="Review card picture shadow"
                aria-hidden="true"
                src="~/assets/images/CardShadowInset.webp"
                class="CardShadow"
              />
            </div>
            <span class="CardName font2"></span>
            <span class="CardDescription font1"></span>
          </div>
          <div class="Card">
            <img
              alt="Second review card picture"
              class="CardImg"
              src="/src/assets/images/ReviewCardImage2.webp"
            />
            <div class="CardBackground">
              <img
                alt="Review card picture shadow"
                aria-hidden="true"
                src="~/assets/images/CardShadowInset.webp"
                class="CardShadow"
              />
            </div>
            <span class="CardName font2">Нина</span>
            <span class="CardDescription font1">27 лет</span>
          </div>
          <div class="Card">
            <img
              alt="Third review card picture"
              class="CardImg"
              src="/src/assets/images/ReviewCardImage3.webp"
            />
            <div class="CardBackground">
              <img
                alt="Review card picture shadow"
                aria-hidden="true"
                src="~/assets/images/CardShadowInset.webp"
                class="CardShadow"
              />
            </div>
            <span class="CardName font2">Екатерина и Алексей</span>
            <span class="CardDescription font1">20 лет и 21 год</span>
          </div>
          <div class="Card">
            <img
              alt="Fourth review card picture"
              class="CardImg"
              src="/src/assets/images/ReviewCardImage4.webp"
            />
            <div class="CardBackground">
              <img
                alt="Review card picture shadow"
                aria-hidden="true"
                src="~/assets/images/CardShadowInset.webp"
                class="CardShadow"
              />
            </div>
            <span class="CardName font2">Дмитрий и Иван</span>
            <span class="CardDescription font1">24 года и 23 года</span>
          </div>
          <div class="Card">
            <img
              alt="Fifth review card picture"
              class="CardImg"
              src="/src/assets/images/ReviewCardImage5.webp"
            />
            <div class="CardBackground">
              <img
                alt="Review card picture shadow"
                aria-hidden="true"
                src="~/assets/images/CardShadowInset.webp"
                class="CardShadow"
              />
            </div>
            <span class="CardName font2">Мария</span>
            <span class="CardDescription font1">19 лет</span>
          </div>
        </div>
        <ArrowCircleRight
          class="ArrowRightIcon pointer"
          id="ArrowRightIcon"
          @click="moveCard($event)"
        ></ArrowCircleRight>
      </div>
      <div></div>
      <ScrollBarDistanceIndicatorDot
        v-for="dot in 5"
        :key="dot"
        class="ScrollDistanceIndicator"
        :class="{ scrollDotActive: dot === activeDotIndex }"
        @click="scrollToDot(dot)"
        ><div class="innerDot"></div
      ></ScrollBarDistanceIndicatorDot>
    </section>
    <section class="ReviewsText">
      <h4
        class="ReviewsTextPadding"
        :class="{
          collapsed: isAdditionalInfoBlockCollapsed,
        }"
      >
        <p class="">
          <span class="ReviewsTextBold">Работа в вебкам студии</span> требует
          определенных навыков. От модели зрители ждут чего-то интересного, а
          значит, нужно уметь удерживать внимание публики и заинтриговывать. Как
          показывает практика, больше всего зарабатывают те, кто легко находит
          общий язык с людьми, не боится экспериментов и ведет себя расковано.
        </p>
        <p class="">
          <span class="ReviewsTextBold"
            >Если вы изучите отзывы о работе вебкам-моделью,</span
          >
          то увидите, что большинство девушек и парней называют среди плюсов
          такие аспекты:
        </p>
        <ul class="">
          <li>
            Гибкий график. Модели сами выбирают, когда им удобнее находиться в
            студии, расписание подстраивается под них таким образом, чтобы
            оставалось время на учебу, личную жизнь, встречи с друзьями и другие
            занятия.
          </li>
          <li>
            Большие доходы. Не будем скрывать, что в сферу adult-стриминга
            приходят именно за деньгами. И заработки тут не ограничены верхней
            планкой, не зависят от сезона или чего-то еще, кроме самих моделей.
          </li>
        </ul>
        <div v-show="!isAdditionalInfoBlockCollapsed">
          <p class="">
            Отсутствие ограничений.
            <span class="ReviewsTextBold"
              >Работа вебкам-моделью в СПб, отзывы</span
            >
            о которой вы найдете на нашем сайте, открыта для всех. Не
            обязательно быть стройной красоткой модельной внешности, чтобы
            нравится зрителям. Можно полюбиться им за веселый нрав или
            нестандартный образ.
          </p>
          <p class="ReviewsTextTitle">Отзывы девушек о работе вебкам моделью</p>
          <p class="">
            Часто можно встретить мнение, что
            <span class="ReviewsTextBold">вебкам для девушек</span> — работа
            временная. Однако честнее будет рассматривать ее как хороший старт,
            который даст возможность в дальнейшем реализовать себя в любой
            сфере. Если у вас в планах — собственный бизнес, вебкам позволит
            накопить начальный капитал, без которого не обойтись.
          </p>
          <p class="">
            <span class="ReviewsTextBold"
              >Отзывы девушек о работе вебкам-моделью</span
            >
            в нашей студии подтверждают, что здесь царит доброжелательная
            атмосфера, а новички получают максимум поддержки. Каждая модель
            может рассчитывать на помощь в работе в любое время.
          </p>
          <p class="">
            Сложна ли
            <span class="ReviewsTextBold">работа вебкам? Отзывы</span>
            показывают, что в профессию быстро вливаются даже те, кто раньше
            никогда не стримил в интернете.
          </p>
          <p class="ReviewsTextTitle">
            Вот что еще отмечают девушки, которые здесь работают:
          </p>
          <ul class="">
            <li>
              Частые выплаты дохода. Студия платит два раза в месяц, модели
              также могут рассчитывать на получение аванса.
            </li>
            <li>
              Помощь с жильем. Мы знаем, что многие девушки приезжают в СПб из
              других городов, поэтому предоставляем им место для комфортного
              проживания.
            </li>
            <li>
              Высокий процент заработка. Модели в студии получают от 55% дохода,
              который в перспективе может вырасти до 70%.
            </li>
            <li>
              Всестороннюю поддержку. Переводчик, администратор, визажист,
              фотограф всегда к услугам моделей, чтобы помогать им в работе.
            </li>
            <li>
              Стильные интерьеры. Зрителям приятна эстетичная картинка, поэтому
              интерьер комнаты модели важен почти так же, как и ее образ.
            </li>
          </ul>
          <p class="">
            Профессиональное оборудование. Камеры, свет, компьютеры с
            высокоскоростным доступом в интернет обеспечивают отличное качество
            трансляции сразу на нескольких сайтах.
          </p>
          <p class="ReviewsTextTitle">Работа в вебкам студии: отзывы парней</p>
          <p class="">
            Мужчинам тоже подходит
            <span class="ReviewsTextBold">работа вебкам-моделью, отзывы</span>
            показывают, что для успешного старта им достаточно найти хорошую
            студию. Все остальное, включая оборудование и обучение, возьмут на
            себя ее сотрудники. Работа в студии хороша тем, что модели
            достаточно обладать такими качествами, как:
          </p>
          <ul class="">
            <li>
              Ответственность. Несмотря на гибкий график и отсутствие
              какого-либо контроля, модели должны быть достаточно
              организованными, вовремя выходить на смену, следить за своим
              расписанием.
            </li>
            <li>
              Раскованность. Далеко не все видеочаты предполагают обнажение
              модели, но умение вести себя перед камерой без стеснения,
              зажатости пригодится в любом случае.
            </li>
          </ul>
          <p class="">
            Вводный курс в основы вебкама проводится перед началом работы, он
            очень полезен для новичков и дает полное представление о специфике
            профессии, ее тонкостях и секретах. В хороших студиях, таких как
            наша, моделей никто не бросает без поддержки — рядом всегда
            администраторы, переводчики. При выборе
            <span class="ReviewsTextBold">работы вебкам в СПб отзывы</span>
            могут сыграть очень важную роль: они помогут принять верное решение
            и выбрать для сотрудничества ту студию, которая будет обеспечивать
            хороший доход и комфортные условия. Если вам нужно именно такое
            место работы, мы ждем вас.
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

import {
  ref,
  computed,
  // watch,
  onMounted,
  onUnmounted,
} from "vue";

onMounted(() => {
  cloneElementsInfinitely();
  updateActiveDotIndex();
  adaptImgWidth();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWindowWidth);
  }
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

// Meta Tags Metadata
useHead({
  title: "Работа вебкам СПб отзывы реальных моделей - «KINKY STUDIO»",
  meta: [
    {
      name: "description",
      content:
        "Работа вебкам СПб отзывы реальных моделей которые зарабатывают в студии «KINKY STUDIO». Работа вебкам моделью в СПб, отзывы о заработке и любимом деле",
    },
  ],
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

// Misc methods end

// Review Image Slider starts

const carousel = ref();
const firstCard = ref();

const defaultWindowWidth = 414;
let windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : defaultWindowWidth
);
let imgWidth = 360;
imgWidth = computed(() => {
  return windowWidth.value >= 1601 ? 410 : 360;
});
let prevDragFraction = ref(0);
let draggingStarted = ref(false);
let draggingActive = ref(false);
let prevPageX = ref();
let prevScrollLeft = ref();
let positionDiff;

function adaptImgWidth() {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  } else {
    windowWidth.value = defaultWindowWidth;
  }

  // console.log(imgWidth.value);
}
function updateWindowWidth() {
  windowWidth.value = window.innerWidth;
  // console.log(imgWidth.value);
}

let startX, startY;
const isScrollVertical = ref(false);
function dragStart(e) {
  targetScrollY = window.pageYOffset;
  draggingStarted.value = true;
  startX = e.touches ? e.touches[0].pageX : e.pageX;
  startY = e.touches ? e.touches[0].pageY : e.pageY;
  prevPageX.value = startX;
  prevScrollLeft.value = carousel.value.scrollLeft;
  // Immediately listen to move events
  document.addEventListener("mousemove", dragging, { passive: false });
  document.addEventListener("touchmove", dragging, { passive: false });
}

let targetScrollY;
function dragging(e) {
  if (!draggingStarted.value) return;

  const currentX = e.touches ? e.touches[0].pageX : e.pageX;
  const currentY = e.touches ? e.touches[0].pageY : e.pageY;
  const diffX = Math.abs(currentX - startX);
  const diffY = Math.abs(currentY - startY);

  if (diffY > diffX) {
    if (!isScrollVertical.value) {
      isScrollVertical.value = true;
      // console.log("Handling vertical scroll manually.");
    }
    const scrollYDiff = -(currentY - startY);
    targetScrollY += scrollYDiff;
    // console.log(targetScrollY);
    requestAnimationFrame(smoothScroll);
    startY = currentY;
    return;
  }

  if (isScrollVertical.value) {
    isScrollVertical.value = false;
    // console.log("Switching back to horizontal dragging.");
  }

  // Horizontal dragging logic
  if (diffX > diffY) {
    e.preventDefault();
    if (!draggingActive.value) draggingActive.value = true;
    positionDiff = currentX - prevPageX.value;
    carousel.value.scrollLeft = prevScrollLeft.value - positionDiff;
  }
}
function smoothScroll() {
  const currentScrollY = window.pageYOffset;
  const distanceToScroll = (targetScrollY - currentScrollY) * 0.5;
  const dampingFactor = 1;

  if (Math.abs(distanceToScroll) > 1) {
    window.scrollTo(0, currentScrollY + distanceToScroll * dampingFactor);
    requestAnimationFrame(smoothScroll);
  } else {
    // window.scrollTo(0, targetScrollY);
  }
}
function dragStop() {
  draggingStarted.value = false;
  draggingActive.value = false;

  // if (!draggingActive.value) return;
  autoSlide();
  updateActiveDotIndex();
}

let isScrolling = false;
function moveCard(element) {
  if (isScrolling) return;
  isScrolling = true;

  const distanceToScrollTo = Math.ceil(
    carousel.value.scrollLeft +
      (element.target.id == "ArrowLeftIcon" ? -imgWidth.value : imgWidth.value)
  );
  // console.log(distanceToScrollTo);
  carousel.value.scrollTo({
    left: distanceToScrollTo,
    behavior: "smooth",
  });

  let scrollTimeout;
  function handleScrollEnd() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      carousel.value.removeEventListener("scroll", handleScrollEnd);
    }, 40);
  }
  carousel.value.addEventListener("scroll", handleScrollEnd);

  updateActiveDotIndex();
}

function autoSlide() {
  let currentScroll = carousel.value.scrollLeft;
  let direction = positionDiff < 0 ? 1 : -1;
  let threshold = 0.3;

  // console.log(
  //   `Current Scroll: ${currentScroll}, Direction: ${direction}, PositionDiff: ${positionDiff}`
  // );

  let currentCardIndex = Math.floor(currentScroll / imgWidth.value);
  let dragFraction = Math.abs(positionDiff) / imgWidth.value;

  // console.log(dragFraction);

  // console.log(`Drag Fraction: ${dragFraction}, Threshold: ${threshold}`);

  let moveToNextCard = currentCardIndex;

  // console.log(currentCardIndex);

  // console.log("first:", moveToNextCard);

  if (dragFraction == prevDragFraction.value) return;
  prevDragFraction.value = dragFraction;
  if (dragFraction > threshold && direction > 0) {
    moveToNextCard += direction;
  } else if (dragFraction > threshold && direction < 0) {
    moveToNextCard;
  } else if (dragFraction < threshold && direction < 0) {
    moveToNextCard += 1;
  }

  // console.log("second:", moveToNextCard);

  moveToNextCard = Math.max(
    0,
    Math.min(
      moveToNextCard,
      Math.floor(carousel.value.scrollWidth / imgWidth.value) - 1
    )
  );

  // console.log("third  :", moveToNextCard);

  // console.log(direction, moveToNextCard, carousel.value.scrollWidth, imgWidth);

  let newScrollPosition = moveToNextCard * imgWidth.value;

  // console.log(
  //   `Moving to Card Index: ${moveToNextCard}, New Scroll Position: ${newScrollPosition}`
  // );

  carousel.value.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
}

function cloneElementsInfinitely() {
  let scrollPosition;
  let slider;
  {
    slider = document.querySelector(".carousel");
    if (slider) {
      let items = [...document.querySelectorAll(".Card")];

      items.forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone", "clone-right");
        slider.appendChild(clone);
      });

      items.reverse().forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone", "clone-left");
        slider.insertBefore(clone, slider.firstChild);
      });

      scrollPosition = 6 * imgWidth.value;

      setTimeout(() => {
        slider.scrollTo({
          left: scrollPosition,
          behavior: "auto",
        });
      }, 50);
    } else {
      console.error("Slider not found");
    }
  }

  {
    const originalCardCount = 5;
    let isRecycling = false;

    function setupInfiniteScrollDynamic() {
      carousel.value.addEventListener("scroll", () => {
        // Prevent recursion or re-entry while adjusting scroll position
        if (isRecycling) return;

        const currentScroll = carousel.value.scrollLeft;
        const maxScrollLeft =
          carousel.value.scrollWidth - carousel.value.clientWidth;

        // Thresholds for when to recycle elements
        if (currentScroll < imgWidth.value) {
          // User has scrolled to the left end; move last elements to the start
          recycleCards("left");
        } else if (currentScroll > maxScrollLeft - 0.1 * imgWidth.value) {
          // User has scrolled to the right end; move first elements to the end
          recycleCards("right");
        }
      });
    }

    function recycleCards(direction) {
      isRecycling = true;

      if (direction === "left") {
        // Move elements from right end to left end
        for (let i = 0; i < originalCardCount; i++) {
          const lastCard = carousel.value.lastElementChild;
          carousel.value.insertBefore(
            lastCard,
            carousel.value.firstElementChild
          );
        }
        // Adjust scroll position to new position after moving elements
        carousel.value.scrollLeft += originalCardCount * imgWidth.value;
      } else if (direction === "right") {
        // Move elements from left end to right end
        for (let i = 0; i < originalCardCount; i++) {
          const firstCard = carousel.value.firstElementChild;
          carousel.value.appendChild(firstCard);
        }
        // Adjust scroll position to new position after moving elements
        carousel.value.scrollLeft -= originalCardCount * imgWidth.value;
      }

      isRecycling = false;
    }

    setupInfiniteScrollDynamic();
  }
}

let activeDotIndex = ref(3);
function scrollToDot(dotIndex) {
  const totalCards = 15;
  const sectionLength = 5;
  const currentScroll = Math.ceil(carousel.value.scrollLeft);
  const cardWidth = imgWidth.value;
  const viewportWidth = carousel.value.offsetWidth;

  // Calculate the current section based on scroll position
  const currentSection =
    dotIndex == 1 || dotIndex == 2
      ? Math.round(Math.ceil(currentScroll) / (sectionLength * cardWidth))
      : Math.floor(Math.ceil(currentScroll) / (sectionLength * cardWidth));

  let targetCardIndexWithinSection = dotIndex - 1;

  let overallTargetIndex =
    currentSection * sectionLength + targetCardIndexWithinSection;
  // console.log(overallTargetIndex + 1);

  // activeDotIndex.value = dotIndex;
  updateActiveDotIndex();

  overallTargetIndex = Math.max(
    0,
    Math.min(overallTargetIndex, totalCards - 1)
  );

  // Calculate new scroll position to bring the target card into view
  let newScrollPosition =
    overallTargetIndex * cardWidth - (viewportWidth - cardWidth) / 2;

  // Scroll to the target position
  carousel.value.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
}

function updateActiveDotIndex() {
  const breakpoint = 1601;
  if (window.innerWidth <= breakpoint) {
    setTimeout(() => {
      const scrollLeft = carousel.value.scrollLeft;
      let currentCardIndex = Math.floor(
        (scrollLeft + imgWidth.value / 2) / imgWidth.value
      );
      activeDotIndex.value = (currentCardIndex % 5) + 1;
    }, 450);
  } else {
    setTimeout(() => {
      const scrollLeft = carousel.value.scrollLeft;
      let currentCardIndex = Math.floor(
        (scrollLeft + imgWidth.value / 2) / imgWidth.value
      );
      activeDotIndex.value = ((currentCardIndex + 1) % 5) + 1;
    }, 450);
  }
}

// Review Image Slider ends
</script>
<style scoped>
@import "@/assets/styles/style.css";
@import "@/assets/styles/ReviewsStyle.css";
</style>
