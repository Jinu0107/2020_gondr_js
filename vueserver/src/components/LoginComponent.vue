<template>
  <div>
    <h1>로그인</h1>
    <div class="row">
      <div class="col-8 offset-2">
        <form @submit.prevent="sendLogin">
          <div class="form-group">
            <label for="email">이메일</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              placeholder="이메일 입력"
            />
          </div>
          <div class="form-group">
            <label for="password">미밀번호</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              placeholder="미밀번호 입력"
            />
          </div>
          <button type="submit" class="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "loginComponent",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    sendLogin() {
      axios.post("/api/login", this.formData).then((res) => {
        const data = res.data;
        console.log(data);
      });
    },
  },
};
</script>
<style scoped>
</style>