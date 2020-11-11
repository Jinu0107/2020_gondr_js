<template>
  <div>
    <h1>회원가입</h1>
    <div class="row">
      <div class="col-8 offset-2">
        <form @submit.prevent="sendForm">
          <div class="form-group">
            <label for="email">이메일</label>
            <input
              placeholder="이메일을 입력하세요"
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              @input="check"
            />
          </div>
          <div class="form-group">
            <label for="name">이름</label>
            <input
              placeholder="이름을 입력하세요"
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              @input="check"
            />
          </div>
          <div class="form-group">
            <label for="password">비밀번호</label>
            <input
              placeholder="비밀번호를 입력하세요"
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              @input="check"
            />
          </div>
          <div class="form-group">
            <label for="passwordc">비밀번호 확인</label>
            <input
              placeholder="비밀번호를 다시 입력해주세요"
              type="password"
              class="form-control"
              id="passwordc"
              v-model="formData.passwordc"
              @input="check"
            />
          </div>

          <div class="form-group form-check"></div>
          <button type="submit" class="btn btn-primary">회원가입</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "egisterComponent",
  data() {
    return {
      formData: {
        email: "",
        name: "",
        password: "",
        passwordc: "",
      },
      swalData: {
        title: "서버메시지",
        text: "",
      },
    };
  },
  watch: {
    //   formData: {
    //   deep: true,
    //   handler(n, o) {
    //     console.log(this.$refs.email.classList);
    //     if (this.formData.email === "") {
    //       this.$refs.email.classList.add("is-invalid");
    //       this.$refs.email.classList.remove("is-valid");
    //     } else {
    //       this.$refs.email.classList.add("is-valid");
    //       this.$refs.email.classList.remove("is-invalid");
    //     }
    //   },
    // },
  },
  mounted() {},
  methods: {
    sendForm() {
      let flag = true;
      let error_msg = "";
      if (
        this.formData.password == "" ||
        this.formData.passwordc == "" ||
        this.formData.email == "" ||
        this.formData.name == ""
      ) {
        flag = false;
        error_msg = "필수값이 비어있어요";
      }

      if (this.formData.password != this.formData.passwordc) {
        flag = false;
        error_msg = "비밀번호와 비밀번호 확인이 같지 않아요";
      }
      if (!flag) {
        this.swalData.text = error_msg;
        swal.fire(this.swalData);
        return;
      }
      axios.post("/api/register", this.formData).then((res) => {
        const data = res.data;
        this.swalData.text = data.msg;
        if (!data.success) {
          swal.fire(this.swalData);
        } else {
          swal.fire(this.swalData).then((result) => {
            this.$router.push("/login");
          });
        }
      });
    },
    check(e) {
      if (e.currentTarget.value != "") {
        e.currentTarget.classList.add("is-valid");
        e.currentTarget.classList.remove("is-invalid");
      } else {
        e.currentTarget.classList.add("is-invalid");
        e.currentTarget.classList.remove("is-valid");
      }
    },
  },
};
</script>
<style scoped>
</style>