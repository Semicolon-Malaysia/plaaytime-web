<template>
  <v-app-bar flat fixed app color="transparent">
    <v-img src="/header-logo.png" alt="Plaaytime" max-width="180px" />
    <v-spacer />

    <template v-if="loggedIn">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="pa-2 light"
            rounded
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="info" class="mr-1">mdi-menu</v-icon>
            <v-avatar color="success" size="24">A</v-avatar>
          </v-btn>
        </template>
        <v-list class="elevation-0">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-btn text class="full-width">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <template v-else> </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AppBar extends Vue {
  loggedIn: Boolean = true;
  items: Array<Object> = [
    { title: "Messages" },
    { title: "Notifications" },
    { title: "Bookings" },
    { title: "Account" },
    { title: "Help"},
    { title: "Log Out"}
    ];
}
</script>

<style></style>
