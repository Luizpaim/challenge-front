<script lang="ts">
import ImagePreview from 'primevue/imagepreview/ImagePreview'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ImagePreview,
  },
  props: {
    url: String,
  },
})
</script>
<template>
  <div class="content-image">
    <ImagePreview
      :key="url"
      class="image-preview"
      :src="url"
      alt="Image"
      width="100%"
      height="100%"
      preview
    />
  </div>
</template>

<style lang="css" scoped>
.content-image {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.image-preview {
  width: 100%;
  height: 100%;
}
</style>
