<template>
  <div class="BackgroundTextBlock">
    <div class="BackgroundText">
      <BackgroundCircle5
        class="1 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '426px',
          height: '426px',
          position: 'absolute',
          top: '-150px',
          left: '1000px',
        }"
      />
      <BackgroundCircle1
        class="2 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '46px',
          height: '46px',
          position: 'absolute',
          top: '-100px',
          left: '-200px',
        }"
      />
      <BackgroundCircle4
        class="3 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '92px',
          height: '92px',
          position: 'absolute',
          top: '90px',
          left: '1000px',
        }"
      />
      <BackgroundCircle5
        class="4 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '326px',
          height: '326px',
          position: 'absolute',
          top: '250px',
          left: '-490px',
        }"
      />
      <BackgroundCircle1
        class="5 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '123px',
          height: '123px',
          position: 'absolute',
          top: '1030px',
          left: '-510px',
        }"
      />
      <BackgroundCircle5
        class="6 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '426px',
          height: '426px',
          position: 'absolute',
          top: '1350px',
          left: '1000px',
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
