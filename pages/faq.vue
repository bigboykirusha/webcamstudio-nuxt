<template>
  <section class="Popups">
    <div
      id="overlay"
      class="overlay"
      :class="{
        active: isOverlayActive,
      }"
      @click="toggleOverlayStatus(), closeVidTwo()"
      :aria-hidden="!isOverlayActive ? 'true' : 'false'"
    ></div>
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
  </section>

  <header>
    <h1 class="InteriorTitle">
      ВОПРОСЫ О <span class="InteriorTitleSpan">KINKY STUDIO</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/faq">Вопросы</nuxt-link>
    </nav>
  </header>

  <main>
    <section class="FaqBlock">
      <background-faq />
      <div class="FaqTable">
        <div class="FaqColumn FaqColumnOne">
          <div
            class="FaqCard"
            :data-id="faqCard.id"
            v-for="faqCard in columnOneFaq"
            :key="faqCard.id"
            :class="{ expanded: isCardExpanded(faqCard.id) }"
          >
            <h3 class="FaqCardQuestion">{{ faqCard.question }}</h3>
            <ArrowCircleDown
              class="FaqCardArrow"
              :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
              @click="toggleFaqCard(faqCard.id)"
            />
            <h4 v-show="isCardExpanded(faqCard.id)" class="FaqCardAnswer">
              {{ faqCard.answer }}
            </h4>
          </div>
        </div>
        <div class="FaqColumn FaqColumnTwo">
          <div
            class="FaqCard"
            v-for="faqCard in columnTwoFaq"
            :key="faqCard.id"
          >
            <div class="FaqCardQuestion font14">{{ faqCard.question }}</div>
            <ArrowCircleDown
              class="FaqCardArrow"
              :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
              @click="toggleFaqCard(faqCard.id)"
            />
            <div
              v-show="isCardExpanded(faqCard.id)"
              class="FaqCardAnswer font9"
            >
              {{ faqCard.answer }}
            </div>
          </div>
        </div>
        <div class="FaqColumn FaqColumnThree">
          <div
            class="FaqCard"
            v-for="faqCard in columnThreeFaq"
            :key="faqCard.id"
          >
            <div class="FaqCardQuestion font14">{{ faqCard.question }}</div>
            <ArrowCircleDown
              class="FaqCardArrow"
              :class="{ ArrowDownIconRotateUp: isCardExpanded(faqCard.id) }"
              @click="toggleFaqCard(faqCard.id)"
            />
            <div
              v-show="isCardExpanded(faqCard.id)"
              class="FaqCardAnswer font9"
            >
              {{ faqCard.answer }}
            </div>
          </div>
        </div>
        <div class="EmbeddedVideoBlock2 pointer" @click="watchVidTwo()">
          <div class="EmbeddedVideoBlockContainer2">
            <img class="" src="../assets/images/EmbeddedVideoYT2.webp" />
          </div>
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
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";

import { ref, computed, onMounted } from "vue";

onMounted(() => {});

// Meta Tags Metadata
useHead({
  title: "Вопросы о KINKY STUDIO",
  meta: [
    {
      name: "description",
      content: "FAQ KINKY STUDIO",
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

// Misc methods end

// FAQ table starts

import faqData from "@/src/assets/faq.json";
const faq = reactive(faqData.map((item) => ({ ...item, expanded: false })));

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

// Overlay and video start

function watchVidTwo() {
  toggleEmbeddedVidTwo();
  toggleOverlayStatus();
}

let isEmbeddedVidTwoActive = ref(false);
function toggleEmbeddedVidTwo() {
  isEmbeddedVidTwoActive.value = !isEmbeddedVidTwoActive.value;
}

let isOverlayActive = ref(false);
function toggleOverlayStatus() {
  isOverlayActive.value = !isOverlayActive.value;
}

function closeVidTwo() {
  isEmbeddedVidTwoActive.value = false;
}

// Overlay and video end
</script>
<style scoped>
@import "@/assets/styles/FaqStyle.css";
</style>
