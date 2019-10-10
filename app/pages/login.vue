<template>
  <v-row align="center" justify="center">
    <v-col cols="12" xs="12" sm="6">
      <v-toolbar flat>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card height="100px">
        <v-card-text align="center" justify="center">
          <v-img src="/btn_google_signin_light_focus_web@2x.png" class="googleSinginImg">
            <v-btn @click="googleAuth" outlined class="googleSinginBtn"></v-btn>
          </v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "login",
  async mounted() {
    const user = await this.auth();
    this.$store.dispatch("setUser", { user });
    if (user) {
      this.$router.push("/");
    }
  },
  methods: {
    auth() {
      return new Promise((resolve, reject) => {
        this.$firebase.auth().onAuthStateChanged(user => {
          resolve(user || false);
        });
      });
    },
    googleAuth() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().signInWithRedirect(provider);
    }
  }
};
</script>

<style scoped>
.googleSinginImg {
  height: 60px !important;
  width: 250px;
}
.googleSinginBtn {
  height: 100% !important;
  width: 100%;
}
</style>