<template>
  <div>
    <transition name="sc" mode="out-in">
      <router-view />
    </transition>
    <div class="btn_group">
      <div @click="changeMenu(0)">
        <router-link
          :class="{
            menu0: menu === 0,
            menu1: menu === 1,
            menu2: menu === 2,
            active: menu === 0,
          }"
          to="/"
          >타이머</router-link
        >
      </div>
      <div @click="changeMenu(1)">
        <router-link
          :class="{
            menu0: menu === 0,
            menu1: menu === 1,
            menu2: menu === 2,
            active: menu === 1,
          }"
          to="/stopWatch"
          >스톱워치</router-link
        >
      </div>
      <div @click="changeMenu(2)">
        <router-link
          :class="{
            menu0: menu === 0,
            menu1: menu === 1,
            menu2: menu === 2,
            active: menu === 2,
          }"
          to="/alarm"
          >알람</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import TimerComponent from "./components/TimerComponent";
import StopWatchComponent from "./components/StopWatchComponent";
import AlarmComponent from "./components/AlarmComponent";

export default {
  name: "App",
  components: {
    "timer-component": TimerComponent,
    "stopWatch-component": StopWatchComponent,
    "alarm-component": AlarmComponent,
  },
  data() {
    return {
      menu: 0,
    };
  },
  methods: {
    changeMenu(idx) {
      this.menu = idx;
    },
  },
};
</script>

<style>
.btn_group {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.menu0 {
  color: #aaa;
  font-size: 18px;
}
.menu0.active {
  color: #fff;
  font-weight: bold;
}

.menu0:hover {
  color: #fff;
  text-decoration: none;
}

.menu1,
.menu2 {
  color: #666;
  font-size: 18px;
}
.menu1.active,
.menu2.active {
  color: #000;
  font-weight: bold;
}

.menu1:hover,
.menu2:hover {
  color: #333;
  text-decoration: none;
}

.sc-enter-active,
.sc-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.sc-enter {
  opacity: 0;
  transform: translateY(100%);
}

.sc-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>