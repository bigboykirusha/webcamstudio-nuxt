<template>
  <section class="Popups">
    <div
      id="overlay"
      class="overlay"
      :class="{
        active: isOverlayActive,
      }"
      @click="
        toggleOverlayStatus(),
          closeQuestionnaitePopup(),
          closeTyPopup(),
          closeVidOne(),
          closeVidTwo(),
          closeZoomablePictures()
      "
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></div>
    <XmarkIcon
      class="CloseModalButton"
      :class="{
        active: isOverlayActive,
      }"
      @click="
        toggleOverlayStatus(),
          closeQuestionnaitePopup(),
          closeTyPopup(),
          closeVidOne(),
          closeVidTwo(),
          closeZoomablePictures()
      "
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></XmarkIcon>
    <div
      class="QuestionnairePopupBlock font3"
      :class="{ active: isQuestionnaireActive }"
      :aria-hidden="!isQuestionnaireActive ? 'true' : 'false'"
    >
      <form
        v-if="!isQuestionnaireSendingRequest"
        class="QuestionnaireForm"
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
          <div class="QuestionnaireFormTop">
            <legend class="QuestionnaireFormTopDescription font16">
              ЗАПОЛНИТЬ АНКЕТУ
            </legend>
            <hr class="QuestionnaireFormTopLine" />
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
          <div class="QuestionnaireFormMiddle">
            <div class="QuestionnaireFormMiddleDescription">
              Прикрепить фото:
            </div>
            <div class="QuestionnaireFormMiddleAttachBlock">
              <input
                type="file"
                name="file"
                id="file-upload"
                style="display: none"
                @change="handleFileChange($event)"
              />
              <label
                for="file-upload"
                class="QuestionnaireFormMiddleButton pointer"
              >
                Выбрать файл
              </label>
              <em class="QuestionnaireFormMiddleFileName">{{ fileName }}</em>
            </div>
          </div>
          <div class="QuestionnaireFormBottom">
            <div class="QuestionnaireFormBottomCheckbox">
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
                class="QuestionnaireFormBottomCheckboxText"
                :class="{
                  QuestionnaireFormBottomCheckboxFont:
                    !checkboxInputTouched || checkboxInput,
                  'invalid-checkbox-font':
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
              value="Отправить"
              id="sumbit"
              class="QuestionnaireFormBottomCommitButton pointer"
            />
          </div>
        </fieldset>
      </form>
      <LoadingIcon v-else class="homepage" />
    </div>
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
    <div
      v-if="isEmbeddedVidOneActive"
      class="EmbeddedVideoOverlayOne"
      :class="{ active: isEmbeddedVidOneActive }"
      :aria-hidden="!isEmbeddedVidOneActive ? 'true' : 'false'"
    >
      <video class="EmbeddedVideoYT" controls autoplay loop>
        <source src="/static/videos/home.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      v-if="isEmbeddedVidTwoActive"
      class="EmbeddedVideoOverlayTwo"
      :class="{ active: isEmbeddedVidTwoActive }"
      :aria-hidden="!isEmbeddedVidTwoActive ? 'true' : 'false'"
    >
      <iframe
        class="EmbeddedVideoYT2"
        src="https://www.youtube.com/embed/EIpknWCk6fk?si=cxV7oLoDD6b-HtLz&autoplay=1"
        title="Embedded Video number two"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
      ></iframe>
    </div>
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

  <main>
    <section class="line-1">
      <background-index v-if="isComponentLoaded" />
      <div class="QuestionnaireBlock">
        <h1 class="QuestionnaireTitle font6">KINKY STUDIO</h1>
        <p class="QuestionnaireDescription font9">
          Наша студия вебкам-моделей<br />
          приглашает на работу!
        </p>
        <button
          class="QuestionnaireButton pointer font3"
          @click.prevent="toggleOverlayStatus(), toggleQuestionnairePopup()"
        >
          Заполнить анкету
        </button>
      </div>
      <picture>
        <source
          srcset="~/assets/images/FillerImageMobile.webp"
          media="(max-width: 720px)"
        />
        <img
          alt="Background picture"
          aria-hidden="true"
          class="FillerImage"
          src="~/assets/images/FillerImage.webp"
        />
      </picture>
      <div class="EmbeddedVideoBlock pointer" @click="watchVidOne()">
        <div class="EmbeddedVideoBlockContainer">
          <img
            alt="Embedded video number one opening picture"
            class="EmbeddedVideoBlockImg"
            src="~/assets/images/EmbeddedVideoYT.webp"
          />
        </div>
        <p class="EmbeddedVideoDescription font12">Смотреть видео о нас</p>
      </div>
    </section>
    <section class="line-2">
      <div class="AllPros">
        <div class="Pros">
          <div class="ProsIcon">
            <ProsCircle />
            <img
              alt="Pros icon picture"
              aria-hidden="true"
              class="ProsIcon1 selectNone"
              src="@/assets/icons/ProsIcon-1.webp"
            />
          </div>
          <span class="ProsDescription font1">
            Всесторонняя<br />
            поддержка
          </span>
        </div>

        <div class="Pros">
          <div class="ProsIcon">
            <ProsCircle />
            <img
              alt="Pros icon picture"
              aria-hidden="true"
              class="ProsIcon2 selectNone"
              src="@/assets/icons/ProsIcon-2.webp"
            />
          </div>
          <span class="ProsDescription font1">
            Новый уровень<br />
            заработка
          </span>
        </div>
        <div class="Pros">
          <div class="ProsIcon">
            <ProsCircle />
            <img
              alt="Pros icon picture"
              aria-hidden="true"
              class="ProsIcon3 selectNone"
              src="@/assets/icons/ProsIcon-3.webp"
            />
          </div>
          <span class="ProsDescription font1">
            Комфортная<br />
            обстановка
          </span>
        </div>
        <div class="Pros">
          <div class="ProsIcon">
            <ProsCircle />
            <img
              alt="Pros icon picture"
              aria-hidden="true"
              class="ProsIcon4 selectNone"
              src="@/assets/icons/ProsIcon-4.webp"
            />
          </div>
          <span class="ProsDescription font1">
            Вводный курс<br />
            для начинающих<br />
            моделей
          </span>
        </div>
      </div>
    </section>
    <section class="line-3">
      <h2 class="ReviewsDescription font7">
        ОТЗЫВЫ О <span class="font10">KINKY STUDIO</span>
      </h2>
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
    <section class="line-4">
      <h2 class="EmploymentDescription">КАК УСТРОИТЬСЯ?</h2>
      <div class="EmploymentStep EmploymentStep1">
        <div class="EmploymentNumberPart">
          <div class="EmploymentNumberNum EmploymentNumberNum1">
            <EmploymentNumOne class="EmploymentNumOne" />
            <EmploymentNumOneTablet class="EmploymentNumOneTablet" />
            <EmploymentNumOneMobile class="EmploymentNumOneMobile" />
          </div>
          <EmploymentCircleWithShadow class="EmloymentNumberCircle1" />
          <EmploymentCircleWithShadowMobile
            class="EmloymentNumberCircle1Mobile"
          />
          <span class="EmploymentNumberText1 font13">
            Заполните<br />
            заявку
          </span>
        </div>
        <FaqHorizontalLine class="EmploymentLinePart1" />
        <p class="EmploymentTextPart1 font9">
          Оставьте заявку и дождитесь<br />
          нашего ответа, с вами свяжется<br />
          менеджер студии
        </p>
      </div>
      <div class="EmploymentStep EmploymentStep2">
        <div class="EmploymentNumberPart">
          <div class="EmploymentNumberNum EmploymentNumberNum2">
            <EmploymentNumTwo class="EmploymentNumTwo" />
            <EmploymentNumTwoTablet class="EmploymentNumTwoTablet" />
            <EmploymentNumTwoMobile class="EmploymentNumTwoMobile" />
          </div>
          <EmploymentCircleWithShadow class="EmloymentNumberCircle2" />
          <EmploymentCircleWithShadowMobile
            class="EmloymentNumberCircle2Mobile"
          />
          <span class="EmploymentNumberText2 font13">
            Пройдите<br />
            собеседование
          </span>
        </div>
        <FaqHorizontalLine class="EmploymentLinePart2" />
        <p class="EmploymentTextPart2 font9">
          Пройдите собеседование и<br />
          не забудьте взять документы,<br />
          которые подтверждают,<br />
          что вам есть 18 лет
        </p>
      </div>
      <div class="EmploymentStep EmploymentStep3">
        <div class="EmploymentNumberPart">
          <div class="EmploymentNumberNum EmploymentNumberNum3">
            <EmploymentNumThree class="EmploymentNumThree" />
            <EmploymentNumThreeTablet class="EmploymentNumThreeTablet" />
            <EmploymentNumThreeMobile class="EmploymentNumThreeMobile" />
          </div>
          <EmploymentCircleWithShadow class="EmloymentNumberCircle3" />
          <EmploymentCircleWithShadowMobile
            class="EmloymentNumberCircle3Mobile"
          />
          <span class="EmploymentNumberText3 font13">
            Пробная<br />
            смена
          </span>
        </div>
        <FaqHorizontalLine class="EmploymentLinePart3" />
        <p class="EmploymentTextPart3 font9">
          Отработайте пробную смену<br />
          на которой ответят на все<br />
          интересующие вопросы,<br />
          ознакомят с политикой сайтов<br />
          и самой студией
        </p>
      </div>
      <div class="EmploymentStep EmploymentStep4">
        <div class="EmploymentNumberPart">
          <div class="EmploymentNumberNum EmploymentNumberNum4">
            <EmploymentNumFour class="EmploymentNumFour" />
            <EmploymentNumFourTablet class="EmploymentNumFourTablet" />
            <EmploymentNumFourMobile class="EmploymentNumFourMobile" />
          </div>
          <EmploymentCircleWithShadow class="EmloymentNumberCircle4" />
          <EmploymentCircleWithShadowMobile
            class="EmloymentNumberCircle4Mobile"
          />
          <span class="EmploymentNumberText4 font13">
            Постоянная<br />
            работа
          </span>
        </div>
        <FaqHorizontalLine class="EmploymentLinePart4" />
        <p class="EmploymentTextPart4 font9">
          Станьте обладателем<br />
          постоянной любимой работы
        </p>
      </div>
    </section>
    <section class="line-5">
      <button
        class="QuestionnaireButtonLine5 font14 pointer"
        @click.prevent="toggleOverlayStatus(), toggleQuestionnairePopup()"
      >
        ЗАПОЛНИТЬ АНКЕТУ
      </button>
    </section>
    <section class="line-6">
      <div class="FaqBlock">
        <h2 class="FaqDescription font7">ХОТИТЕ ЗНАТЬ БОЛЬШЕ?</h2>
        <div class="FaqTable">
          <div class="FaqColumn FaqColumnOne">
            <div
              class="FaqCard"
              :data-id="faqCard.id"
              v-for="faqCard in columnOneFaq"
              :key="faqCard.id"
              :class="{ expanded: isCardExpanded(faqCard.id) }"
            >
              <p class="FaqCardQuestion">{{ faqCard.question }}</p>
              <ArrowCircleDown
                class="FaqCardArrow"
                :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
                @click="toggleFaqCard(faqCard.id)"
              />
              <p v-show="isCardExpanded(faqCard.id)" class="FaqCardAnswer">
                {{ faqCard.answer }}
              </p>
            </div>
          </div>
          <div class="FaqColumn FaqColumnTwo">
            <div
              class="FaqCard"
              v-for="faqCard in columnTwoFaq"
              :key="faqCard.id"
            >
              <p class="FaqCardQuestion font14">{{ faqCard.question }}</p>
              <ArrowCircleDown
                class="FaqCardArrow"
                :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
                @click="toggleFaqCard(faqCard.id)"
              />
              <p
                v-show="isCardExpanded(faqCard.id)"
                class="FaqCardAnswer font9"
              >
                {{ faqCard.answer }}
              </p>
            </div>
          </div>
          <div class="FaqColumn FaqColumnThree">
            <div
              class="FaqCard"
              v-for="faqCard in columnThreeFaq"
              :key="faqCard.id"
            >
              <p class="FaqCardQuestion font14">{{ faqCard.question }}</p>
              <ArrowCircleDown
                class="FaqCardArrow"
                :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
                @click="toggleFaqCard(faqCard.id)"
              />
              <p
                v-show="isCardExpanded(faqCard.id)"
                class="FaqCardAnswer font9"
              >
                {{ faqCard.answer }}
              </p>
            </div>
          </div>
          <div class="EmbeddedVideoBlock2 pointer" @click="watchVidTwo()">
            <div class="EmbeddedVideoBlockContainer2">
              <img
                alt="Embedded video number two opening picture"
                class="EmbeddedVideoBlock2Img"
                src="~/assets/images/EmbeddedVideoYT2.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="line-7">
      <div class="IncomeCalculator">
        <div class="CalculatorMainGridTable">
          <img
            alt="Income calculator ambience-creating image"
            class="CalculatorMainPhoto"
            srcset="
              ~/assets/images/CalculatorSample.webp    1600w,
              ~/assets/images/CalculatorMainPhoto.webp
            "
          />
          <div>
            <h2 class="CalculatorMainTitle">
              Сколько позволяет заработать работа веб моделью?
            </h2>
            <p class="CalculatorMainQuestion1">
              Сколько дней в неделю хотите работать?
            </p>
            <div class="CalculatorMainAnswerGrid1">
              <span
                class="CalculatorMainAnswerGrid1A1 font13 CalculatorBigButton selectNone pointer"
                :class="{ active: daysChosen == '4' }"
                @click="changeDays($event)"
              >
                4
              </span>
              <span
                class="CalculatorMainAnswerGrid1A2 font13 CalculatorBigButton selectNone pointer"
                @click="changeDays($event)"
                :class="{ active: daysChosen == '5' }"
              >
                5
              </span>
              <span
                class="CalculatorMainAnswerGrid1A3 font13 CalculatorBigButton selectNone pointer"
                @click="changeDays($event)"
                :class="{ active: daysChosen == '6' }"
              >
                6
              </span>
              <InfoSmallIcon class="CalculatorMainAnswerGrid1Info" />
            </div>

            <p class="CalculatorMainQuestion2 font14" font14>
              Сколько часов в день?
            </p>
            <div class="CalculatorMainAnswerGrid2">
              <span
                class="CalculatorMainAnswerGrid2A1 font13 CalculatorBigButton selectNone pointer"
                :class="{ active: hoursChosen == '5' }"
                @click="changeHours($event)"
              >
                5
              </span>
              <span
                class="CalculatorMainAnswerGrid2A2 font13 CalculatorBigButton selectNone pointer"
                :class="{ active: hoursChosen == '6' }"
                @click="changeHours($event)"
              >
                6
              </span>
              <span
                class="CalculatorMainAnswerGrid2A3 font13 CalculatorBigButton selectNone pointer"
                :class="{ active: hoursChosen == '7' }"
                @click="changeHours($event)"
              >
                7
              </span>
              <InfoSmallIcon class="CalculatorMainAnswerGrid2Info" />
            </div>
            <p class="CalculatorMainQuestion3 font14">
              Знание английского от 0 до 5?
            </p>
            <div class="CalculatorMainAnswerGrid3">
              <span
                class="CalculatorMainAnswerGrid3A1 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '0' }"
                @click="changeEng($event)"
              >
                0
              </span>
              <span
                class="CalculatorMainAnswerGrid3A2 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '1' }"
                @click="changeEng($event)"
              >
                1
              </span>
              <span
                class="CalculatorMainAnswerGrid3A3 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '2' }"
                @click="changeEng($event)"
              >
                2
              </span>
              <span
                class="CalculatorMainAnswerGrid3A4 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '3' }"
                @click="changeEng($event)"
              >
                3
              </span>
              <span
                class="CalculatorMainAnswerGrid3A5 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '4' }"
                @click="changeEng($event)"
              >
                4
              </span>
              <p
                class="CalculatorMainAnswerGrid3A6 font13 CalculatorSmallButton selectNone pointer"
                :class="{ active: engChosen == '5' }"
                @click="changeEng($event)"
              >
                5
              </p>
              <InfoSmallIcon class="CalculatorMainAnswerGrid3Info" />
            </div>
            <picture>
              <source
                srcset="~/assets/images/CalculatorMainPhotoMobile.webp"
                media="(max-width: 1600px)"
              />
              <img
                alt="Income calculator ambience-creating image for mobile devices"
                class="CalculatorMainPhotoMobile"
                src="~/assets/images/CalculatorSample.webp"
              />
            </picture>
          </div>
        </div>

        <div class="CalculatorResultsGridTable">
          <span class="CalculatorWeekly CalculatorNum selectNone">
            {{ calculatedResultWeekly
            }}<span class="selectAuto CalculatorText"
              ><br class="selectNone" />в неделю</span
            >
          </span>
          <span class="CalculatorMonthly CalculatorNum selectNone">
            {{ calculatedResultMonthly
            }}<span class="selectAuto CalculatorText"
              ><br class="selectNone" />в месяц</span
            >
          </span>
          <span class="CalculatorYearly CalculatorNum selectNone">
            {{ calculatedResultYearly
            }}<span class="selectAuto CalculatorText"
              ><br class="selectNone" />в год</span
            >
          </span>
        </div>
      </div>
    </section>
    <section class="line-8">
      <div class="InteriorBlock">
        <h2 class="InteriorTitle">ИНТЕРЬЕР СТУДИИ</h2>
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
                alt="First interior card picture"
                class="InteriorCardImg"
                src="~/assets/images/Interior-1.webp"
              />
            </div>
            <div class="InteriorSliderCard">
              <img
                alt="Second interior card picture"
                class="InteriorCardImg"
                src="~/assets/images/Interior-2.webp"
              />
            </div>
            <div class="InteriorSliderCard">
              <img
                alt="Third interior card picture"
                class="InteriorCardImg"
                src="~/assets/images/Interior-3.webp"
              />
            </div>
            <div class="InteriorSliderCard">
              <img
                alt="Fourth interior card picture"
                class="InteriorCardImg"
                src="~/assets/images/Interior-4.webp"
              />
            </div>
            <div class="InteriorSliderCard">
              <img
                alt="Fifth interior card picture"
                class="InteriorCardImg"
                src="~/assets/images/Interior-5.webp"
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
    </section>
    <section class="line-9">
      <div class="Features">
        <h2 class="FeaturesTitle font13">ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h2>
        <p class="FeaturesDescription font1">
          У нас индивидуальный подход к каждой модели. Мы заинтересованы в
          профессиональном развитии!
        </p>
        <div class="FeaturesTable">
          <div class="Feature1">
            <Features1 />
            <p class="FeatureTitle font15">Современная техника</p>
            <p class="FeatureDescription font1">
              Позволяющая вести<br />
              видео-трансляцию в FHD<br />
              качестве на нескольких<br />
              сайтах
            </p>
          </div>
          <div class="Feature2">
            <Features2 />
            <p class="FeatureTitle font15">Продвижение</p>
            <p class="FeatureDescription font1">
              Зарекомендовавшие<br />
              себя модели получают<br />
              гарантированный вывод в<br />
              топ на сайте
            </p>
          </div>
          <div class="Feature3">
            <Features3 />
            <p class="FeatureTitle font15">Корпоративы</p>
            <p class="FeatureDescription font1">
              Раз в три месяца мы<br />
              радуем наших моделей<br />
              организованным<br />
              мероприятием
            </p>
          </div>
          <div class="Feature4">
            <Features4 />
            <p class="FeatureTitle font15">Гибкий график работы</p>
            <p class="FeatureDescription font1">
              Есть возможность<br />
              совмещать с учебой или<br />
              другой работой
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="line-10">
      <div class="FyiBlock">
        <div class="FyiTable">
          <div class="Fyi1 Fyi">
            <img
              alt="First perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi1Image"
              src="~/assets/images/Fyi1Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi1Title font16">Новеньким моделям</span>
              <span class="Fyi1Description font9">
                В течении первого периода ваш процент составит 60%
              </span>
            </div>
          </div>
          <div class="Fyi2 Fyi">
            <img
              alt="Second perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi2Image"
              src="~/assets/images/Fyi2Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi2Title font16">Повышенный процент</span>
              <span class="Fyi2Description font9">
                Ваш стандартный процент будет 55% с возможностью его роста до
                70%
              </span>
            </div>
          </div>
          <div class="Fyi3 Fyi">
            <img
              alt="Third perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi3Image"
              src="~/assets/images/Fyi3Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi3Title font16">Прозрачная зарплата</span>
              <span class="Fyi3Description font9">
                Ваш доход будет полностью вами виден. Выплаты происходят два
                раза в месяц
              </span>
            </div>
          </div>
          <div class="Fyi4 Fyi">
            <img
              alt="Fourth perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi4Image"
              src="~/assets/images/Fyi4Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi4Title font16">Проживание в городе</span>
              <span class="Fyi4Description font9">
                Студия может предоставить жильё для иногородних моделей
              </span>
            </div>
          </div>
          <div class="Fyi5 Fyi">
            <img
              alt="Fifth perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi5Image"
              src="~/assets/images/Fyi5Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi5Title font16">Конфидециальность</span>
              <span class="Fyi5Description font9">
                Работаем с зарубежными сайтами. Не смотрим ваши трансляции
                постоянно
              </span>
            </div>
          </div>
          <div class="Fyi6 Fyi">
            <img
              alt="Sixth perk ambience-creating image"
              aria-hidden="true"
              class="FyiImage Fyi6Image"
              src="~/assets/images/Fyi6Image.webp"
            />
            <div class="FyiContent">
              <span class="Fyi6Title font16">Ежедневные выплаты</span>
              <span class="Fyi6Description font9">
                После первых трех смен и за выход не в свою смену платим сразу
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="line-11">
      <div class="HiringBlock">
        <h2 class="HiringTitle font7">АКТУАЛЬНЫЕ ВАКАНСИИ У НАС</h2>
        <div class="HiringTable">
          <div class="HiringPosition HiringPosition1">
            <div
              class="HiringPositionImageContainer HiringPositionImageContainer1"
            >
              <picture>
                <source
                  srcset="~/assets/images/HiringPosition1Mobile.webp"
                  media="(max-width: 720px)"
                />
                <img
                  alt="Вакансия вебкам модели визуальное представление"
                  class="HiringPositionImage"
                  src="~/assets/images/HiringPosition1.webp"
                />
              </picture>
              <img
                alt="Hiring card picture shadow"
                aria-hidden="true"
                class="HiringPositionShadow"
                src="/src/assets/images/HiringPositionShadow.webp"
              />
              <HiringPosition1bg class="HiringPositionBg HiringPosition1bg" />
            </div>
            <h3 class="HiringPositionTitle font18">
              <span class="font17">ВЕБКАМ МОДЕЛЬ</span> ПАРЕНЬ
            </h3>
            <p class="HiringPositionDescription font1">
              Хорошая возможность выйти на достойные заработки, не имея
              востребованной специальности или сложных навыков. Запрос на
              моделей-мужчин постоянно растет!
            </p>
            <button
              class="HiringPositionButton font3 pointer"
              @click="goToVakancyOne()"
            >
              Подробнее
            </button>
          </div>
          <div class="HiringPosition HiringPosition2">
            <div class="HiringPositionImageContainer">
              <picture>
                <source
                  srcset="~/assets/images/HiringPosition2Mobile.webp"
                  media="(max-width: 720px)"
                />
                <img
                  alt="Вакансия вебкам модели визуальное представление"
                  class="HiringPositionImage"
                  src="~/assets/images/HiringPosition2.webp"
                />
              </picture>
              <img
                alt="Hiring card picture shadow"
                aria-hidden="true"
                class="HiringPositionShadow"
                src="/src/assets/images/HiringPositionShadow.webp
                "
              />
              <HiringPosition2bg class="HiringPositionBg HiringPosition2bg" />
            </div>
            <h3 class="HiringPositionTitle font18">
              <span class="font17">ВЕБКАМ МОДЕЛЬ</span> ДЕВУШКА
            </h3>
            <p class="HiringPositionDescription font1">
              Работа в видеочате для девушек остается одним из самыхч простых
              способов обрести финансовую независимость без каких-либо навыков,
              опыта и образования. Уровень дохода в индустрии adult-стриминга
              сопоставим с заработками в IT!
            </p>
            <button
              class="HiringPositionButton font3 pointer"
              @click="goToVakancyTwo()"
            >
              Подробнее
            </button>
          </div>
          <div class="HiringPosition HiringPosition3">
            <div class="HiringPositionImageContainer">
              <picture>
                <source
                  srcset="~/assets/images/HiringPosition3Mobile.webp"
                  media="(max-width: 720px)"
                />
                <img
                  alt="Вакансия оператора-переводчика визуальное представление"
                  class="HiringPositionImage"
                  src="~/assets/images/HiringPosition3.webp"
                />
              </picture>
              <img
                alt="Hiring card picture shadow"
                aria-hidden="true"
                class="HiringPositionShadow"
                src="/src/assets/images/HiringPositionShadow.webp
                "
              />
              <HiringPosition3bg class="HiringPositionBg HiringPosition3bg" />
            </div>
            <h3 class="HiringPositionTitle font17">ОПЕРАТОР-ПЕРЕВОДЧИК</h3>
            <p class="HiringPositionDescription font1">
              Чтобы найти того, кто будет помогать моделям и зрителям находить
              общий язык, студии публикуют вакансии операторов-переводчиков
              вебкам. Для этого сотрудника важно хорошее знание языка, умение
              быстро печатать и в целом разбираться в особенностях индустрии
              adult-стриминга.
            </p>
            <button
              class="HiringPositionButton font3 pointer"
              @click="goToVakancyThree()"
            >
              Подробнее
            </button>
          </div>
          <div class="HiringPosition HiringPosition4">
            <div class="HiringPositionImageContainer">
              <picture>
                <source
                  srcset="~/assets/images/HiringPosition4Mobile.webp"
                  media="(max-width: 720px)"
                />
                <img
                  alt="Вакансия администратора визуальное представление"
                  class="HiringPositionImage"
                  src="~/assets/images/HiringPosition4.webp"
                />
              </picture>
              <img
                alt="Hiring card picture shadow"
                aria-hidden="true"
                class="HiringPositionShadow"
                src="/src/assets/images/HiringPositionShadow.webp
                "
              />
              <HiringPosition4bg class="HiringPositionBg HiringPosition4bg" />
            </div>
            <h3 class="HiringPositionTitle font17">АДМИНИСТРАТОР</h3>
            <p class="HiringPositionDescription font1">
              Как порядок в офисе держится на офис-менеджере, так порядок в
              вебкам-студии держится на администраторе. Этот специалист просто
              незаменим, ведь он отвечает за то, чтобы в студии царила
              комфортная и доброжелательная атмосфера.
            </p>
            <button
              class="HiringPositionButton font3 pointer"
              @click="goToVakancyFour()"
            >
              Подробнее
            </button>
          </div>
          <div class="HiringPosition HiringPosition5">
            <div class="HiringPositionImageContainer">
              <picture>
                <source
                  srcset="~/assets/images/HiringPosition5Mobile.webp"
                  media="(max-width: 720px)"
                />
                <img
                  alt="Вакансия агента по поиску моделей визуальное представление"
                  class="HiringPositionImage"
                  srcset="
                    ~/assets/images/HiringPosition5Mobile.webp 720w,
                    ~/assets/images/HiringPosition5.webp
                  "
                  src="~/assets/images/HiringPosition5.webp"
                />
              </picture>
              <img
                alt="Hiring card picture shadow"
                aria-hidden="true"
                class="HiringPositionShadow"
                src="/src/assets/images/HiringPositionShadow.webp
                "
              />
              <HiringPosition5bg class="HiringPositionBg HiringPosition5bg" />
            </div>
            <h3 class="HiringPositionTitle font17">АГЕНТ ПО ПОИСКУ МОДЕЛЕЙ</h3>
            <p class="HiringPositionDescription font1">
              Вебкам-агент — это человек который занимается поиском и
              привлечением моделей для студии. Индустрия adult-стриминга
              нуждается в новых лицах постоянно, поэтому моделей ищут все студии
              и всегда.
            </p>
            <button
              class="HiringPositionButton font3 pointer"
              @click="goToVakancyFive()"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <p class="ContactNotification font1">
        Подробности уточняйте по телефону. Вам выдадут контакты людей, которые
        смогут ответить на все интересующие вас вопросы! Или заполните
        соответствующую форму обратной связи.
      </p>
    </section>
    <section class="line-12">
      <div class="BlogBlock">
        <h2 class="BlogTitle font7">НАШ БЛОГ</h2>
        <div class="BlogTable">
          <div
            v-for="post in limitedPosts"
            :key="post.id"
            :class="post.card === 'big' ? 'BlogBigCard' : 'BlogSmallCard'"
            @click="conditionallyOpenArticle(post)"
          >
            <img
              alt="Blog card ambience-creating image"
              aria-hidden="true"
              :class="
                post.card === 'big' ? 'BlogBigCardPhoto' : 'BlogSmallCardPhoto'
              "
              :src="`../assets/images/BlogPhoto${post.id}.webp`"
            />
            <img
              alt="Blog card ambience-creating image"
              aria-hidden="true"
              v-if="post.card === 'big'"
              class="BlogBigCardPhotoMobile"
              :src="`../assets/images/BlogPhoto${post.id}Mobile.webp`"
            />
            <div class="BlogSmallCardContent">
              <h3
                class="font19"
                :class="
                  post.card === 'big'
                    ? 'BlogBigCardTitle BlogBigCardTitleFix'
                    : 'BlogSmallCardTitle'
                "
              >
                {{ post.title }}
              </h3>
              <p
                class="font9"
                :class="
                  post.card === 'big'
                    ? 'BlogBigCardDescription'
                    : 'BlogSmallCardDescription'
                "
              >
                {{ post.content }}
              </p>
            </div>
            <div
              :class="
                post.card === 'big'
                  ? 'BlogBigCardReactions'
                  : 'BlogSmallCardReactions'
              "
            >
              <button
                class="BlogBigCardReactionsDetails font3 pointer"
                @click="goToAnArticle(post.url)"
              >
                Подробнее
              </button>
              <UpvoteDeactivated
                v-if="!isLiked(post.id)"
                class="BlogBigCardReactionsUpvote pointer"
                @click.stop="likePostDB(post.id)"
              />
              <UpvoteActivated
                v-else
                class="BlogBigCardReactionsUpvote pointer"
                @click.stop="dislikePostDB(post.id)"
              />
            </div>
          </div>
        </div>
        <!-- <button class="BlogRedirection pointer" @click="goToArticles()">
          ПЕРЕЙТИ В БЛОГ
        </button> -->
        <nuxt-link
          class="BlogRedirection pointer"
          to="/articles"
          aria-label="Head to Blog page"
          >ПЕРЕЙТИ В БЛОГ</nuxt-link
        >
      </div>
    </section>
    <section class="line-13">
      <div class="AdditionalInfoBlock">
        <div
          class="AdditionalInfoBlockPadding"
          :class="{ expanded: !isAdditionalInfoBlockCollapsed }"
        >
          <h3 class="AdditionalInfoTitle font16">
            Чем webcam студия «KINKY STUDIO» лучше остальных?
          </h3>

          <div
            class="AdditionalInfoDescription AdditionalInfoDescription1 font1"
          >
            <p class="AdditionalInfoDescription AdditionalInfoDescription1-1">
              Количество<span class="font15"> вебкам-студий в СПб</span>
              постоянно растет. Однако не все они могут предоставить моделям
              такие условия, как наша.
            </p>

            <br />
            <p class="font15">Мы предлагаем:</p>

            <ul class="AdditionalInfoDescription AdditionalInfoDescription1-2">
              <li
                class="AdditionalInfoDescription AdditionalInfoDescription1-3"
              >
                Высокий процент дохода. Модели начинают с 55% дохода,
                получаемого на сайтах для взрослых, и постепенно увеличивают его
                до 70%.
              </li>
              <div
                v-show="!isAdditionalInfoBlockCollapsed"
                class="AdditionalInfoCollapsable"
              >
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Аванс и квартира для иногородних. Студия нацелена на
                  долгосрочное сотрудничество с моделями, поэтому мы помогаем,
                  выдавая аванс и предоставляя жилье. Это хорошая возможность
                  начать карьеру в
                  <span class="font15">вебкам-студии в СПб</span> для моделей из
                  других городов.
                </li>
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Гибкий посменный график. Вы можете выбрать для работы день,
                  вечер или ночь — любое время, чтобы вам было удобно совмещать
                  вебкам с учебой, другой работой и личной жизнью. Расписание
                  смен составляется с учетом ваших пожеланий.
                </li>
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Прозрачные и регулярные выплаты. Каждая модель видит, сколько
                  она заработала, и получает зарплату раз в две недели. Мы
                  всегда честны со своими сотрудниками и хотим, чтобы они ни в
                  чем не нуждались. За выход в не свою смену модель получает
                  оплату сразу же по ее окончании.
                </li>
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Стильные интерьеры. Наша
                  <span class="font15">webcam студия</span> обеспечивает моделям
                  максимально комфортные условия: отдельные звукоизолированные
                  комнаты с современным ремонтом и красивой мебелью.
                </li>
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Техническое обеспечение. Ноутбуки, компьютеры, камеры,
                  микрофоны, свет и все остальное оборудование предоставляет
                  <span class="font15">студия вебкам-моделей</span>. Вам не
                  нужно следить за его исправностью или настройками, за это
                  отвечают другие сотрудники.
                </li>
                <li
                  class="AdditionalInfoDescription AdditionalInfoDescription1-3"
                >
                  Помощь переводчика, администратора, услуги визажиста,
                  фотографа, продвижение в ТОП на сайтах для взрослых. Мы
                  создадим красивое и привлекательное портфолио с вашими фото, а
                  также поможем выйти в лидеры рейтингов на разных площадках.
                </li>
              </div>
            </ul>
            <div
              v-show="!isAdditionalInfoBlockCollapsed"
              class="AdditionalInfoCollapsable"
            >
              <p class="AdditionalInfoDescription1-4">
                Наша вебкам-студия в Санкт-Петербурге работает с 2019 года. Мы
                ценим наши сотрудников и делаем все, чтобы они были довольны
                своей работой.
              </p>

              <h4 class="AdditionalInfoDescription AdditionalInfoTitle font16">
                Кем можно работать онлайн в вебкам студии?
              </h4>
              <div
                class="AdditionalInfoDescription AdditionalInfoDescription2 font1"
              >
                <p class="AdditionalInfoDescription2-1">
                  <span class="font15">Онлайн вебкам студия</span> — это не
                  только модели, хотя они, безусловно, являются ее лицом. Другие
                  сотрудники, хоть и не появляются в кадре, тоже вносят важный
                  вклад в работу.
                </p>
                <ul
                  class="AdditionalInfoDescription AdditionalInfoDescription2-2"
                >
                  Среди них:
                  <li
                    class="AdditionalInfoDescription AdditionalInfoDescription2-3"
                  >
                    Операторы-переводчики. Это специалисты, задачей которых
                    является упростить взаимодействие между моделью и ее
                    зрителями. Переводчик общается в чате, помогает модели
                    понять, чего хотят зрители, а также стимулирует последних
                    тратить больше, благодаря чему растут доходы модели.
                  </li>
                  <li
                    class="AdditionalInfoDescription AdditionalInfoDescription2-3"
                  >
                    Администраторы. Поддерживают в студии порядок, согласовывают
                    с моделями графики работы, подсчитывают количество
                    отработанных смен и часов, ищут замену. Если это требуется.
                    А также регистрируют моделей на площадках и помогают в их
                    продвижении.
                  </li>
                  <li
                    class="AdditionalInfoDescription AdditionalInfoDescription2-3"
                  >
                    Агенты по поиску моделей. Общительность — их главная черта
                    характера. Умение расположить к себе незнакомого человека
                    тоже важно, как и способность правильно преподносить
                    преимущества работы в студии.
                  </li>
                </ul>
              </div>
              <h4 class="AdditionalInfoDescription AdditionalInfoTitle font16">
                Лучшие интерьеры вебкам студии в СПб
              </h4>
              <div
                class="AdditionalInfoDescription AdditionalInfoDescription3 font1"
              >
                <p
                  class="AdditionalInfoDescription AdditionalInfoDescription3-1"
                >
                  Если вас интересует
                  <span class="font15">webcam студия в СПб</span>, вы всегда
                  можете написать нам, а также ознакомиться с отзывами. Мы
                  публикуем их без прикрас, чтобы у вас было полное и
                  объективное представление о работе в нашей команде. Отзывы
                  оставляют не только модели, но и другие сотрудники, которые
                  работали с нами, или продолжают делать это сейчас.
                </p>
                <p
                  class="AdditionalInfoDescription AdditionalInfoDescription3-2"
                >
                  Мы не заявляем, что мы — лучшая студия в СПб. Однако мы делаем
                  все, чтобы ею стать: заботимся о комфорте и конфиденциальности
                  сотрудников, обеспечиваем их всем необходимым, помогаем войти
                  в профессию и достойно зарабатывать.
                </p>
              </div>
            </div>
          </div>
          <ArrowCircleDown
            class="AdditionalInfoArrow pointer"
            :class="{
              ArrowDownIconRotateUp: !isAdditionalInfoBlockCollapsed,
              collapsed: !isAdditionalInfoBlockCollapsed,
            }"
            @click="toggleAdditionalInfoBlock()"
          ></ArrowCircleDown>
        </div>
      </div>
    </section>
    <section class="line-14">
      <div class="ContactsBlock">
        <div class="MapTemplate" style="position: relative; overflow: hidden">
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Санкт‑Петербург</a
          ><a
            href="https://yandex.ru/maps/2/saint-petersburg/house/furshtatskaya_ulitsa_48/Z0kYdQFjT0EOQFtjfXV1dH9nYg==/?ll=30.363813%2C59.945229&utm_medium=mapframe&utm_source=maps&z=15.4"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Фурштатская улица, 48 — Яндекс Карты</a
          ><iframe
            title="Embedded Map"
            class="MapTemplateIframe"
            src="https://yandex.ru/map-widget/v1/?ll=30.363813%2C59.945229&mode=whatshere&whatshere%5Bpoint%5D=30.362980%2C59.945548&whatshere%5Bzoom%5D=17&z=15.4"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
        <div
          class="MapTemplateMobile"
          style="position: relative; overflow: hidden"
        >
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Санкт‑Петербург</a
          ><a
            href="https://yandex.ru/maps/2/saint-petersburg/house/furshtatskaya_ulitsa_48/Z0kYdQFjT0EOQFtjfXV1dH9nYg==/?ll=30.364070%2C59.945433&utm_medium=mapframe&utm_source=maps&z=15.2"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Фурштатская улица, 48 — Яндекс Карты</a
          ><iframe
            title="Embedded Map mobile version"
            class="MapTemplateMobileIframe"
            src="https://yandex.ru/map-widget/v1/?ll=30.364070%2C59.945433&mode=whatshere&whatshere%5Bpoint%5D=30.362898%2C59.945434&whatshere%5Bzoom%5D=17&z=15.2"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
        <div class="ContactsTemplate">
          <h2 id="ContactsElement" class="ContactsTitle">КОНТАКТНЫЕ ДАННЫЕ</h2>
          <div class="ContactsGrid">
            <div class="ContactsLocation">
              <ContactsLocationIcon class="ContactsLocationIcon" />
              <ContactsLocationIconWhite class="ContactsLocationIconWhite" />
              <p class="ContactsLocationText">
                Адрес:<br /><span class="ContactsLocationTextSpan"
                  >Фурштатская, 48</span
                >
              </p>
            </div>
            <p class="MetroText">
              Ближайшее метро:<br /><span class="MetroTextSpan"
                >м. Чернышевская</span
              >
            </p>
            <div class="ContactsPhone">
              <ContactsPhoneIcon class="ContactsPhoneIcon" />
              <div class="ContactsPhoneNumber font9">
                Телефон:<br /><span
                  class="ContactsPhoneNumberSpan font16"
                  @click="copyPhoneNumber()"
                  ><a
                    href="tel:89650022072"
                    class="tel pointer font16"
                    @click="copyPhoneNumber()"
                  >
                    8 (965) 002-20-72</a
                  ></span
                >
              </div>
            </div>
            <div class="ContactsTelegram">
              <ContactsTelegramIcon class="ContactsTelegramIcon" />
              <p class="ContactsTelegramTag font9">
                Telegram:<br /><a
                  href="https://t.me/kinkystudio"
                  class="ContactsTelegramTagSpan font23"
                  >@kinkystudio</a
                >
              </p>
            </div>
            <div class="ContactsInstagram">
              <ContactsInstagramIcon class="ContactsInstagramIcon" />
              <p class="ContactsInstagramTag font9">
                Instagram:<br /><a
                  href="https://www.instagram.com/agency_kinky/"
                  class="ContactsInstagramTagSpan font23"
                  >agency_kinky</a
                >
              </p>
            </div>
          </div>
          <button
            class="ContactsQuestionnaire pointer"
            @click.prevent="toggleOverlayStatus(), toggleQuestionnairePopup()"
          >
            ЗАПОЛНИТЬ АНКЕТУ
          </button>
        </div>
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
import ArrowCircleDown from "@/assets/icons/ArrowCircleDown.vue";
import ArrowCircleUp from "@/assets/icons/ArrowCircleUp.vue";
import ArrowCircleLeft from "@/assets/icons/ArrowCircleLeft.vue";
import ArrowCircleRight from "@/assets/icons/ArrowCircleRight.vue";
import ContactsInstagramIcon from "@/assets/icons/ContactsInstagramIcon.vue";
import ContactsLocationIcon from "@/assets/icons/ContactsLocationIcon.vue";
import ContactsLocationIconWhite from "@/assets/icons/ContactsLocationIconWhite.vue";
import ContactsPhoneIcon from "@/assets/icons/ContactsPhoneIcon.vue";
import ContactsTelegramIcon from "@/assets/icons/ContactsTelegramIcon.vue";
import EmploymentCircleWithShadow from "@/assets/icons/EmploymentCircleWithShadow.vue";
import EmploymentCircleWithShadowMobile from "@/assets/icons/EmploymentCircleWithShadowMobile.vue";
import EmploymentNumFour from "@/assets/icons/EmploymentNumFour.vue";
import EmploymentNumFourMobile from "@/assets/icons/EmploymentNumFourMobile.vue";
import EmploymentNumFourTablet from "@/assets/icons/EmploymentNumFourTablet.vue";
import EmploymentNumOne from "@/assets/icons/EmploymentNumOne.vue";
import EmploymentNumOneMobile from "@/assets/icons/EmploymentNumOneMobile.vue";
import EmploymentNumOneTablet from "@/assets/icons/EmploymentNumOneTablet.vue";
import EmploymentNumThree from "@/assets/icons/EmploymentNumThree.vue";
import EmploymentNumThreeMobile from "@/assets/icons/EmploymentNumThreeMobile.vue";
import EmploymentNumThreeTablet from "@/assets/icons/EmploymentNumThreeTablet.vue";
import EmploymentNumTwo from "@/assets/icons/EmploymentNumTwo.vue";
import EmploymentNumTwoMobile from "@/assets/icons/EmploymentNumTwoMobile.vue";
import EmploymentNumTwoTablet from "@/assets/icons/EmploymentNumTwoTablet.vue";
import FaqHorizontalLine from "@/assets/icons/FaqHorizontalLine.vue";
import Features1 from "@/assets/icons/Features-1.vue";
import Features2 from "@/assets/icons/Features-2.vue";
import Features3 from "@/assets/icons/Features-3.vue";
import Features4 from "@/assets/icons/Features-4.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";
import HiringPosition1bg from "@/assets/icons/HiringPosition1bg.vue";
import HiringPosition2bg from "@/assets/icons/HiringPosition2bg.vue";
import HiringPosition3bg from "@/assets/icons/HiringPosition3bg.vue";
import HiringPosition4bg from "@/assets/icons/HiringPosition4bg.vue";
import HiringPosition5bg from "@/assets/icons/HiringPosition5bg.vue";
import InfoSmallIcon from "@/assets/icons/InfoSmallIcon.vue";
import LoadingIcon from "@/components/loading-icon.vue";
import ProsCircle from "@/assets/icons/ProsCircle.vue";
import ScrollBarDistanceIndicatorDot from "@/assets/icons/ScrollBarDistanceIndicatorDot.vue";
import UpvoteDeactivated from "@/assets/icons/UpvoteDeactivated.vue";
import UpvoteActivated from "@/assets/icons/UpvoteActivated.vue";
import XmarkIcon from "@/assets/icons/XmarkIcon.vue";

