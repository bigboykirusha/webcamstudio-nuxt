<template>
  <header>
    <h1 class="InteriorTitle">
      <span class="InteriorTitleSpan">ВЕБКАМ МОДЕЛЬ</span> ДЕВУШКА
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy">Вакансии</nuxt-link
      ><span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link
        class="noDecorationLink"
        to="/vakancy/rabota-videochat-dlya-devushki"
        >Вебкам модель девушка</nuxt-link
      >
    </nav>
  </header>

  <section class="Popups">
    <div
      id="overlay"
      class="overlay"
      :class="{
        active: isOverlayActive,
      }"
      @click="toggleOverlayStatus(), closeTyPopup()"
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></div>
    <div
      class="TyPopupBlock font3"
      :class="{ active: isTyActive }"
      :aria-hidden="!isTyActive ? 'true' : 'false'"
    >
      <div class="TyPopupBlockPadding">
        <p class="font14">Спасибо за заявку!</p>
        <button
          class="TyPopupBlockButton pointer font3"
          @click="closeTyPopup(), toggleOverlayStatus()"
        >
          Закрыть
        </button>
      </div>
    </div>
  </section>

  <main>
    <section class="InteriorDescription">
      <background-vakancy />
      <p>
        Работа в видеочате для девушек остается одним из самых простых способов
        обрести финансовую независимость без каких-либо навыков, опыта и
        образования. Уровень дохода в индустрии adult-стриминга сопоставим с
        заработками в IT, при этом работа для девушек не требует постоянного
        обучения, прохождения курсов.
      </p>
    </section>
    <section class="Hiring">
      <div class="HiringVakOnePositionVakancies">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition2Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition2.webp"
              alt="Вакансия вебкам модели визуальное представление"
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
        <div class="HiringPositionTextContainer">
          <div class="HiringVakOnePositionDescription font1">
            <div
              class="HiringVakOneDescriptionMargin"
              :class="{
                active: !isAdditionalInfoBlockCollapsed,
              }"
            >
              <h2 class="HiringVakOnePositionTitle font18">
                <span class="font17">ПРЕИМУЩЕСТВА РАБОТЫ ВЕБКАМ</span> ДЛЯ
                ДЕВУШЕК СПБ
              </h2>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Вебкам — работа для девушек</span
                >
                разного возраста, чаще всего в эту сферу приходят студентки, но
                на деле путь открыт практически для всех. Пользователи сайтов —
                преимущественно мужчины, и вкусы у них разные: кому-то нравятся
                юные худышки, кому-то — зрелые дамы с пышными формами. Поэтому
                строгих стандартов и требований к внешности в этой сфере нет.
              </p>
              <p class="">
                Есть у
                <span class="HiringPositionTextContainerBold"
                  >вебкам работы для девушек в студии</span
                >
                и другие плюсы:
              </p>
              <ul class="">
                <li class="">
                  Возможность работать по удобному графику. Можно выбирать смены
                  после учебы, вечерами, или же днем — сайты с таким контентом
                  рассчитаны на аудиторию со всего мира, и зрителей много в
                  любое время суток.
                </li>
                <li class="">
                  Подходящая обстановка и атмосфера. В студии отличная
                  звукоизоляция, у каждой девушки — собственная комната с
                  современным дизайном. Во время эфира точно никто не помешает,
                  не попадет в кадр, не будет посторонних звуков. А значит,
                  трансляция будет идти так, как запланировано.
                </li>
                <li class="">
                  Качественный звук, свет.
                  <span class="HiringPositionTextContainerBold"
                    >Работа в видеочате для девушек</span
                  >
                  приносит больше дохода, если трансляция хорошего качества. В
                  студии установлено профессиональное оборудование, софтбоксы,
                  круговые лампы — все, чтобы обеспечить красивую картинку,
                  которая понравится пользователям сайта и привлечет внимание.
                  Во многих студиях есть визажисты, которые делают девушкам
                  макияж, подчеркивающий достоинства внешности, фотографы для
                  создания портфолио.
                </li>
                <div v-show="!isAdditionalInfoBlockCollapsed">
                  <li class="">
                    Неограниченная аудитория с опцией фильтрации. Большинство
                    студий стримят сразу на несколько сайтов, при этом модели
                    могут сами выбирать, из каких стран будут их зрители. Если
                    девушка переживает, что о вебкаме могут узнать ее знакомые,
                    она может отключить соответствующую страну. Мемберов,
                    ведущих себя непристойно или оскорбительно, можно заносить в
                    ЧС — они больше не смогут заходить в трансляции модели.
                  </li>
                </div>
              </ul>
              <div v-show="!isAdditionalInfoBlockCollapsed">
                <p class="">
                  Теоретически начать зарабатывать на
                  <span class="HiringPositionTextContainerBold">сайтах</span>
                  для взрослых можно с минимальными вложениями: достаточно
                  ноутбука с камерой и доступа в интернет. Но рассчитывать, что
                  такой старт будет успешным, все же не стоит — сейчас зритель
                  (в видеочатах их называют мемберами) избалован обилием
                  предложений, поэтому может выбирать среди множества
                  профессиональных моделей с дорогим реквизитом и качественным
                  светом. По этой причине
                  <span class="HiringPositionTextContainerBold"
                    >работа вебкам для девушек</span
                  >
                  наиболее доходна именно в студиях, где есть возможность
                  общаться с посетителями видеочатов в комфортных условиях.
                </p>
                <p class="HiringPositionTextContainerTitle">
                  Основные условия работы в видеочате для девушек без опыта
                </p>
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Работа вебкам в СПб для девушек</span
                  >
                  предлагается множеством студий, так что найти подходящий
                  вариант несложно. Условия в них могут незначительно
                  отличаться, но в целом рассчитывать можно на следующее:
                </p>
                <ul class="">
                  <li class="">
                    Часть дохода будет уходить студии, как правило, это 30-45%
                    от заработка. Взамен потенциальная модель получает полностью
                    готовое рабочее место, реквизит, мощное техническое
                    оснащение, поддержку персонала 24/7, а также услуги
                    переводчика и визажиста, если они требуются. Важным плюсом
                    станет помощь в пиаре бренда модели. Во многих студиях есть
                    вводный курс, который помогает понять азы вебкама.
                  </li>
                  <li class="">
                    Верхней планки дохода нет, его размер зависит от того,
                    насколько слаженной будет работа администрации студии и
                    модели. Девушка, устраиваясь на работу в вебкам, должна
                    понимать, что ее доход напрямую связан с числом зрителей и
                    их щедростью. Ее задача — заинтересовать, удержать внимание,
                    причем для этого часто даже не обязательно полностью
                    обнажаться. Некоторые мемберы ценят в моделях умение
                    общаться, флиртовать.
                  </li>
                  <li class="">
                    График устанавливается по желанию модели. Обычно это
                    восьмичасовые смены: дневные, ночные или утренние.
                    Обязательно есть перерыв для приема пищи и отдыха, для этого
                    предусмотрено отдельное помещение с холодильником,
                    микроволновкой и другой техникой.
                  </li>
                  <li class="">
                    Оплата производится удобным для модели способом, не реже
                    двух раз в месяц. Студия старается сделать так, чтобы
                    девушки получали доход без долгого ожидания, а также часто
                    выдает авансы перспективным моделям.
                  </li>
                </ul>
                <p class="HiringPositionTextContainerTitle">
                  Как устроиться на работу девушке в вебкам студию?
                </p>
                <p class="">
                  Начать
                  <span class="HiringPositionTextContainerBold"
                    >работу в вебкаме для девушек моделью в СПб</span
                  >
                  просто: достаточно оставить заявку на сайте студии или
                  связаться с администратором напрямую. Нередко администраторы
                  сами ищут моделей в социальных сетях, предлагая попробовать
                  себя в активно развивающейся сфере. Студии постоянно ищут
                  новые лица, так как многие девушки, заработав на квартиру или
                  машину, уходят из бизнеса, а некоторые и вовсе находят среди
                  мемберов вторую половину.
                </p>
              </div>
              <ArrowCircleDown
                class="AdditionalInfoArrowVakancy pointer"
                :class="{
                  ArrowDownIconRotateUp: !isAdditionalInfoBlockCollapsed,
                  collapsed: !isAdditionalInfoBlockCollapsed,
                }"
                @click="toggleAdditionalInfoBlock()"
              ></ArrowCircleDown>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <form
    class="VakOneQuestionnaireForm QuestionnairePopupBlockVakancy font3"
    :class="{ active: !isAdditionalInfoBlockCollapsed }"
    action="https://api.staticforms.xyz/submit"
    method="post"
    autocomplete="off"
  >
    <input
      type="hidden"
      name="accessKey"
      value="fdcabf43-f607-4ca9-9940-28db29793ff2"
    />
    <input type="hidden" name="$Роль" v-model="roleInput" />
    <fieldset>
      <div class="VakOneQuestionnaireFormTop">
        <legend class="VakOneQuestionnaireFormTopDescription font18">
          ОСТАВИТЬ ЗАЯВКУ НА ВАКАНСИЮ
        </legend>
        <hr class="QuestionnaireFormTopLine" />
        <div class="VakOneQuestionnaireFlex">
          <input
            id="nameInput"
            type="text"
            name="$Имя"
            class="QuestionnaireFormTopName font2"
            :class="{
              QuestionnaireFormInputBorder: !nameInputTouched || nameInput,
              'invalid-input': nameInputTouched == true && !nameInput,
            }"
            @input="nameInputTouched = true"
            @change="nameInputTouched = true"
            placeholder="Имя*"
            v-model="nameInput"
          />
          <input
            id="contactInput"
            type="text"
            name="$Связаться"
            class="QuestionnaireFormTopNumber font2"
            :class="{
              QuestionnaireFormInputBorder:
                !contactInputTouched || contactInput,
              'invalid-input': contactInputTouched == true && !contactInput,
            }"
            @input="contactInputTouched = true"
            @change="contactInputTouched = true"
            placeholder="Телефон или соцсеть*"
            v-model="contactInput"
          />
          <input
            id="ageInput"
            type="tel"
            name="$Возраст"
            class="QuestionnaireFormTopAge font2"
            :class="{
              QuestionnaireFormInputBorder:
                !ageInputTouched ||
                (ageInput && !isNaN(ageInput) && ageInput >= 18),
              'invalid-input':
                (ageInputTouched == true && !ageInput) ||
                (ageInputTouched == true && ageInput < 18) ||
                (ageInputTouched == true && isNaN(ageInput)),
            }"
            @input="ageInputTouched = true"
            @change="ageInputTouched = true"
            placeholder="Возраст*"
            v-model="ageInput"
          />
          <select
            name="$Опыт"
            class="QuestionnaireFormTopExperience font2 pointer"
            :class="{
              'selected-option': expInput !== 'NotStated',
              isDeviceIos: isDeviceIos,
            }"
            v-model="expInput"
            id="ExpChoice"
          >
            <option disabled selected style="display: none" value="NotStated">
              Есть ли у Вас опыт?
            </option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
        </div>
      </div>
      <div class="VakOneQuestionnaireFormMiddle">
        <div class="VakOneQuestionnaireFormMiddleDescription">
          Прикрепить фото:
        </div>
        <div class="VakOneQuestionnaireFormMiddleAttachBlock">
          <input
            type="file"
            name="file"
            id="file-upload"
            style="display: none"
            @change="handleFileChange($event)"
          />
          <label
            for="file-upload"
            class="VakOneQuestionnaireFormMiddleButton pointer"
          >
            Выбрать файл
          </label>
          <em class="VakOneQuestionnaireFormMiddleFileName">
            {{ fileName }}
          </em>
        </div>
      </div>
      <div class="VakOneQuestionnaireFormBottom">
        <div class="VakOneQuestionnaireFormBottomCheckbox">
          <input
            id="checkbox"
            type="checkbox"
            name="$Соглашение"
            class="QuestionnaireFormBottomCheckboxButton"
            @click="checkboxInputTouched = true"
            @change="checkboxInputTouched = true"
            v-model="checkboxInput"
          />
          <label
            id="checkboxLabel"
            for="checkbox"
            class="VakOneQuestionnaireFormBottomCheckboxText"
            :class="{
              VakOneQuestionnaireFormBottomCheckboxFont:
                !checkboxInputTouched || checkboxInput,
              'vak-one-invalid-checkbox-font':
                checkboxInputTouched == true && !checkboxInput,
            }"
            @click="checkboxInputTouched = true"
            @change="checkboxInputTouched = true"
          >
            Я даю согласие на обработку персональных данных.*
          </label>
        </div>
        <input
          type="submit"
          @click.prevent="submitQuestionnaire()"
          value="Отправить анкету"
          id="sumbit"
          class="VakOneQuestionnaireFormBottomCommitButton pointer"
        />
      </div>
    </fieldset>
  </form>

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
import HiringPosition2bg from "@/assets/icons/HiringPosition2bg.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  fixPaddingIos();
});

