<template>
  <div class="chat-container">
    <chat-component ref="chat" />
    <list-component />
  </div>
</template>

<script>
import ChatComponent from "./components/ChatComponent";
import ListComponent from "./components/ListComponent";

export default {
  name: "App",
  components: {
    "chat-component": ChatComponent,
    "list-component": ListComponent,
  },
  mounted() {
    console.log(window);
    console.log(this.$refs.chat.$el.querySelector(".chat-list").style.height);
    // this.$refs.chat.$el.style.height = window.innerHeight + "px";
    this.$refs.chat.$el.style.height = '100vh';
    // window.addEventListener("resize", () => {
    //   this.$refs.chat.$el.style.height = window.innerHeight + "px";
    // });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.chat-container {
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>