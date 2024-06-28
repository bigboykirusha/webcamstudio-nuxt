<template>
  <header>
    <h1 class="InteriorTitle">
      ОПЕРАТОР-ПЕРЕВОДЧИК <span class="InteriorTitleSpan">ВЕБКАМ СТУДИИ</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy">Вакансии</nuxt-link
      ><span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy/rabota-perevodchik"
        >Оператор-переводчик</nuxt-link
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
        Общение между моделями и зрителями — важнейшая составляющая стримов. А
        поскольку трансляции ведутся на зарубежных сайтах, аудитория там
        преимущественно англоязычная. Чтобы найти того, кто будет помогать
        моделям и зрителям находить общий язык, студии публикуют вакансии
        операторов-переводчиков вебкам. Для этого сотрудника важно хорошее
        знание языка, умение быстро печатать и в целом разбираться в
        особенностях индустрии adult-стриминга.
      </p>
    </section>

    <section class="Hiring">
      <div class="HiringVakOnePositionVakancies">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition3Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition3.webp"
              alt="Вакансия оператора-переводчика визуальное представление"
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
          />
          <HiringPosition3bg class="HiringPositionBg HiringPosition3bg" />
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
                <span class="font17">УСЛОВИЯ РАБОТЫ: ОПЕРАТОР</span> ПЕРЕВОДЧИК
                В ВЕБКАМ СТУДИЮ
              </h2>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Оператор вебкам-студии</span
                >
                может работать из дома. И это уже огромное преимущество, которое
                ценят соискатели. Возможность не тратить время на дорогу, не
                выходить из дома в плохую погоду, не толкаться в вагоне метро —
                плюс, который сложно перевесить комфортным офисным креслом или
                кофейным автоматом.
              </p>
              <p class="">Чем занимается оператор-переводчик?</p>
              <ul class="">
                <li class="">
                  Переписывается в чатах от имени модели, старается
                  заинтересовать и удержать зрителей.
                </li>
                <li class="">
                  Помогает модели настроиться, подбадривает ее, если нужно,
                  поддерживает психологически комфортную атмосферу.
                </li>
              </ul>
              <p class="">
                Круг обязанностей переводчика зависит от уровня знаний
                английского языка моделями, с которыми он работает. Так,
                некоторые начинающие модели совсем не знают языка, и общаться
                приходится только переводчику. Другим же моделям лишь иногда
                требуется помощь.
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Работа оператора вебкам</span
                >
                требует собранности, дисциплинированности, а также умения
                общаться. За день переводчик вебкам-студии может пообщаться с
                десятками зрителей, и для каждого из них нужно найти подходящие
                слова, чтобы удержать в чате и, следовательно, повысить доход
                модели и студии.
              </p>
              <p class="HiringPositionTextContainerTitle">
                Требование к оператору-переводчику для вебкам моделей
              </p>
              <p class="">
                Если вы хотите
                <span class="HiringPositionTextContainerBold"
                  >работать переводчиком в вебкаме</span
                >, рекомендуем ознакомиться с требованиями, которые студия
                предъявляет к соискателям:
              </p>
              <div v-show="!isAdditionalInfoBlockCollapsed">
                <ul class="">
                  <li class="">Возраст — от 18 лет.</li>
                  <li class="">Знание языка — от В2 и выше.</li>
                  <li class="">Опыт работы переводчиком — от 3 месяцев.</li>
                </ul>
                <p class="">
                  Вакансия
                  <span class="HiringPositionTextContainerBold"
                    >переводчика в вебкам-студии</span
                  >
                  открыта для всех: девушек, мужчин, небинарных персон. Нам
                  важно, чтобы вы умели сохранять позитивный настрой, активно
                  смотрели на жизнь в целом, были готовы проявлять
                  самостоятельность и быстро принимать решения. Это очень
                  помогает в такой сфере, как стриминг на сайтах для взрослых.
                </p>
                <p class="HiringPositionTextContainerTitle">
                  Как устроиться на должность оператор-переводчик вебкам?
                </p>
                <p class="">
                  Если вы хотите попробовать себя в качестве
                  <span class="HiringPositionTextContainerBold"
                    >переводчика в вебкаме в СПб</span
                  >, или уже имеете такой опыт и сейчас находитесь в поисках
                  студии с лояльным графиком и высоким уровнем дохода,
                  обращайтесь! Мы будем рады, если вы заполните анкету и немного
                  расскажете нам о себе. Мы попросим вас выполнить небольшое
                  тестовое задание, которое поможет понять ваш уровень владения
                  английским. Оно не займет много вашего времени и позволит
                  адекватно оценить перспективы сотрудничества.
                </p>
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Оператор-переводчик в вебкаме в СПб</span
                  >
                  в нашей студии — это сотрудник, которого ценят, уважают. Мы
                  подстроим график под вас, чтобы вам было удобно совмещать эту
                  должность с учебой, другой работой. Смены могут быть дневными,
                  вечерними, ночными — выбирайте, что подходит вам больше.
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
import HiringPosition3bg from "@/assets/icons/HiringPosition3bg.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  fixPaddingIos();
});

// Meta Tags Metadata
useHead({
  title: "Оператор переводчик вебкам СПб в студии «KINKY STUDIO» - Вакансии",
  meta: [
    {
      name: "description",
      content:
        "Вакансия оператор переводчик вебкам СПБ открыт набор на работу с высоким доходом в комфортных условиях. Оператор переводчик в вебкам студию - оставить заявку",
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

let roleInput = ref("Оператор-переводчик");
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
