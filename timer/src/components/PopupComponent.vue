<template>
  <div class="popup_container">
    <div class="inner">
      <div class="close" @click="$emit('close', false)">
        <font-awesome-icon icon="times" />
      </div>
      <b-input-group size="lg" prepend="시" class="my-2">
        <b-form-input
          v-model="time.h"
          :maxlength="2"
          @input="checkTimeValue"
        ></b-form-input>
      </b-input-group>
      <b-input-group size="lg" prepend="분" class="my-2">
        <b-form-input
          v-model="time.m"
          :maxlength="2"
          @input="checkTimeValue"
        ></b-form-input>
      </b-input-group>
      <b-input-group size="lg" prepend="초" class="my-2">
        <b-form-input
          v-model="time.s"
          :maxlength="2"
          @input="checkTimeValue"
        ></b-form-input>
      </b-input-group>
      <div class="d-flex justify-content-end">
        <b-button variant="primary" @click="$emit('save', time)">저장</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  data() {
    return {
      time: {
        h: "",
        m: "",
        s: "",
      },
    };
  },
  mounted() {},
  methods: {
    checkTimeValue() {
      if (this.time.h > 23) {
        this.time.h = 23;
      }
      if (this.time.m > 59) {
        this.time.m = 59;
      }
      if (this.time.s > 59) {
        this.time.s = 59;
      }
    },
  },
};
</script>

<style scopde>
.popup_container {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #0007;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px 20px;
}

.close {
  font-size: 20px;
  background-color: #fff;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}
</style>