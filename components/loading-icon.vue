<template>
  <div class="QuestionnaireLoaderBlock">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </div>
</template>
<style>
@media (min-width: 1601px) {
  .homepage .loader {
    position: relative;
    margin: auto;
    width: 40%;
  }
  .vakancies .loader {
    position: relative;
    margin: auto;
    width: 16%;
  }
}
@media (min-width: 721px) and (max-width: 1600px) {
  .homepage .loader {
    position: relative;
    margin: auto;
    width: 40%;
  }
  .vakancies .loader {
    position: relative;
    margin: auto;
    width: 36%;
  }
}
@media (min-width: 1px) and (max-width: 720px) {
  .homepage .loader {
    position: relative;
    margin: auto;
    width: 90%;
    max-width: 98vw;
    max-height: 98vw;
  }
  .homepage .circular {
    width: 40%;
    height: 40%;
  }
  .vakancies .loader {
    position: relative;
    margin: auto;
    width: 100%;
    min-height: 500px;
  }
  .vakancies .circular {
    width: 40%;
  }
}

:root {
  --green: #008744;
  --blue: #0057e7;
  --red: #d62d20;
  --yellow: #ffa700;
  --white: #eee;
}

.QuestionnaireLoaderBlock {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.loader:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  0%,
  100% {
    stroke: var(--red);
  }
  40% {
    stroke: var(--blue);
  }
  66% {
    stroke: var(--green);
  }
  80%,
  90% {
    stroke: var(--yellow);
  }
}
</style>
