<template>
  <div class="Background">
    <div class="Website">
      <header>
        <div class="Popups">
          <div
            class="overlayMobile"
            :class="{
              active: isOverlayActive,
            }"
            @click="toggleOverlayStatus(), toggleBurgerMenuStatus()"
            :aria-hidden="!isOverlayActive ? 'true' : 'false'"
          ></div>
        </div>
        <section class="HeadElement">
          <nuxt-link
            class="noDecorationLink"
            to="/"
            aria-label="Head to Home page"
            ><HeadLogo class="HeadLogo"
          /></nuxt-link>
          <nav class="HeadTabs">
            <nuxt-link
              v-for="tab in tabs"
              :key="tab.path"
              :to="tab.path"
              class="HeadTabsLink noDecorationLink"
              :class="{ active: isActiveTab(tab.path) || isNoneMatch }"
            >
              <div :class="['HeadTabsItem', tab.class]">{{ tab.name }}</div>
            </nuxt-link>
            <div
              class="HeadTabsLink noDecorationLink HeadTabsItem HeadTabsContacts"
              :class="{ active: isNoneMatch }"
              @click="scrollToElement('#ContactsElement')"
            >
              КОНТАКТЫ
            </div>
          </nav>
          <a href="tel:89650022072" class="flex tel" @click="copyPhoneNumber()">
            <PhoneIcon class="PhoneIcon" @click="copyPhoneNumber()" />
            <div class="HeadContactNumber font2" @click="copyPhoneNumber()">
              8 (965) 002-20-72
            </div>
          </a>
          <button class="HeadContactTelegram font3">
            <a
              href="https://t.me/kinkystudio"
              class="Telegram HeadContactTelegram pointer"
              >Написать в Telegram</a
            >
          </button>
          <div v-if="isBurgerMenuActive" class="BurgerMenuExpanded font26">
            <XmarkIcon
              class="CloseBurgerMenuButton pointer"
              @click="toggleOverlayStatus(), toggleBurgerMenuStatus()"
            />
            <div class="BurgerMenuFlexFix">
              <div
                class="BurgerMenuStudioLogoContainer noDecorationLink selectNone"
              >
                <HeadLogo class="BurgerMenuStudioLogo" />
              </div>
              <ul class="BurgerMenuNavElements">
                <li class="BurgerMenuNavElement">
                  <nuxt-link
                    class="noDecorationLink BurgerMenuNavElementLink"
                    to="/vakancy"
                    @click="toggleBurgerMenuStatus(), toggleOverlayStatus()"
                    >ВАКАНСИИ</nuxt-link
                  >
                </li>
                <li class="BurgerMenuNavElement">
                  <nuxt-link
                    class="noDecorationLink BurgerMenuNavElementLink"
                    to="/reviews"
                    @click="toggleBurgerMenuStatus(), toggleOverlayStatus()"
                    >ОТЗЫВЫ</nuxt-link
                  >
                </li>
                <li class="BurgerMenuNavElement">
                  <nuxt-link
                    class="noDecorationLink BurgerMenuNavElementLink"
                    to="/faq"
                    @click="toggleBurgerMenuStatus(), toggleOverlayStatus()"
                    >ВОПРОСЫ</nuxt-link
                  >
                </li>
                <li class="BurgerMenuNavElement">
                  <nuxt-link
                    class="noDecorationLink BurgerMenuNavElementLink"
                    to="/interyer"
                    @click="toggleBurgerMenuStatus(), toggleOverlayStatus()"
                    >ИНТЕРЬЕРЫ</nuxt-link
                  >
                </li>
                <li class="BurgerMenuNavElement">
                  <nuxt-link
                    class="noDecorationLink BurgerMenuNavElementLink"
                    to="/articles"
                    @click="toggleBurgerMenuStatus(), toggleOverlayStatus()"
                    >БЛОГ</nuxt-link
                  >
                </li>
                <li
                  class="BurgerMenuNavElement BurgerMenuNavElementLink"
                  @click="
                    scrollToElement('#ContactsElement'),
                      toggleOverlayStatus(),
                      toggleBurgerMenuStatus()
                  "
                >
                  КОНТАКТЫ
                </li>
              </ul>
              <a
                href="tel:89650022072"
                class="BurgerMenuNumberBlock pointer tel"
                @click="copyPhoneNumber()"
              >
                <PhoneIconMobile
                  class="BurgerMenuPhoneIcon"
                  @click="copyPhoneNumber()"
                />
                <div class="BurgerMenuNumber font16" @click="copyPhoneNumber()">
                  8 (965) 002-20-72
                </div>
              </a>
              <a
                href="https://t.me/kinkystudio"
                class="BurgerMenuTelegram font3 pointer"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
          <div
            v-else
            class="BurgerMenuContainer"
            @click="toggleOverlayStatus(), toggleBurgerMenuStatus()"
          >
            <BurgerMenu class="BurgerMenuButton" />
          </div>
        </section>
      </header>
      <slot />
    </div>
  </div>
</template>
<script setup>
import { provide, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeadLogo from "@/assets/icons/HeadLogo.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import BurgerMenu from "@/assets/icons/BurgerMenu.vue";
import XmarkIcon from "@/assets/icons/XmarkIcon.vue";
import PhoneIconMobile from "@/assets/icons/PhoneIconMobile.vue";

// Go home and scroll to contacts
const router = useRouter();
let fullPath = router.currentRoute._value.fullPath;

const scrollToElement = (selector) => {
  fullPath = router.currentRoute._value.fullPath;
  if (fullPath != "/") {
    // console.log(fullPath);
    router.push("/");
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }, 700);
  }
  if (fullPath == "/") {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  }
};

// Provide
provide("scrollToElement", scrollToElement);

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

// Overlay
let isOverlayActive = ref(false);
function toggleOverlayStatus() {
  isOverlayActive.value = !isOverlayActive.value;
}
// Burger menu
let isBurgerMenuActive = ref(false);
function toggleBurgerMenuStatus() {
  isBurgerMenuActive.value = !isBurgerMenuActive.value;
}

// Highlight nav tabs starts

const tabs = [
  { name: "ВАКАНСИИ", path: "/vakancy", class: "HeadTabsVakancy" },
  { name: "ОТЗЫВЫ", path: "/reviews", class: "HeadTabsReviews" },
  { name: "ВОПРОСЫ", path: "/faq", class: "HeadTabsFaq" },
  { name: "ИНТЕРЬЕРЫ", path: "/interyer", class: "HeadTabsInteryer" },
  { name: "БЛОГ", path: "/articles", class: "HeadTabsArticles" },
];

const route = useRoute();

const isActiveTab = (path) => {
  const routeSegments = route.path.split("/").filter(Boolean);
  const tabSegments = path.split("/").filter(Boolean);
  return (
    route.path === path ||
    (routeSegments.length === tabSegments.length + 1 &&
      route.path.startsWith(path))
  );
};

const isNoneMatch = computed(() => {
  return !tabs.some(
    (tab) =>
      route.path === tab.path ||
      (route.path.startsWith(tab.path) &&
        route.path.charAt(tab.path.length) === "/")
  );
});

// Highlight nav tabs ends
</script>
<style scoped>
@import "@/assets/styles/DefaultLayoutStyle.css";
</style>
