<template>
  <header>
    <h1 class="InteriorTitle">
      ВАКАНСИИ В <span class="InteriorTitleSpan">KINKY STUDIO</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy"
        >Вакансии вебкам СПб</nuxt-link
      >
    </nav>
  </header>

  <main>
    <section>
      <p class="InteriorDescription">
        Ищете вакансии в вебкам студии? Эта сфера хороша тем, что в ней могут
        найти работу люди с самыми разными навыками, а также те, кто хочет
        попробовать себя в чем-то новом и интересном. Достаточно низкий порог
        вхождения и высокие заработки привлекают в вебкам студентов, вчерашних
        выпускников. Но работать в вебкам студии могут не только юные девушки и
        парни, мы открыты для всех.
      </p>
    </section>
    <section class="Hiring">
      <div class="HiringPosition HiringPositionVakancies HiringPosition1">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition1Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage HiringPositionImage1"
              src="~/assets/images/HiringPosition1.webp"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="../../assets/images/HiringPosition1.webp"
            alt="Вакансия вебкам модели визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="../../assets/images/HiringPosition1Mobile.webp"
            alt="Мобильная версия вакансии вебкам модели визуальное представление"
          /> -->
          <img
            class="HiringPositionShadowVakancies"
            src="/src/assets/images/HiringPositionShadow.webp"
            alt="Тень для визуального представления"
          />
          <HiringPosition1bg class="HiringPositionBg HiringPosition1bg" />
        </div>
        <div class="HiringPositionTextContainer">
          <h2 class="HiringPositionTitle font18">
            <span class="font17">ВЕБКАМ МОДЕЛЬ</span> ПАРЕНЬ
          </h2>
          <h3 class="HiringPositionDescriptionVakancies font1">
            Хорошая возможность выйти на достойные заработки, не имея
            востребованной специальности или сложных навыков. Запрос на
            моделей-мужчин постоянно растет!
          </h3>
          <button
            class="HiringPositionButtonVakancies font3 pointer"
            @click="goToVakancyOne()"
          >
            Подробнее
          </button>
        </div>
      </div>
      <div class="HiringPosition HiringPositionVakancies HiringPosition2">
        <div class="HiringPositionTextContainer">
          <h2 class="HiringPositionTitle font18">
            <span class="font17">ВЕБКАМ МОДЕЛЬ</span> ДЕВУШКА
          </h2>
          <h3 class="HiringPositionDescriptionVakancies font1">
            Работа в видеочате для девушек остается одним из самыхч простых
            способов обрести финансовую независимость без каких-либо навыков,
            опыта и образования. Уровень дохода в индустрии adult-стриминга
            сопоставим с заработками в IT!
          </h3>
          <button
            class="HiringPositionButtonVakancies font3 pointer"
            @click="goToVakancyTwo()"
          >
            Подробнее
          </button>
        </div>
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition2Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage HiringPositionImage2"
              src="~/assets/images/HiringPosition2.webp"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="../../assets/images/HiringPosition2.webp"
            alt="Вакансия вебкам модели визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="../../assets/images/HiringPosition2Mobile.webp"
            alt="Мобильная версия вакансии вебкам модели визуальное представление"
          /> -->
          <img
            class="HiringPositionShadowVakancies"
            src="/src/assets/images/HiringPositionShadow.webp"
            alt="Тень для визуального представления"
          />
          <HiringPosition2bg class="HiringPositionBg HiringPosition2bg" />
        </div>
      </div>
      <div class="HiringPosition HiringPositionVakancies HiringPosition4">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition4Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition4.webp"
              alt="Вакансия администратора визуальное представление"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="../../assets/images/HiringPosition4.webp"
            alt="Вакансия администратора визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="../../assets/images/HiringPosition4Mobile.webp"
            alt="Мобильная версия вакансии администратора визуальное представление"
          /> -->
          <img
            class="HiringPositionShadowVakancies"
            src="/src/assets/images/HiringPositionShadow.webp"
            alt="Тень для визуального представления"
          />
          <HiringPosition4bg class="HiringPositionBg HiringPosition4bg" />
        </div>
        <div class="HiringPositionTextContainer">
          <h2 class="HiringPositionTitle font17">АДМИНИСТРАТОР</h2>
          <h3 class="HiringPositionDescriptionVakancies font1">
            Как порядок в офисе держится на офис-менеджере, так порядок в
            вебкам-студии держится на администраторе. Этот специалист просто
            незаменим, ведь он отвечает за то, чтобы в студии царила комфортная
            и доброжелательная атмосфера.
          </h3>
          <button
            class="HiringPositionButtonVakancies font3 pointer"
            @click="goToVakancyFour()"
          >
            Подробнее
          </button>
        </div>
      </div>
      <div class="HiringPosition HiringPositionVakancies HiringPosition3">
        <div class="HiringPositionTextContainer">
          <h2 class="HiringPositionTitle font17">ОПЕРАТОР-ПЕРЕВОДЧИК</h2>
          <h3 class="HiringPositionDescriptionVakancies font1">
            Чтобы найти того, кто будет помогать моделям и зрителям находить
            общий язык, студии публикуют вакансии операторов-переводчиков
            вебкам. Для этого сотрудника важно хорошее знание языка, умение
            быстро печатать и в целом разбираться в особенностях индустрии
            adult-стриминга.
          </h3>
          <button
            class="HiringPositionButtonVakancies font3 pointer"
            @click="goToVakancyThree()"
          >
            Подробнее
          </button>
        </div>
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition3Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition3.webp"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="../../assets/images/HiringPosition3.webp"
            alt="Вакансия оператора-переводчика визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="../../assets/images/HiringPosition3Mobile.webp"
            alt="Мобильная версия вакансии оператора-переводчика визуальное представление"
          /> -->
          <img
            class="HiringPositionShadowVakancies"
            src="/src/assets/images/HiringPositionShadow.webp"
            alt="Тень для визуального представления"
          /><HiringPosition3bg class="HiringPositionBg HiringPosition3bg" />
        </div>
      </div>
      <div class="HiringPosition HiringPositionVakancies HiringPosition5">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition5Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition5.webp"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="../../assets/images/HiringPosition5.webp"
            alt="Вакансия агента по поиску моделей визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="../../assets/images/HiringPosition5Mobile.webp"
            alt="Мобильная версия вакансии агента по поиску моделей визуальное представление"
          /> -->
          <img
            class="HiringPositionShadowVakancies"
            src="/src/assets/images/HiringPositionShadow.webp"
            alt="Тень для визуального представления"
          />
          <HiringPosition5bg class="HiringPositionBg HiringPosition5bg" />
        </div>
        <div class="HiringPositionTextContainer">
          <h2 class="HiringPositionTitle font17">АГЕНТ ПО ПОИСКУ МОДЕЛЕЙ</h2>
          <h3 class="HiringPositionDescriptionVakancies font1">
            Вебкам-агент — это человек который занимается поиском и привлечением
            моделей для студии. Индустрия adult-стриминга нуждается в новых
            лицах постоянно, поэтому моделей ищут все студии и всегда.
          </h3>
          <button
            class="HiringPositionButtonVakancies font3 pointer"
            @click="goToVakancyFive()"
          >
            Подробнее
          </button>
        </div>
      </div>
    </section>
    <section class="HiringDescription">
      <div class="HiringDescriptionMargin">
        <h2 class="HiringDescriptionTitle">
          Работа вебкам моделью для девушек и парней
        </h2>
        <h3 class="HiringDescriptionText">
          Наши
          <span class="HiringDescriptionTextSpan"
            >вакансии в вебкаме в СПб</span
          >
          не ограничиваются исключительно моделями, хотя они, конечно, требуются
          чаще всего. Дело в том, что индустрия adult-стриминга постоянно
          развивается, потому нуждается в новых лицах. Популярные модели
          зарабатывают столько, что могут за короткий срок решить все финансовые
          вопросы и, если появится желание, искать себя в чем-то другом: открыть
          собственный бизнес, посвятить себя учебе, путешествовать или строить
          семью. А пользователи сайтов для взрослых с удовольствием знакомятся с
          новыми моделями, возносят на вершины новых звезд и осыпают их
          деньгами.
        </h3>
      </div>
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
import ArrowCircleUp from "@/assets/icons/ArrowCircleUp.vue";
import HiringPosition1bg from "@/assets/icons/HiringPosition1bg.vue";
import HiringPosition2bg from "@/assets/icons/HiringPosition2bg.vue";
import HiringPosition3bg from "@/assets/icons/HiringPosition3bg.vue";
import HiringPosition4bg from "@/assets/icons/HiringPosition4bg.vue";
import HiringPosition5bg from "@/assets/icons/HiringPosition5bg.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

