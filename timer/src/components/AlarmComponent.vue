<template>
  <div>
    <transition name="fade">
      <alarm-popup-component
        @close="isOpen = false"
        @save="insertAlarm"
        v-if="isOpen"
      />
    </transition>
    <div class="container pt-5">
      <div class="row mt-5">
        <h1 class="col-12 tealc">알람 목록</h1>
        <div class="row col-12 mt-4">
          <div
            class="alarm"
            v-for="alarm in alarmList"
            :key="alarm.idx"
            @click="removeAlarm(alarm.idx)"
          >
            <div class="time">
              <span>{{ alarm.str_time[1] }}</span>
              <div>{{ alarm.str_time[0] }}</div>
            </div>
            <div class="title">{{ alarm.title }}</div>
            <div class="remove_box">
              <font-awesome-icon icon="trash-alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alarm_option" @click="isOpen = true">
      <font-awesome-icon icon="cog" />
    </div>
  </div>
</template>

<script>
import AlarmPopupComponent from "./AlarmPopupComponent";

export default {
  components: {
    "alarm-popup-component": AlarmPopupComponent,
  },
  data() {
    return {
      alarmList: [],
      isOpen: false,
      frame: null,
    };
  },
  computed: {
    maxIdx() {
      return Math.max(...this.alarmList.map((x) => x.idx * 1)) + 1;
    },
  },
  mounted() {
    this.frame = setInterval(() => {
      this.alarmList.forEach((item) => {
        if (new Date() >= item.active_time) {
          toastr.info(`${item.title} 의 알람이 울렸습니다 띠리링~~`);
          this.removeAlarm(item.idx);
        }
      });
    }, 1000);
  },
  methods: {
    insertAlarm(e) {
      let { active_time, title } = e;
      let idx = this.alarmList.length == 0 ? 1 : this.maxIdx;
      let arr = active_time.split("T");
      let str_time = [arr[0], arr[1]];
      if ((active_time == "", title == "")) {
        toastr.error("필수값이 비어있습니다.");
        return;
      }
      active_time = new Date(active_time);
      if (active_time <= new Date()) {
        toastr.error("지난 날짜는 선택할 수 없습니다.");
        return;
      }
      this.alarmList.push({ idx, title, active_time, str_time });
      log(this.alarmList);
      toastr.success("성공적으로 알람이 등록되었습니다.");
      this.isOpen = false;
    },
    removeAlarm(idx) {
      this.alarmList = this.alarmList.filter((x) => x.idx != idx);
    },
  },
};
</script>

<style>
.alarm_option {
  position: fixed;
  top: 50%;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #555;
  font-size: 20px;
  transition: 0.5s;
}

.alarm {
  margin: 15px;
  width: 500px;
  height: 120px;
  box-shadow: 1px 2px 3px 2px #0002;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 3px 12px 12px 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  position: relative;
  overflow: hidden;
}
.alarm .time {
  text-align: center;
}

.alarm .time > span {
  color: #333;
  font-size: 23px;
  font-weight: bold;
}
.alarm .time > div {
  font-size: 14px;
  color: #555;
}

.alarm .title {
  width: 70%;
  font-size: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.alarm .remove_box {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000a;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
}

.alarm:hover {
  transform: translateY(-10px);
}
.alarm:hover > .remove_box {
  opacity: 1;
}
</style>