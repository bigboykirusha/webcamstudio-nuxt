<template>
  <header>
    <h1 class="InteriorTitle">
      <span class="InteriorTitleSpan">ВЕБКАМ МОДЕЛЬ</span> ПАРЕНЬ
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy">Вакансии</nuxt-link
      ><span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link
        class="noDecorationLink"
        to="/vakancy/rabota-videochat-dlya-parney"
        >Вебкам модель парень</nuxt-link
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
        Работа в вебкам-индустрии для парней — хорошая возможность выйти на
        достойные заработки, не имея востребованной специальности или сложных
        навыков. Многие ошибочно полагают, что хорошо зарабатывать в сфере
        стриминга для взрослых могут только девушки, но это не так — запрос на
        моделей-мужчин постоянно растет. При этом конкуренция среди парней не
        так высока, как среди девушек, даже на крупных площадках редко можно
        встретить больше 100 моделей мужского пола. А значит, возможностей найти
        своего зрителя больше.
      </p>
    </section>
    <section class="Hiring">
      <div class="HiringVakOnePositionVakancies">
        <div class="HiringPositionImageContainer">
          <picture>
            <source
              srcset="~/assets/images/HiringPosition1Mobile.webp"
              media="(max-width: 720px)"
            />
            <img
              class="HiringPositionImage"
              src="~/assets/images/HiringPosition1.webp"
              alt="Вакансия вебкам модели визуальное представление"
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
          <div class="HiringVakOnePositionDescription font1">
            <div
              class="HiringVakOneDescriptionMargin"
              :class="{
                active: !isAdditionalInfoBlockCollapsed,
              }"
            >
              <h2 class="HiringVakOnePositionTitle font18">
                <span class="font17">ПРЕИМУЩЕСТВА РАБОТЫ ВЕБКАМ</span> ДЛЯ
                ПАРНЕЙ СПБ
              </h2>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Парни вебкам-модели</span
                >, работающие в нашей студии, среди очевидных плюсов называют:
              </p>
              <ul class="">
                <li class="">
                  Комфортные условия. У всех моделей — собственные комнаты с
                  современным, стильным интерьером и высокопроизводительным
                  оборудованием. За исправностью техники следят наши
                  специалисты.
                </li>
                <li class="">
                  Гибкий график.
                  <span class="HiringPositionTextContainerBold"
                    >Работа для парней вебкам</span
                  >
                  подразумевает, что модель самостоятельно выбирает удобное для
                  себя расписание. Смены могут быть вечерними, ночными,
                  дневными.
                </li>
                <li class="">
                  Большой выбор площадок для стриминга.
                  <span class="HiringPositionTextContainerBold"
                    >Работа в видеочате для парней</span
                  >
                  ведется на зарубежных сайтах, там и публика платежеспособная,
                  и доходы выше. После прохождения вводного курса администратор
                  предлагает модели самые подходящие сайты.
                </li>
                <li class="">
                  Приватность. По желанию модели трансляция ведется на
                  определенные страны, это снижает риск того, что видео увидят
                  знакомые. Администраторы не смотрят трансляции постоянно.
                </li>
              </ul>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Работа вебкам для парней в СПб</span
                >
                доступна всем, главное условие — достижение 18-летнего возраста.
                Телосложение, ориентация и внешние данные роли не играют, если
                вы умеете вести себя перед камерой достаточно расковано.
              </p>
              <div v-show="!isAdditionalInfoBlockCollapsed">
                <p class="HiringPositionTextContainerTitle">
                  Условия работы в вебкам для парней
                </p>
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Работа для парней вебкам</span
                  >
                  отличается комфортными условиями сотрудничества со студией:
                </p>
                <ul class="">
                  <li class="">
                    Процент дохода составляет от 55 до 70. На стартовом этапе
                    модели зарабатывают 55% от суммы, которую приносят
                    трансляции. Помимо этого, студия выдает аванс и обеспечивает
                    выплаты два раза в месяц. Если модель выходит не в свою
                    смену, например, на замену, выплата производится сразу же по
                    окончании смены.
                  </li>
                  <li class="">
                    Модели, которые положительно зарекомендовали себя, получают
                    гарантированный вывод в ТОП на сайте. А это, в свою очередь,
                    приводит к повышению доходов.
                  </li>
                  <li class="">
                    Иногородние модели могут рассчитывать на помощь с жильем.
                    Студия готова предоставить место для комфортного проживания,
                    чтобы вы могли приступить к работе, не тратя время на
                    поиски.
                  </li>
                </ul>
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Вебкам в СПб для парней — работа,</span
                  >
                  где модель всегда получает необходимую поддержку. Так,
                  персонал студии занимается настройкой оборудования,
                  поддержанием чистоты во всех помещениях, а также предоставляет
                  современный, качественный реквизит. На смене всегда есть
                  переводчик, который налаживает общение между моделями и
                  зрителями, если требуется, ведь для этого необходимо знание
                  разговорного английского языка.
                </p>
                <p class="HiringPositionTextContainerTitle">
                  Как устроиться парню на работу вебкам моделью в СПб?
                </p>
                <p class="">
                  Устроиться на
                  <span class="HiringPositionTextContainerBold"
                    >работу вебкам-моделью в СПб для парней</span
                  >
                  не сложнее, чем для девушек. Вы можете заполнить форму
                  обратной связи, прикрепив фото, и мы обязательно позвоним вам.
                  Или же написать нам в Телеграм по указанному на сайте номеру.
                  Выбирайте, что вам удобнее.
                </p>
                <p class="">
                  Как понять, подходит ли вам работа вебкам-моделью? Если вы
                  согласны с большей частью этих утверждений, попробовать
                  однозначно стоит (при условии, что вам исполнилось 18 лет):
                </p>
                <ul class="">
                  <li class="">
                    Вы хотите зарабатывать достойно, а не считать копейки до
                    зарплаты.
                  </li>
                  <li class="">
                    Вы готовы к тому, что на вас будут смотреть зрители со всего
                    мира.
                  </li>
                  <li class="">
                    Вы дисциплинированы, ответственны и не нуждаетесь в контроле
                    руководства.
                  </li>
                  <li class="">
                    Вы цените свое время и понимаете, что ваш доход зависит
                    именно от вас.
                  </li>
                  <li class="">
                    Вы не хотите просиживать в офисе «от звонка до звонка»,
                    заниматься скучной рутиной.
                  </li>
                </ul>
                <p class="">
                  Сомневаетесь, получится ли у вас? Не сомневайтесь, пробуйте, а
                  мы поможем! С нашей студией начать карьеру просто, ведь у вас
                  всегда будет поддержка профессионалов. Звоните или пишите, мы
                  на связи!
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
    <fieldset v-if="!isQuestionnaireSendingRequest">
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
    <LoadingIcon v-else class="vakancies" />
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
import HiringPosition1bg from "@/assets/icons/HiringPosition1bg.vue";
import LoadingIcon from "@/components/loading-icon.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  fixPaddingIos();
});

// Meta Tags Metadata
useHead({
  title: "Работа вебкам для парней СПб с высокой ЗП в студии «KINKY STUDIO»",
  meta: [
    {
      name: "description",
      content:
        "Работа вебкам для парней СПб в студии «KINKY STUDIO».  Работа для парней вебка в комфортной студии с высокой зарплатой и гибким графиком. Подать заявку",
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

let isQuestionnaireSendingRequest = ref(false);
function toggleQuestionnaireSending() {
  isQuestionnaireSendingRequest.value = !isQuestionnaireSendingRequest.value;
}

const ImgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const StaticFormsApiKey = import.meta.env.VITE_STATIC_FORMS_API_KEY;

let roleInput = ref("Модель-парень");
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
  toggleQuestionnaireSending();

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
  } finally {
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

    isQuestionnaireSendingRequest.value = false;
  }
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
</style>
