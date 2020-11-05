<template>
  <div>
    <h1>보드 컴포넌트</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
      <div>
        <input type="text" name="" v-model="title" />
        <button @click="send">전송하기</button>
      </div>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "boardComponent",
  data() {
    return {
      list: [],
      title: "",
    };
  },
  mounted() {
    axios.get("/test").then((res) => {
      console.log(res);
      this.list = res.data;
      console.log(this.list);
    });
  },
  methods: {
    send() {
      axios.post("/data", { title: this.title }).then((res) => {
        //포스트 전송이 완료된 후 작업을 해주면 된다.
        this.list = res.data;
      });
    },
  },
};
</script>
<style scoped>
</style>