// Meta Tags Metadata
useHead({
  title:
    "Вакансии вебкам СПб в профессиональной студии видеочата - «KINKY STUDIO»",
  meta: [
    {
      name: "description",
      content:
        "Вакансии вебкам СПб в студии - «KINKY STUDIO».  Вебкам СПБ работа для моделей парней и девушек, а также администраторы и оператор-переводчик",
    },
  ],
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}
function goToPrivacyPolicy() {
  window.open("/privacy-policy", "_blank", "noopener,noreferrer");
}

function goToVakancyOne() {
  window.open(
    "/vakancy/rabota-videochat-dlya-parney",
    "_blank",
    "noopener,noreferrer"
  );
}
function goToVakancyTwo() {
  window.open(
    "/vakancy/rabota-videochat-dlya-devushki",
    "_blank",
    "noopener,noreferrer"
  );
}
function goToVakancyThree() {
  window.open("/vakancy/rabota-perevodchik", "_blank", "noopener,noreferrer");
}
function goToVakancyFour() {
  window.open("/vakancy/administrator", "_blank", "noopener,noreferrer");
}
function goToVakancyFive() {
  window.open(
    "/vakancy/agent-po-poisku-modeley",
    "_blank",
    "noopener,noreferrer"
  );
}
</script>
<style scoped>
@import "@/assets/styles/VakancyStyle.css";
</style>
