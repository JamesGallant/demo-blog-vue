<template>
  <div class="home">
    <NasaComponent content="some text to show that passing props work" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NasaComponent from "@/components/NasaComponent.vue";

@Component({
  components: {
    NasaComponent,
  },
})
export default class Home extends Vue {}
</script>
