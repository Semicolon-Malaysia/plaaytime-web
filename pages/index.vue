<template>
  <div class="pages__MainForm">
    <main-form />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MainForm from "~/components/pages/index/MainForm.vue";

@Component({
  components: {
    MainForm
  }
})
export default class pageIndex extends Vue {}
</script>
