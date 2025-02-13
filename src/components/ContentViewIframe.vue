<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: String,
  },
})
</script>
<template>
  <div class="content-iframe">
    <iframe
      class="iframe-preview"
      width="100%"
      height="100%"
      :src="url"
    ></iframe>
  </div>
</template>

<style lang="css" scoped>
.content-iframe {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.iframe-preview {
  width: 800px;
  height: 100%;
}
</style>
