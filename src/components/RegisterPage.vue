<template>
  <div>
    <div
      class="container d-flex align-items-center text-danger flex-column justify-content-center"
    >
      <h4>Ubit | {{ $t("message.signUp") }}</h4>
      <form
        @submit.prevent="onSubmit"
        class="d-flex flex-column align-items-center justify-content-center"
      >
        <div class="d-flex content-center flex-column m-2">
          <input
            @input="$v.email.$touch()"
            v-model="$v.email.$model"
            class="input"
            type="email"
            placeholder="Mail Adresinizi Giriniz"
          />
          <small
            v-if="!$v.email.required && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.required") }}</small
          >
          <small
            v-if="!$v.email.email && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.validEmail") }}</small
          >
        </div>
        <div class="d-flex content-center flex-column m-2">
          <input
            v-model="$v.password.$model"
            class="input"
            type="password"
            placeholder="Şifrenizi Giriniz"
          />
          <small
            v-if="!$v.password.required && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.required") }}</small
          >
          <small
            v-if="!$v.password.numeric && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordNumberReqiured") }}
          </small>
          <small
            v-if="!$v.password.minLength && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordMinMust") }}
            {{ $v.password.$params.minLength.min }}
            {{ $t("message.passwordCharacters") }}
          </small>
          <small
            v-if="!$v.password.maxLength && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordMaxMust") }}
            {{ $v.password.$params.maxLength.max }}
            {{ $t("message.passwordCharacters") }}
          </small>
        </div>
        <div
          class="d-flex content-center flex-column m-2"
          :class="{ 'd-none': isUser }"
        >
          <input
            v-model="$v.repassword.$model"
            name="repassword"
            class="input"
            type="password"
            placeholder="Şifrenizi Tekrar Giriniz"
          />
          <small
            v-if="!$v.repassword.required && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.required") }}</small
          >
          <small
            v-if="!$v.repassword.numeric && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordNumberReqiured") }}
          </small>
          <small
            v-if="!$v.repassword.minLength && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordMinMust") }}
            {{ $v.repassword.$params.minLength.min }}
            {{ $t("message.passwordCharacters") }}
          </small>
          <small
            v-if="!$v.repassword.maxLength && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordMaxMust") }}
            {{ $v.repassword.$params.maxLength.max }}
            {{ $t("message.passwordCharacters") }}
          </small>
          <small
            v-if="!$v.repassword.sameAs && errorControl"
            class="d-flex text-left px-3"
            >{{ $t("message.passwordSameAs") }}
          </small>
        </div>
        <button
          @click.prevent="onSubmit"
          type="submit"
          class="btn btn-primary btn-block mb-2"
        >
          <!-- {{ isUser ? "Giriş Yap" : "Kayıt Ol" }} -->
          {{ $t("message.signUp") }}
        </button>
        <router-link to="/" class="text-secondary">
          <!-- {{ isUser ? "Üye değilim" : "Üyeliğim var" }} -->
          {{ $t("message.signIn") }}
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: null,
      password: null,
      repassword: null,
      isUser: false,
      errorControl: false,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(9),
    },
    repassword: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(9),
      sameAs: sameAs("password"),
    },
  },
  methods: {
    onSubmit() {
      this.errorControl = true;
      // let vm = this.$v.repassword.sameAs;
      this.$store.dispatch("signUp", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 80vh;
}
h4 {
  color: #252eff;
  margin: 36px 140px 52px 140px;
}
.input {
  width: 352px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  border-color: #6066ff;
}
button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 56px 123px 10px 123px;
  padding: 10px;
  border-radius: 20px;
  background-color: #252eff;
  border-color: #fff;
  color: #fff;
  width: 153px;
  height: 38px;
}
button:hover {
  background: #4b51ff;
  transition: 0.5s;
}
</style>
