<template>
  <header>
    <h1 class="InteriorTitle">
      АГЕНТ ПО ПОИСКУ МОДЕЛЕЙ
      <div class="InteriorTitleSpan inline">ВЕБКАМ СТУДИИ</div>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy">Вакансии</nuxt-link
      ><span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy/agent-po-poisku-modeley"
        >Агент по поиску моделей</nuxt-link
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
        Вебкам-агент — это человек который занимается поиском и привлечением
        моделей для студии. Индустрия adult-стриминга нуждается в новых лицах
        постоянно, поэтому моделей ищут все студии и всегда. Все, что требуется
        от такого специалиста, — умение общаться, располагать людей к себе,
        причем речь идет о незнакомцах. Если вы хотите попробовать себя в
        качестве агента по поиску моделей, будьте готовы, что переписываться в
        социальных сетях придется много.
      </p>
    </section>
    <section class="Hiring">
      <div class="HiringVakOnePositionVakancies">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition5Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition5.webp"
              alt="Вакансия агента по поиску моделей визуальное представление"
            />
          </picture>
          <!-- <img
            class="HiringPositionImage"
            src="~/assets/images/HiringPosition5.webp"
            alt="Вакансия агента по поиску моделей визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="~/assets/images/HiringPosition5Mobile.webp"
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
          <div class="HiringVakOnePositionDescription font1">
            <div
              class="HiringVakOneDescriptionMargin"
              :class="{
                active: !isAdditionalInfoBlockCollapsed,
              }"
            >
              <h2 class="HiringVakOnePositionTitle font18">
                <span class="font17">ВЕБКАМ АГЕНТ – УСЛОВИЯ РАБОТЫ </span
                >ВЫСОКИЙ ДОХОД
              </h2>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Агент по поиску моделей</span
                >
                может сотрудничать со студией на максимально выгодных для себя
                условиях:
              </p>
              <p class="">Чем занимается оператор-переводчик?</p>
              <ul class="">
                <li class="">
                  Партнерская программа предусматривает выплаты разного рода —
                  вы можете получать фиксированную сумму за каждую приведенную
                  модель или выбрать процент от ее дохода, который будет
                  начисляться вам в течение нескольких месяцев.
                </li>
                <li class="">
                  Вам не нужно работать каждый день по графику с утра до вечера,
                  томиться в душном офисе и ждать окончания рабочего дня.
                  <span class="HiringPositionTextContainerBold"
                    >Агент вебкам</span
                  >
                  работает, когда ему удобно и столько, сколько удобно — пару
                  часов вечерами или по утрам. Заработок агента напрямую зависит
                  не от количества отработанных часов, а от результата.
                </li>
              </ul>
              <p class="">
                Работа
                <span class="HiringPositionTextContainerBold"
                  >вебкам-агента</span
                >
                идеальна для тех, кто не терпит монотонности и рутины. Она
                отлично подойдет экстравертам, которые легко заводят новые
                знакомства, способны непринужденно беседовать с людьми разного
                возраста, пола, социального статуса. Если вы понимаете, что это
                все о вас, обязательно попробуйте себя в этой профессии!
                Работать можно из любой точки мира, главное — доступ в интернет.
              </p>
              <p class="HiringPositionTextContainerTitle">
                Требование к агенту по поиску моделей для работы в вебкам-студии
              </p>
              <p class="">
                Наша студия регулярно публикует
                <span class="HiringPositionTextContainerBold"
                  >вакансию вебкам-агента</span
                >
                — нам нужны инициативные, креативные и активные люди. Мы не
                предъявляем никаких требований к вашему образованию, ведь
                главное — не диплом, а навыки. Будет большим плюсом, если вы:
              </p>
              <ul class="">
                <li class="">
                  Раньше занимались поиском сотрудников для любых организаций.
                </li>
                <li class="">
                  Имеете опыт карьерного консультанта, HR-специалиста.
                </li>
                <div v-show="!isAdditionalInfoBlockCollapsed">
                  <li class="">
                    Уже занимались поиском девушек и юношей в заведения для
                    взрослой аудитории.
                  </li>
                </div>
              </ul>
              <div v-show="!isAdditionalInfoBlockCollapsed">
                <p class="">
                  Вы должны понимать, что
                  <span class="HiringPositionTextContainerBold"
                    >вебкам-агент</span
                  >
                  не ограничен в заработках. Но они прямо пропорциональны
                  заработкам тех моделей, которых он приводит в студию. Поэтому
                  агенты заинтересованы в том, чтобы искать перспективных,
                  целеустремленных, ярких моделей.
                </p>
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Вебкам-агент</span
                  >
                  не ограничен в способах поиска моделей: он может использовать
                  любые социальные сети, мессенджеры, знакомиться с
                  потенциальными моделями вживую — на улице, в клубах и так
                  далее. Моделей можно искать среди знакомых, в окружении
                  друзей, сокурсников — чем шире ваш круг общения, тем легче
                  будет это делать.
                </p>
                <p class="HiringPositionTextContainerTitle">
                  Как устроится вебкам-агентом?
                </p>
                <p class="">
                  Заинтересовала
                  <span class="HiringPositionTextContainerBold"
                    >вакансия вебкам-агента</span
                  >? Заполните нашу анкету, оставив свой телефон для связи, или
                  же напишите нам в Телеграм по номеру, указанному на сайте. Мы
                  расскажем, как стать партнером студии и зарабатывать удаленно,
                  прямо из дома. Наша студия гарантирует всем сотрудникам
                  честные и регулярные выплаты. Мы заботимся о тех, кто вместе с
                  нами стремится развивать adult-стриминг, а также развиваться в
                  своей сфере как профессионал. Уверены, вместе мы достигнем
                  многого!
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
import HiringPosition5bg from "@/assets/icons/HiringPosition5bg.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  fixPaddingIos();
});

// Meta Tags Metadata
useHead({
  title:
    "Вебкам агент по поиску моделей открытая вакансия в СПб на студии «KINKY STUDIO»",
  meta: [
    {
      name: "description",
      content:
        "Вебкам агент по поиску моделей – набор сотрудников на студию «KINKY STUDIO». Вебкам агент вакансия с высокой зарплатой и гибким графиком – подать заявку для работы агентом по поиску моделей",
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

let roleInput = ref("Агент по поиску моделей");
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
/* @import "@/assets/styles/VakancyOneStyle.css"; */
@import "@/assets/styles/VakancyThreeStyle.css";
</style>
