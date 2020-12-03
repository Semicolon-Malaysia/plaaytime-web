<template>
  <v-card class="components__mainForm">
    <v-container class="pa-5">
      <v-form>
        <div
          class="full-width"
          :class="$vuetify.breakpoint.xs ? '' : 'd-inline-flex'"
        >
          <v-autocomplete
            solo
            rounded
            v-model="formModel.gameId"
            :label="$t('message.feelLikePlay')"
            :items="gameList"
            item-value="id"
            item-text="name"
          ></v-autocomplete>

          <v-dialog
            ref="dateDialog"
            v-model="datePickerDialog"
            :return-value.sync="formModel.date"
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :class="$vuetify.breakpoint.xs ? '' : 'mx-4'"
                solo
                rounded
                v-model="formModel.date"
                :label="$t('message.pickADate')"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="formModel.date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="datePickerDialog = false">
                {{ $t("label.cancel") }}
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dateDialog.save(formModel.date)"
              >
                {{ $t("label.ok") }}
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <v-dialog
            ref="timeDialog"
            v-model="timePickerDialog"
            :return-value.sync="formModel.time"
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                solo
                rounded
                v-model="formModel.time"
                :label="$t('message.pickATime')"
                append-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="timePickerDialog"
              v-model="formModel.time"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="timePickerDialog = false">
                {{ $t("label.cancel") }}
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.timeDialog.save(formModel.time)"
              >
                {{ $t("label.ok") }}
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </div>

        <div
          class="full-width"
          :class="$vuetify.breakpoint.xs ? '' : 'd-inline-flex'"
        >
          <v-select
            solo
            rounded
            v-model="formModel.state"
            :label="$t('label.state')"
            :items="states"
            item-value="id"
            item-text="name"
          ></v-select>

          <v-autocomplete
            :class="$vuetify.breakpoint.xs ? '' : 'mx-4'"
            solo
            rounded
            v-model="formModel.city"
            :label="$t('label.city')"
            :items="state_cities"
            item-value="id"
            item-text="city"
          ></v-autocomplete>

          <v-autocomplete
            solo
            rounded
            v-model="formModel.venur"
            :label="$t('label.venue')"
            :items="gameList"
            item-value="id"
            item-text="name"
          ></v-autocomplete>
        </div>

        <v-btn class="full-width rounded-pill" height="45" color="primary">
          {{ $t("label.search") }}
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
import Game from "@/types/mainForm/game.ts";
import GameList from "@/static/SampleData/gameList.json";
import States from "@/static/SampleData/states.json";
import Cities from "@/static/SampleData/cities.json";

@Component
export default class MainForm extends Vue {
  formModel: any = {
    gameId: 0,
    time: "",
    date: "",
    state: "",
    city: "",
    venue: ""
  };

  datePickerDialog: Boolean = false;
  timePickerDialog: Boolean = false;
  state_cities: Array<any> = [];

  @Watch("formModel.state", { immediate: false })
  onStateChange(val: Number) {
    this.state_cities = this.cities.filter(x => x.state_id === val);
  }

  get gameList() {
    return GameList;
  }
  get states() {
    return States;
  }
  get cities() {
    return Cities;
  }
}
</script>

<style></style>
