<template>
  <div class="BackgroundTextBlock">
    <div class="BackgroundText">
      <BackgroundText4
        class="BackgroundText4 font11 actionsNone"
        style="z-index: 1"
        :style="{
          width: '',
          height: '',
          position: 'absolute',
          top: '-530px',
          left: '0px',
          opacity: '0.65',
        }"
      />
      <BackgroundCircle5
        class="1 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '186px',
          height: '186px',
          position: 'absolute',
          top: '-200px',
          left: '0px',
        }"
      />
      <BackgroundCircle5
        class="2 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '386px',
          height: '386px',
          position: 'absolute',
          top: '900px',
          left: '1500px',
        }"
      />
      <BackgroundCircle5
        class="3 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '386px',
          height: '386px',
          position: 'absolute',
          top: '1900px',
          left: '-100px',
        }"
      />
      <BackgroundText5
        class="BackgroundText5 font11 actionsNone"
        style="z-index: 1"
        :style="{
          width: '',
          height: '',
          position: 'absolute',
          top: '1230px',
          left: '160px',
          opacity: '0.75',
        }"
      />
    </div>
  </div>
</template>
<script setup>
import BackgroundCircle1 from "@/assets/icons/BackgroundCircle1.vue";
import BackgroundCircle2 from "@/assets/icons/BackgroundCircle2.vue";
import BackgroundCircle3 from "@/assets/icons/BackgroundCircle3.vue";
import BackgroundCircle4 from "@/assets/icons/BackgroundCircle4.vue";
import BackgroundCircle5 from "@/assets/icons/BackgroundCircle5.vue";
import BackgroundText1 from "@/assets/icons/BackgroundText1.vue";
import BackgroundText2 from "@/assets/icons/BackgroundText2.vue";
import BackgroundText3 from "@/assets/icons/BackgroundText3.vue";
import BackgroundText4 from "@/assets/icons/BackgroundText4.vue";
import BackgroundText5 from "@/assets/icons/BackgroundText5.vue";
</script>
<style>
@import "@/assets/styles/style.css";
</style>
