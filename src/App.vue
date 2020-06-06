<template>
  <v-app>
    <v-app-bar color="blue darken-4" dark app>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Sign Out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="sidebar">
      <v-list-item>
        <v-list-item-content>
          <v-row justify="space-around" class="py-3">
            <v-avatar color="orange" size="100">
              <img src="/ninja.jpg" />
              <!-- <span class="white--text headline">100</span> -->
            </v-avatar>
          </v-row>
          <v-list-item-title class="title">Kenneth Pineda</v-list-item-title>
          <v-list-item-subtitle>dj.kenneth.pineda@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item active-class="color" class="white--text" v-for="item in items" :key="item.title" link router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-fade-transition name="fade" mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
      { title: "Employee", icon: "mdi-account", route: "/employees" },
    ],
    right: null,
    sidebar: true
  })
};
</script>

<style scoped>
.color {
  background-color: #0D47A1;
}
</style>
