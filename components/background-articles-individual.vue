<template>
  <div class="BackgroundTextBlock">
    <div class="BackgroundText">
      <BackgroundCircle5
        class="1 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '526px',
          height: '526px',
          position: 'absolute',
          top: '-1110px',
          left: '1250px',
        }"
      />
      <BackgroundCircle5
        class="2 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '346px',
          height: '346px',
          position: 'absolute',
          top: '30px',
          left: '-150px',
        }"
      />
      <BackgroundCircle4
        class="3 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '92px',
          height: '92px',
          position: 'absolute',
          top: '100px',
          left: '1440px',
        }"
      />
      <BackgroundCircle5
        class="4 BackgroundCircle BackgroundCircle5 actionsNone"
        :style="{
          width: '526px',
          height: '526px',
          position: 'absolute',
          top: '1120px',
          left: '1340px',
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
