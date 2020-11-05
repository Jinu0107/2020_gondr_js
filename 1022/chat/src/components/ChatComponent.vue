<template>
  <div class="window">
    <div class="chat-list"></div>
    <input-component></input-component>
  </div>
</template>

<script>
export default {
  name: "ChatComponent"
};
</script>

<style scoped>
    .window{
        display: grid;
        grid-auto-rows: 1fr 55px;
    }
</style>