import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  defineAsyncComponent,
} from "vue";

const ImgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const StaticFormsApiKey = import.meta.env.VITE_STATIC_FORMS_API_KEY;

import { supabase } from "@/supabaseClient.js";

onMounted(() => {
  cloneElementsInfinitely();
  cloneElementsInfinitelyInterior();
  updateActiveDotIndex();
  updateActiveDotIndexInterior();
  loadLikedPosts();
  adaptImgWidth();
  fixPaddingIos();
  dbKeepAlive();

  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWindowWidth);
  }

  document.addEventListener("mouseup", dragStop);
  document.addEventListener("touchend", dragStop);
  document.addEventListener("touchcancel", dragStop);

  isComponentLoaded.value = true;
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }

  document.removeEventListener("mouseup", dragStop);
  document.removeEventListener("touchend", dragStop);
  document.removeEventListener("touchcancel", dragStop);
});

// Meta Tags Metadata

useHead({
  title: "Студия вебкам моделей в Санкт Петербурге KINKY STUDIO",
  meta: [
    {
      name: "description",
      content:
        "Студия вебкам моделей «KINKY STUDIO». Мы одна из лучших Webcam студий в СПб где парни и девушки могут заработать хорошие деньги в комфортных условиях",
    },
  ],
  htmlAttrs: {
    lang: "ru",
  },
  link: [
    {
      rel: "preload",
      href: "/assets/fonts/Gwendolyn/Gwendolyn-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/assets/fonts/GraphikLCG/GraphikLCG-Bold.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/assets/fonts/GraphikLCG/GraphikLCG-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/assets/fonts/GraphikLCG/GraphikLCG-Light.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/assets/fonts/GraphikLCG/GraphikLCG-Extralight.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
});

// Misc methods start

const BackgroundIndex = defineAsyncComponent(() =>
  import("@/components/background-index.vue")
);

const isComponentLoaded = ref(false);

async function dbKeepAlive() {
  try {
    const { data, error: selectError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", 999999);

    if (selectError) {
      throw selectError;
    }

    if (data && data.length > 0) {
      const existingLikes = data[0].likes;
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: existingLikes + 1 })
        .eq("post_id", 999999);

      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase
        .from("blogpostslikes")
        .insert([{ post_id: 999999, likes: 1 }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error("Error incrementing likes:", error.message);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
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
// function goToArticles() {
//   window.open("/articles", "_blank", "noopener,noreferrer");
// }
function goToAnArticle(articleID) {
  window.open(`/articles/${articleID}`, "_blank", "noopener,noreferrer");
}
function goToPrivacyPolicy() {
  window.open("/privacy-policy", "_blank", "noopener,noreferrer");
}

let isAdditionalInfoBlockCollapsed = ref(true);
function toggleAdditionalInfoBlock() {
  isAdditionalInfoBlockCollapsed.value = !isAdditionalInfoBlockCollapsed.value;
}

function conditionallyOpenArticle(post) {
  if (window.innerWidth > 1601) return;
  goToAnArticle(post.url);
}

const isDeviceIos = ref(false);
function fixPaddingIos() {
  if (!isIos()) return;
  isDeviceIos.value = true;
}
function isIos() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const phoneNumber = "+79650022072";
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
async function copyPhoneNumber() {
  if (!isMobileDevice()) {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Номер скопирован");
      console.log("Phone number copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
}

// Misc methods end

// Review Image Slider start

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
}
function updateWindowWidth() {
  windowWidth.value = window.innerWidth;
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
    }
    const scrollYDiff = -(currentY - startY);
    targetScrollY += scrollYDiff;
    requestAnimationFrame(smoothScroll);
    startY = currentY;
    return;
  }

  if (isScrollVertical.value) {
    isScrollVertical.value = false;
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

function dragStop(e) {
  draggingStarted.value = false;
  draggingActive.value = false;
  isScrollVertical.value = false;

  // Reattach the dragging event listeners when interaction stops
  document.addEventListener("mousemove", dragging, { passive: false });
  document.addEventListener("touchmove", dragging, { passive: false });

  // Clean up after dragging stops
  autoSlide();
  updateActiveDotIndex();

  // Ensure event listeners are reattached only once when stopping
  document.removeEventListener("mouseup", dragStop);
  document.removeEventListener("touchend", dragStop);
  document.removeEventListener("touchcancel", dragStop);
}

let isScrolling = false;
function moveCard(element) {
  if (isScrolling) return;
  isScrolling = true;

  const distanceToScrollTo = Math.ceil(
    carousel.value.scrollLeft +
      (element.target.id == "ArrowLeftIcon" ? -imgWidth.value : imgWidth.value)
  );
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

  let currentCardIndex = Math.floor(currentScroll / imgWidth.value);
  let dragFraction = Math.abs(positionDiff) / imgWidth.value;

  let moveToNextCard = currentCardIndex;

  if (dragFraction == prevDragFraction.value) return;
  prevDragFraction.value = dragFraction;
  if (dragFraction > threshold && direction > 0) {
    moveToNextCard += direction;
  } else if (dragFraction > threshold && direction < 0) {
    moveToNextCard;
  } else if (dragFraction < threshold && direction < 0) {
    moveToNextCard += 1;
  }

  moveToNextCard = Math.max(
    0,
    Math.min(
      moveToNextCard,
      Math.floor(carousel.value.scrollWidth / imgWidth.value) - 1
    )
  );

  let newScrollPosition = moveToNextCard * imgWidth.value;

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

// Overlay and questionnaire starts

let isOverlayActive = ref(false);
function toggleOverlayStatus() {
  isOverlayActive.value = !isOverlayActive.value;
}

let isQuestionnaireActive = ref(false);
function toggleQuestionnairePopup() {
  isQuestionnaireActive.value = !isQuestionnaireActive.value;
}
function closeQuestionnaitePopup() {
  isQuestionnaireActive.value = false;
}

let isQuestionnaireSendingRequest = ref(false);
function toggleQuestionnaireSending() {
  isQuestionnaireSendingRequest.value = !isQuestionnaireSendingRequest.value;
}

let isTyActive = ref(false);
function toggleTyPopup() {
  isTyActive.value = !isTyActive.value;
}
function closeTyPopup() {
  isTyActive.value = false;
}

let roleInput = ref("Модель");
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

  closeQuestionnaitePopup();
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
      console.log(`Failed to upload file: File upload went wrong`);
      return "NotStated";
    }

    const jsonResponse = await response.json();
    return jsonResponse.data.url;
  } catch {
    // throw new Error(`Upload failed: ${response.statusText}`);
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

// Embedded video 1
let isEmbeddedVidOneActive = ref(false);
function toggleEmbeddedVidOne() {
  isEmbeddedVidOneActive.value = !isEmbeddedVidOneActive.value;
}
function watchVidOne() {
  toggleEmbeddedVidOne();
  toggleOverlayStatus();
}
function closeVidOne() {
  isEmbeddedVidOneActive.value = false;
}

// Embedded video 2
let isEmbeddedVidTwoActive = ref(false);
function toggleEmbeddedVidTwo() {
  isEmbeddedVidTwoActive.value = !isEmbeddedVidTwoActive.value;
}
function watchVidTwo() {
  toggleEmbeddedVidTwo();
  toggleOverlayStatus();
}
function closeVidTwo() {
  isEmbeddedVidTwoActive.value = false;
}

// Overlay and questionnaire ends

// FAQ table starts

import faqData from "@/src/assets/faq.json";
const faq = reactive(
  faqData.map((item) => ({ ...item, expanded: false })).slice(0, 6)
);

const columnOneFaq = computed(() => {
  return faq.filter((faq) => (faq.id + 1) % 3 === 1);
});
const columnTwoFaq = computed(() => {
  return faq.filter((faq) => (faq.id + 1) % 3 === 0);
});
const columnThreeFaq = computed(() => {
  return faq.filter((faq) => (faq.id + 1) % 3 === 2);
});

const toggleFaqCard = (id) => {
  faq.forEach((faqCard) => {
    if (faqCard.id === id) {
      faqCard.expanded = !faqCard.expanded;
    } else {
      faqCard.expanded = false;
    }
  });
};

const isCardExpanded = (id) => {
  const faqCard = faq.find((faqCard) => faqCard.id === id);
  const expanded = faqCard ? faqCard.expanded : false;
  return expanded;
};

// FAQ table ends

// Calculator starts

let daysChosen = ref(5);
let hoursChosen = ref(5);
let engChosen = ref(3);
function changeDays(event) {
  const button = event.target;
  const number = parseInt(button.innerHTML.trim());
  daysChosen.value = number;
}
function changeHours(event) {
  const button = event.target;
  const number = parseInt(button.innerHTML.trim());
  hoursChosen.value = number;
}
function changeEng(event) {
  const button = event.target;
  const number = parseInt(button.innerHTML.trim());
  engChosen.value = number;
}

let calculatedResultWeeklyRaw = computed(() => {
  const flatFee = [100, 150, 200, 250, 600, 850];
  // const flatFee = [100, 150, 200, 250, 350, 450];
  const hourlyRate = [35, 35, 50, 50, 50, 50];
  const exchangeRate = 89;

  return parseInt(
    (flatFee[engChosen.value] +
      (hoursChosen.value - 5) * hourlyRate[engChosen.value]) *
      daysChosen.value *
      exchangeRate
  );
});
const calculatedResultWeekly = computed(() => {
  return formatNumber(calculatedResultWeeklyRaw.value);
});
const calculatedResultMonthly = computed(() => {
  const monthlyRaw = calculatedResultWeeklyRaw.value * 4;
  return formatNumber(monthlyRaw);
});
const calculatedResultYearly = computed(() => {
  const yearlyRaw = calculatedResultWeeklyRaw.value * 4 * 12;
  return formatNumber(yearlyRaw);
});

function formatNumber(number) {
  number = number.toString().replace(/\s/g, "");
  return number
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .join(" ")
    .split("")
    .reverse()
    .join("");
}

// Calculator ends

// Review Image Slider #2 start

const carouselInterior = ref();
const firstCardInterior = ref();

let imgWidthInterior = 1308;
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

  let currentCardIndexInterior = Math.floor(
    currentScrollInterior / imgWidthInterior
  );
  let dragFractionInterior = Math.abs(positionDiffInterior) / imgWidthInterior;

  let moveToNextCardInterior = currentCardIndexInterior;

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

  moveToNextCardInterior = Math.max(
    0,
    Math.min(
      moveToNextCardInterior,
      Math.floor(carouselInterior.value.scrollWidth / imgWidthInterior) - 1
    )
  );

  let newScrollPositionInterior = moveToNextCardInterior * imgWidthInterior;

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

// Blog posts likes start

import posts from "@/src/assets/posts.json";

const limitedPosts = computed(() => {
  let slicedPosts = posts.slice(0, 5);
  let bigCardIndex = slicedPosts.findIndex((post) => post.card === "big");

  let [bigPost] = slicedPosts.splice(bigCardIndex, 1);
  slicedPosts.unshift(bigPost);

  return slicedPosts;
});

const likedPostsIds = ref([]);
function loadLikedPosts() {
  likedPostsIds.value = JSON.parse(localStorage.getItem("likedPosts") || "[]");
}

function isLiked(postId) {
  return likedPostsIds.value.includes(postId);
}

function toggleLike(postId) {
  const index = likedPostsIds.value.indexOf(postId);
  if (index === -1) {
    likedPostsIds.value.push(postId);
  } else {
    likedPostsIds.value.splice(index, 1);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("likedPosts", JSON.stringify(likedPostsIds.value));
  }
}

// Database Supabase starts

const operationInProgress = ref(false);

async function likePostDB(postId) {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }

  try {
    const { data, error: selectError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", postId);

    if (selectError) {
      throw selectError;
    }

    if (data && data.length > 0) {
      const existingLikes = data[0].likes;
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: existingLikes + 1 })
        .eq("post_id", postId);

      if (updateError) throw updateError;
      else await toggleLike(postId);
    } else {
      const { error: insertError } = await supabase
        .from("blogpostslikes")
        .insert([{ post_id: postId, likes: 1 }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error("Error incrementing likes:", error.message);
  } finally {
    operationInProgress.value = false;
  }
}

async function dislikePostDB(postId) {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (!likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }

  try {
    const { data: currentData, error: fetchError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", postId)
      .single();

    if (fetchError) throw fetchError;

    if (currentData && currentData.likes > 0) {
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: currentData.likes - 1 })
        .eq("post_id", postId);

      if (updateError) throw updateError;
      else await toggleLike(postId);
    }
  } catch (error) {
    console.error("Error decrementing likes:", error.message);
  } finally {
    operationInProgress.value = false;
  }
}

// Database Supabase ends

// Blog posts likes end

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

// EXP EXP EXP starts

// EXP EXP EXP ends
</script>
<style>
@import "@/assets/styles/style.css";
</style>
