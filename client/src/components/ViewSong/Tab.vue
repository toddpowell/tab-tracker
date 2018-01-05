<template>
  <panel title="Tab">
    <textarea
        readonly
        v-model="song.tab">
        </textarea>
  </panel>
</template>

<script>
import Panel from "@/components/Panel"
export default {
  props: [
      "song"
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: monospace;
    border-style: none;
    border-color: transparent;
    /* height: 600px; */
    height: 250px;
    overflow: auto;
    padding: 20px;
}
</style>
