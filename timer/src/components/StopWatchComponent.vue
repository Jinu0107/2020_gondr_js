<template>
  <div class="stopWatch_container">
    <div class="record_group">
      <div class="record" v-for="item in recordList">
        <span>{{ item.idx }}</span>
        <div>{{ item.value }}</div>
      </div>
      <div class="side_label">
        <font-awesome-icon icon="chevron-right" />
      </div>
    </div>
    <div class="box_group">
      <div ref="h" class="time_box">00</div>
      <div ref="m" class="time_box">00</div>
      <div ref="s" class="time_box small">00</div>
    </div>
    <div class="stopWatch_btn_group">
      <div class="option" @click="resetStopWatch()">
        <font-awesome-icon icon="undo" v-if="!play" />
        <font-awesome-icon icon="flag" v-if="play" />
      </div>
      <div class="option" @click="playStopWatch()">
        <font-awesome-icon icon="play" v-if="!play" />
        <font-awesome-icon icon="pause" v-if="play" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: false,
      time: 0,
      hour: 0,
      min: 0,
      sec: 0,
      timer: null,
      recordList: [],
      recordIdx: 1,
    };
  },
  methods: {
    playStopWatch() {
      this.play = !this.play;
      if (this.play) {
        if (this.time == 0) {
          this.init();
        }
        this.timer = setInterval(() => {
          this.time++;
          this.min = Math.floor(this.time / 60);
          this.hour = Math.floor(this.min / 60);
          this.sec = this.time % 60;
          this.min = this.min % 60;
          this.$refs.h.innerHTML = this.hour.toString().padStart(2, "0");
          this.$refs.m.innerHTML = this.min.toString().padStart(2, "0");
          this.$refs.s.innerHTML = this.sec.toString().padStart(2, "0");
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    },
    resetStopWatch() {
      if (this.play) {
        this.record();
      } else {
        this.recordIdx = 1;
        this.recordList = [];
        this.time = 0;
        this.play = false;
        clearInterval(this.timer);
        this.init();
      }
    },
    record() {
      let idx = this.recordIdx;
      let value = `${this.hour
        .toString()
        .padStart(2, "0")}:${this.min
        .toString()
        .padStart(2, "0")}:${this.sec.toString().padStart(2, "0")}`;
      this.recordList.push({ idx, value });
      this.recordIdx++;
    },
    init() {
      this.$refs.h.innerHTML = "00";
      this.$refs.m.innerHTML = "00";
      this.$refs.s.innerHTML = "00";
    },
  },
};
</script>

<style>
.stopWatch_container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stopWatch_container * {
  font-family: "DS";
}

.stopWatch_container .box_group {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.stopWatch_container .box_group > * {
  margin: 15px;
}

.time_box {
  background: linear-gradient(#fefefe, #f6f6f6);
  width: 384px;
  height: 384px;
  border-radius: 30px;
  box-shadow: 1px 2px 3px 2px #0001;
  font-size: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time_box.small {
  width: 146px;
  height: 146px;
  font-size: 110px;
}

.stopWatch_btn_group {
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
}

.stopWatch_btn_group > .option {
  color: #555;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  cursor: pointer;
}

.record_group {
  width: 20%;
  height: 100vh;
  position: fixed;
  box-shadow: 5px 2px 8px 2px #0002;
  left: -20%;
  z-index: 10;
  background-color: #fafafa;
  transition: 0.7s;
}

.side_label {
  width: 25px;
  height: 120px;
  border-radius: 0px 8px 8px 0px;
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 5px 2px 8px 2px #0002;
  z-index: 11;
}

.record_group:hover {
  left: 0;
}

.record {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.record span {
  font-size: 30px;
}
.record div {
  font-size: 50px;
}
</style>