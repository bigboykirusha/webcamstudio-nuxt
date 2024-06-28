<template>
  <header>
    <h1 class="InteriorTitle">
      АДМИНИСТРАТОР
      <div class="InteriorTitleSpan inline">ВЕБКАМ СТУДИИ</div>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy">Вакансии</nuxt-link
      ><span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/vakancy/administrator"
        >Администратор</nuxt-link
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
        Как порядок в офисе держится на офис-менеджере, так порядок в
        вебкам-студии держится на администраторе. Этот специалист просто
        незаменим, ведь он отвечает за то, чтобы в студии царила комфортная и
        доброжелательная атмосфера, а значит, напрямую влияет на
        работоспособность моделей и заработки всего персонала студии.
        Администратор вебкам-студии — вакансия, которая может оказаться именно
        тем, что вы ищете!
      </p>
    </section>
    <section class="Hiring">
      <div class="HiringVakOnePositionVakancies">
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
            src="~/assets/images/HiringPosition4.webp"
            alt="Вакансия администратора визуальное представление"
          />
          <img
            class="HiringPositionImageMobile"
            src="~/assets/images/HiringPosition4Mobile.webp"
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
          <div class="HiringVakOnePositionDescription font1">
            <div
              class="HiringVakOneDescriptionMargin"
              :class="{
                active: !isAdditionalInfoBlockCollapsed,
              }"
            >
              <h2 class="HiringVakOnePositionTitle font18">
                <span class="font17">ВАКАНСИЯ: АДМИНИСТРАТОР</span> ВЕБКАМ
                СТУДИИ В СПБ
              </h2>
              <p class="">
                Если еще несколько лет назад администратору требовались
                исключительно технические знания, сейчас требования к профессии
                сильно видоизменились. На первый план вышло умение
                взаимодействовать с моделями, продвигать из аккаунты, помогать
                им выбиваться в ТОП на сайтах adult-стриминга. По этой причине
                <span class="HiringPositionTextContainerBold"
                  >вебкам-администратор</span
                >
                — это обычно человек, который раньше работал моделью. А значит,
                отлично ориентируется в потребностях студии, зрителей и моделей,
                и умеет делать так, чтобы все получали то, что хотят.
              </p>
              <p class="">
                Какие требования, помимо опыта работы моделью, предъявляются к
                <span class="HiringPositionTextContainerBold"
                  >администратору вебкам-студии в СПб</span
                >?
              </p>
              <ul class="">
                <li class="">
                  Знание английского языка. Наши модели работают на зарубежных
                  сайтах, где языком общения является английский. Поэтому
                  администратору нужно уметь хотя бы без словаря понимать
                  интерфейсы сайтов, знать основные понятия сленга, который
                  используется на платформах для взрослых.
                </li>
                <li class="">
                  Умение работать в режиме многозадачности. Иногда возникают
                  ситуации, когда
                  <span class="HiringPositionTextContainerBold"
                    >администратор вебкам-студии</span
                  >
                  должен быстро принимать сразу несколько решений. Разобраться с
                  оборудованием, найти замену приболевшей модели, проследить,
                  чтобы переводчики появились на смене — это и многое другое
                  входит в работу администратора.
                </li>
                <li class="">
                  Лидерские качества. Администратор должен уметь находить подход
                  к моделям, однако при этом от него требуется еще и
                  контролировать их графики. А значит, в определенной мере он
                  является их непосредственным руководителем, и навыки лидера в
                  этом очень пригодятся.
                </li>

                <li class="">
                  Неограниченная аудитория с опцией фильтрации. Большинство
                  студий стримят сразу на несколько сайтов, при этом модели
                  могут сами выбирать, из каких стран будут их зрители. Если
                  девушка переживает, что о вебкаме могут узнать ее знакомые,
                  она может отключить соответствующую страну. Мемберов, ведущих
                  себя непристойно или оскорбительно, можно заносить в ЧС — они
                  больше не смогут заходить в трансляции модели.
                </li>
              </ul>
              <p class="HiringPositionTextContainerTitle">
                Условия и обязанности на работе администратором вебкам
              </p>
              <div v-show="!isAdditionalInfoBlockCollapsed">
                <p class="">
                  <span class="HiringPositionTextContainerBold"
                    >Вакансия администратор вебкам-студии в СПб</span
                  >
                  открывается не слишком часто, и, если вы хотите получить эту
                  работу, свяжитесь с нами уже сейчас. Мы обязательно рассмотрим
                  вашу кандидатуру и предложим работу, когда место будет
                  вакантным.
                </p>
                <p class="">
                  Важным преимуществом работы администратора является то, что
                  его доход складывается из оклада (фиксированной суммы за
                  каждую отработанную смену) и процента от того, что
                  зарабатывает студия. Следовательно, этот сотрудник студии
                  напрямую заинтересован в том, чтобы модели повышали доход, и
                  может видеть результаты своего труда не просто в виде
                  благодарности, а в виде денежных премий. Добавьте к этому
                  регулярные корпоративные мероприятия, вечеринки, максимально
                  комфортное рабочее место, и получите работу мечты!
                </p>
                <p class="">
                  Но перед этим изучите обязанности администратора:
                </p>
                <ul class="">
                  <li class="">
                    Ведение аккаунтов моделей, размещение их фотографий,
                    заполнение профилей — чем подробнее информация о модели, тем
                    легче ей найти своих зрителей.
                  </li>
                  <li class="">
                    Ведение отчетности и составление расписаний модели.
                    Количество отработанных часов, график выхода на следующую
                    неделю для каждой из моделей студии — все это составляет
                    администратор. Работа несложная, но требует скрупулезности.
                  </li>
                  <li class="">
                    Помощь моделям. Именно
                    <span class="HiringPositionTextContainerBold"
                      >администратор вебкам-студии</span
                    >
                    помогает настроить свет, камеру, подобрать реквизит для
                    стрима. А также разобраться с чатами, объяснить, чего хотят
                    зрители.
                  </li>
                  <li class="">
                    Собеседование с потенциальными моделями. Несмотря на то, что
                    поисками моделей занимаются агенты, на плечи администратора
                    ложатся обязанности по проведению собеседования и обучению
                    новичков. Это ответственная задача, но с ней нетрудно
                    справиться при поддержке студии.
                  </li>
                  <li class="">
                    Поддержание порядка в студии.
                    <span class="HiringPositionTextContainerBold"
                      >Работа администратора вебкам-студии</span
                    >
                    подразумевает, что этот сотрудник занимается закупками
                    хозяйственных мелочей, чай, кофе, печенья, а также заказом
                    реквизита и костюмов
                  </li>
                </ul>
                <p class="HiringPositionTextContainerTitle">
                  Как устроиться администратор вебкам студии в СПб
                </p>
                <p class="">
                  Хотите попробовать себя в роли
                  <span class="HiringPositionTextContainerBold"
                    >администратора вебкам студии в СПб</span
                  >? Заполните анкету, и мы пригласим вас на собеседование. Хотя
                  мы придерживаемся принципов гендерного равенства, предпочтение
                  среди соискателей отдаем девушкам, и тому есть веские причины.
                  Нам важно, чтобы модели чувствовали себя комфортно, и именно с
                  девушками им проще найти общий язык, делиться довольно
                  интимными подробностями работы и обсуждать возникающие иногда
                  сложности.
                </p>
                <p class="">
                  Оставить заявку на вакансию администратора можно не только на
                  сайте, но и по телефону. Не хотите звонить? Напишите нам в
                  Телеграм, и мы расскажем, как действовать дальше. Если у вас
                  есть знакомые модели или те, кто хочет попробовать себя в
                  вебкаме, приводите их к нам, и сможете получить бонус.
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
import HiringPosition4bg from "@/assets/icons/HiringPosition4bg.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  fixPaddingIos();
});

// Meta Tags Metadata
useHead({
  title:
    "Администратор вебкам студии «KINKY STUDIO» - открыт набор на вакансию",
  meta: [
    {
      name: "description",
      content:
        "Администратор вебкам студии «KINKY STUDIO» открыт набор сотрудников. Вакансия администратор вебкам студии в СПб – это стабильный доход и комфортные условия",
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

let roleInput = ref("Администратор");
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
