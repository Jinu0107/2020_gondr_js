<template>
  <div class="window">
    <div class="chat-list"></div>
    <div class="input_box">
      <input-component />
      <button-component />
    </div>
  </div>
</template>

<script>
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";


export default {
  name: "ChatComponent",
  components: {
    "input-component": InputComponent,
    "button-component": ButtonComponent
  }
  

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.window {
  display: grid;
  grid-template-rows: 1fr 55px;
}
.input_box {
  display: grid;
  grid-template-columns: 9fr 1fr;
}


</style>