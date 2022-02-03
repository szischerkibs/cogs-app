<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" v-model="userCredentials.username" />
        <v-text-field
          v-model="userCredentials.password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Apply</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthService from "../services/AuthService";
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      userCredentials: {
        username: "jdoe",
        password: "dothemash22",
      },
      Error: "",
      showPassword: false,
    };
  },
  methods: {
    login: function () {
      AuthService.login(this.userCredentials)
        .then((response) => {
          //Logged in
          this.Error = response.message;
        })
        .catch((response) => {
          //Failed
          this.Error = response.message;
        });
    },
    apply: function () {
      router.push({ path: "apply" });
    },
  },
};
</script>
