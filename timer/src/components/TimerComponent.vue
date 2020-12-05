<template>
  <div class="timer_container">
    <flip-countdown
      :deadline="endTime"
      :showDays="false"
      @timeElapsed="timeElapsedHandler"
    />
    <div class="option" @click="isOpen = true">
      <font-awesome-icon icon="cog" />
    </div>
    <transition name="fade"
      ><popup-component
        v-if="isOpen"
        @close="isOpen = false"
        @save="changeTimer"
    /></transition>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";
import PopupComponent from "./PopupComponent";

export default {
  name: "TimerComponent",
  components: {
    FlipCountdown,
    PopupComponent,
  },
  data() {
    return {
      test: "",
      endTime: "2020-11-30 17:32:00",
      isOpen: false,
    };
  },
  mounted() {},
  methods: {
    changeTimer(time) {
      this.isOpen = false;
      let nowDate = new Date();
      let { h, m, s } = time;
      let date = new Date();
      date.setHours(date.getHours() + h * 1);
      date.setMinutes(date.getMinutes() + m * 1);
      date.setSeconds(date.getSeconds() + s * 1);
      this.endTime = this.getDateStringFormat(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      );
    },
    getDateStringFormat(y, mu, d, h, m, s) {
      return `${y}-${mu}-${d} ${h
        .toString()
        .padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    },
    timeElapsedHandler() {
      setTimeout(() => {
        alert("띠리리리리ㅣ리리링");
      }, 1000);
    },
  },
};
</script>

<style>
.timer_container {
  width: 100%;
  height: 100vh;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timer_container * {
  font-family: "Oswald";
}

.timer_container .option {
  position: fixed;
  top: 50%;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  transition: 0.5s;
}

.timer_container .option:hover {
  background-color: #fff;
  color: #111111;
}

.flip-clock {
  display: flex;
  align-items: flex-end;
}

.flip-clock__piece {
  width: 384px;
  height: 384px;
  margin: 0 15px !important;
}

.flip-clock__piece:nth-child(4) {
  width: 146px;
  height: 146px;
  margin-top: 30px;
}

.flip-clock__piece:nth-child(4) > span > b {
  width: 100% !important;
  height: 73px !important;
  font-size: 7rem;
}

.flip-clock__piece:nth-child(4) > span > .flip-card__top {
  padding-top: 20px !important;
}

.flip-clock__piece:nth-child(4) > span > .flip-card__back::before {
  padding-top: 20px !important;
  width: 100% !important;
  height: 73px !important;
}

.flip-clock__piece > span {
  height: 100%;
}

.flip-clock__piece > span > b {
  width: 100% !important;
  height: 192px !important;
  font-size: 18rem;
}

.flip-clock__piece > span > .flip-card__top {
  padding-top: 50px !important;
  background: linear-gradient(#2a2a2a, #222222);
}

.flip-clock__piece > span > .flip-card__back-bottom {
  background: linear-gradient(#222222, #1a1a1a);
}

.flip-clock__piece > span > .flip-card__back::before {
  padding-top: 50px !important;
  width: 100% !important;
  height: 192px !important;
  animation-duration: 0.4s !important;
  background: linear-gradient(#2a2a2a, #222222);
}

.flip-clock__piece > span > .flip-card__bottom {
  animation-duration: 0.8s !important;
  background: linear-gradient(#222222, #1a1a1a);
}

.flip-clock__slot {
  display: none !important;
}

.flip-clock__piece *,
.flip-clock__piece *::before {
  color: #b7b7b7 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>