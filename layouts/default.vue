<template>
  <v-app>
    <app-bar />
    <v-main class="bg">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AppBar from "~/components/layout/AppBar.vue";

@Component({
  components: {
    AppBar
  }
})
export default class LayoutMain extends Vue {}
</script>

<style></style>
