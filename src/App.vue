<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <side-nav></side-nav>
    </v-navigation-drawer>

    <v-app-bar class="orange" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CodeMash 2023</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <transition>
          <router-view />
        </transition>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import SideNav from "@/components/SideNav";
export default {
  name: "App",
  components: {
    SideNav
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