// Meta Tags Metadata
useHead({
  title: "Работа вебкам СПб для девушек с высоким доходом и свободным графиком",
  meta: [
    {
      name: "description",
      content:
        "Работа вебкам СПб для девушек любого возраста. Работа в видеочате для девушек в студии «KINKY STUDIO» - это стабильный высокий доход и гибкий график",
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

let isAdditionalInfoBlockCollapsed = ref(true);
function toggleAdditionalInfoBlock() {
  isAdditionalInfoBlockCollapsed.value = !isAdditionalInfoBlockCollapsed.value;
}

// Questionnaire starts

const ImgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const StaticFormsApiKey = import.meta.env.VITE_STATIC_FORMS_API_KEY;

let roleInput = ref("Модель-девушка");
let nameInput = ref("");
let nameInputTouched = ref(false);
let contactInput = ref();
let contactInputTouched = ref(false);
let ageInput = ref();
let ageInputTouched = ref(false);
let expInput = ref("NotStated");
let checkboxInput = ref(false);
let checkboxInputTouched = ref(false);
let file;

async function submitQuestionnaire() {
  const age = Number(ageInput.value);
  nameInputTouched.value = true;
  contactInputTouched.value = true;
  ageInputTouched.value = true;
  checkboxInputTouched.value = true;

  if (
    !nameInput.value ||
    !contactInput.value ||
    !age ||
    isNaN(age) ||
    age < 18 ||
    !checkboxInput.value
  )
    return;

  toggleOverlayStatus();
  toggleTyPopup();

  const fileLink = await uploadFile(file);

  const payload = {
    accessKey: StaticFormsApiKey,
    $Роль: roleInput.value,
    $Имя: nameInput.value,
    $Связаться: contactInput.value,
    $Возраст: age,
    $Опыт: expInput.value,
    $Файл: fileLink,
    $Соглашение: checkboxInput.value,
  };

  try {
    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${reponse.statusText}`);
    }
  } catch {
    console.error(`Failed to submit form: ${error.message}`);
    alert(`Что-то пошло не так: ${error.message}`);
  }

  // Reset form fields
  nameInput.value = "";
  contactInput.value = "";
  ageInput.value = "";
  expInput.value = "NotStated";
  fileName.value = "Файл не выбран";
  checkboxInput.value = false;

  nameInputTouched.value = false;
  contactInputTouched.value = false;
  ageInputTouched.value = false;
  checkboxInputTouched.value = false;
}

async function uploadFile() {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("key", ImgbbApiKey);

  try {
    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      // throw new Error(`Upload failed: ${response.statusText}`);
      // console.error(`Failed to upload file: ${error.message}`);
      console.log(`Failed to upload file: File upload went wrong`);
      return "NotStated";
    }

    const jsonResponse = await response.json();
    return jsonResponse.data.url;
  } catch {
    // console.error(`Failed to upload file: ${error.message}`);
    // throw error;
    console.log(`Failed to upload file: File upload went wrong`);
    return "NotStated";
  }
}

const fileName = ref("Файл не выбран");
function handleFileChange(event) {
  file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
  } else {
    fileName.value = "Файл не выбран";
  }
}

const isDeviceIos = ref(false);
function fixPaddingIos() {
  if (!isIos()) return;
  isDeviceIos.value = true;
}
function isIos() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Questionnaire ends

// Popup starts

let isOverlayActive = ref(false);
function toggleOverlayStatus() {
  isOverlayActive.value = !isOverlayActive.value;
}

let isTyActive = ref(false);
function toggleTyPopup() {
  isTyActive.value = !isTyActive.value;
}
function closeTyPopup() {
  isTyActive.value = false;
}

// Popup ends
</script>
<style scoped>
@import "@/assets/styles/VakancyOneStyle.css";
/* @import "@/assets/styles/VakancyTwoStyle.css"; */
</style>
