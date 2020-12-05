<template>
  <div class="alarm_popup_container">
    <div class="inner">
      <div class="close" @click="$emit('close', false)">
        <font-awesome-icon icon="times" />
      </div>
      <b-input-group size="lg" prepend="종료시간" class="my-2">
        <b-form-input type="datetime-local" step="1" v-model="data.active_time" />
      </b-input-group>
      <b-input-group size="lg" prepend="제목" class="my-2">
        <b-form-input type="text" v-model="data.title" />
      </b-input-group>
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary" @click="$emit('save', data)">
          저장
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: "",
        active_time: "",
      },
    };
  },
};
</script>

<style>
.alarm_popup_container {
  z-index: 20;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000a;
}
</style>