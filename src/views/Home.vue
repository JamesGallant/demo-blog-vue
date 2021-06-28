<template>
  <div class="home">
    <NasaComponent
      content="Welcome to the demo site to show case how to make a site with Vue.js"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NasaComponent from "@/components/NasaComponent.vue";

@Component({
  components: {
    NasaComponent,
  },
})
export default class Home extends Vue {}
</script>
