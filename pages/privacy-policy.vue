<template>
  <header>
    <h1 class="InteriorTitle">
      ПОЛИТИКА <span class="InteriorTitleSpan">КОНФИДЕНЦИАЛЬНОСТИ</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/privacy-policy"
        >Политика конфиденциальности</nuxt-link
      >
    </nav>
  </header>

  <main>
    <section class="Hiring">
      <h4 class="HiringVakOnePositionVakancies">
        <div class="HiringPositionTextContainer">
          <div class="HiringVakOnePositionDescription font1">
            <div
              class="HiringVakOneDescriptionMargin"
              :class="{
                active: !isAdditionalInfoBlockCollapsed,
              }"
            >
              <p class="HiringPositionTextContainerTitle">Кто мы</p>
              <p class="">Наш адрес сайта: http://kinky.op.</p>
              <p class="HiringPositionTextContainerTitle">
                Какие персональные данные мы собираем и с какой целью
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold">Комментарии</span>
              </p>
              <p class="">
                Если посетитель оставляет комментарий на сайте, мы собираем
                данные указанные в форме комментария, а также IP адрес
                посетителя и данные user-agent браузера с целью определения
                спама.
              </p>
              <p class="">
                Анонимизированная строка создаваемая из вашего адреса email
                (“хеш”) может предоставляться сервису Gravatar, чтобы определить
                используете ли вы его. Политика конфиденциальности Gravatar
                доступна здесь: https://automattic.com/privacy/ . После
                одобрения комментария ваше изображение профиля будет видимым
                публично в контексте вашего комментария.
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold">Медиафайлы</span>
              </p>
              <p class="">
                Если вы зарегистрированный пользователь и загружаете фотографии
                на сайт, вам возможно следует избегать загрузки изображений с
                метаданными EXIF, так как они могут содержать данные вашего
                месторасположения по GPS. Посетители могут извлечь эту
                информацию скачав изображения с сайта.
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Формы контактов</span
                >
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold">Куки</span>
              </p>
              <p class="">
                Если вы оставляете комментарий на нашем сайте, вы можете
                включить сохранение вашего имени, адреса email и вебсайта в
                куки. Это делается для вашего удобства, чтобы не заполнять
                данные снова при повторном комментировании. Эти куки хранятся в
                течение одного года.
              </p>
              <p class="">
                Если у вас есть учетная запись на сайте и вы войдете в неё, мы
                установим временный куки для определения поддержки куки вашим
                браузером, куки не содержит никакой личной информации и
                удаляется при закрытии вашего браузера.
              </p>
              <p class="">
                При входе в учетную запись мы также устанавливаем несколько куки
                с данными входа и настройками экрана. Куки входа хранятся в
                течение двух дней, куки с настройками экрана – год. Если вы
                выберете возможность “Запомнить меня”, данные о входе будут
                сохраняться в течение двух недель. При выходе из учетной записи
                куки входа будут удалены.
              </p>
              <p class="">
                При редактировании или публикации статьи в браузере будет
                сохранен дополнительный куки, он не содержит персональных данных
                и содержит только ID записи отредактированной вами, истекает
                через 1 день.
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Встраиваемое содержимое других вебсайтов</span
                >
              </p>
              <p class="">
                Статьи на этом сайте могут включать встраиваемое содержимое
                (например видео, изображения, статьи и др.), подобное содержимое
                ведет себя так же, как если бы посетитель зашел на другой сайт.
              </p>
              <p class="">
                Эти сайты могут собирать данные о вас, использовать куки,
                внедрять дополнительное отслеживание третьей стороной и следить
                за вашим взаимодействием с внедренным содержимым, включая
                отслеживание взаимодействия, если у вас есть учетная запись и вы
                авторизовались на том сайте.
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Веб-аналитика</span
                >
              </p>
              <p class="HiringPositionTextContainerTitle">
                С кем мы делимся вашими данными
              </p>
              <p class="HiringPositionTextContainerTitle">
                Как долго мы храним ваши данные
              </p>
              <p class="">
                Если вы оставляете комментарий, то сам комментарий и его
                метаданные сохраняются неопределенно долго. Это делается для
                того, чтобы определять и одобрять последующие комментарии
                автоматически, вместо помещения их в очередь на одобрение.
              </p>
              <p class="">
                Для пользователей с регистрацией на нашем сайте мы храним ту
                личную информацию, которую они указывают в своем профиле. Все
                пользователи могут видеть, редактировать или удалить свою
                информацию из профиля в любое время (кроме имени пользователя).
                Администрация вебсайта также может видеть и изменять эту
                информацию.
              </p>
              <p class="HiringPositionTextContainerTitle">
                Какие у вас права на ваши данные
              </p>
              <p class="">
                При наличии учетной записи на сайте или если вы оставляли
                комментарии, то вы можете запросить файл экспорта персональных
                данных, которые мы сохранили о вас, включая предоставленные вами
                данные. Вы также можете запросить удаление этих данных, это не
                включает данные, которые мы обязаны хранить в административных
                целях, по закону или целях безопасности.
              </p>
              <p class="HiringPositionTextContainerTitle">
                Куда мы отправляем ваши данные
              </p>
              <p class="">
                Комментарии пользователей могут проверяться автоматическим
                сервисом определения спама.
              </p>
              <p class="HiringPositionTextContainerTitle">
                Ваша контактная информация
              </p>
              <p class="HiringPositionTextContainerTitle">
                Дополнительная информация
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Как мы защищаем ваши данные</span
                >
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Какие принимаются процедуры против взлома данных</span
                >
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >От каких третьих сторон мы получаем данные</span
                >
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Какие автоматические решения принимаются на основе данных
                  пользователей</span
                >
              </p>
              <p class="">
                <span class="HiringPositionTextContainerBold"
                  >Требования к раскрытию отраслевых нормативных требований
                </span>
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
import ArrowCircleUp from "@/assets/icons/ArrowCircleUp.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

// Misc methods start

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

// Meta Tags Metadata
useHead({
  title: "Политика конфиденциальности",
  meta: [
    {
      name: "description",
      content: "Privacy Policy",
    },
  ],
});
</script>
<style scoped>
@import "@/assets/styles/PrivacyPolicy.css";
</style>
