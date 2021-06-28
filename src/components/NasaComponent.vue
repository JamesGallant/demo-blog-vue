<template>
  <div>
    <br />
    <b-container fluid="lg">
      <b-row>
        <b-col>
          <h1>{{ this.content }}</h1>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <h2>
            <strong>{{ this.nasaTitle }}</strong>
          </h2>
          <b-img :src="this.nasaURL" fluid id="nasa-img"></b-img>
        </b-col>
        <b-col>
          <p id="nasa-explanation">
            {{ this.nasaExplanation }}
          </p>
          <p v-if="this.nasaCopyright">Copyright: {{ this.nasaCopyright }}</p>
          <p v-else></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class NasaComponent extends Vue {
  @Prop() private content!: string;
  nasaURL = "";
  nasaTitle = "";
  nasaExplanation = "";
  nasaCopyright = "";

  async beforeCreate() {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?count=1&api_key=${process.env.VUE_APP_NASA_API_KEY}`
      );
      this.nasaURL = response.data[0].url;
      this.nasaTitle = response.data[0].title;
      this.nasaExplanation = response.data[0].explanation;
      this.nasaCopyright = response.data[0].copyright;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped lang="scss">
#nasa-explanation {
  text-align: justify;
  text-justify: inter-word;
  margin-top: 2em;
}
#nasa-img {
  object-fit: cover;
}
</style>
