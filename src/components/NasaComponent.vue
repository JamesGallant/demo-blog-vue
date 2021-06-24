<template>
  <div>
    <h1>NASA component</h1>
    <p>{{ this.content }}</p>
    <h2>{{ this.nasaTitle }}</h2>
    <b-img :src="this.nasaURL" fluid alt="Fluid image"></b-img>
    <p>{{ this.nasaExplanation }}</p>
    <p>{{ this.nasaCopyright }}</p>
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

  async created() {
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

<style scoped lang="scss"></style>
