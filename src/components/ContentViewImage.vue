<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
})
</script>
<template>
  <div class="content-image">
    <PImagePreview
      v-if="url"
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
  max-height: 90%;
}
.image-preview {
  width: 700px;
  height: 500px;
}

@media (max-width: 768px) {
  .image-preview {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 1024px) {
  .image-preview {
    width: 100%;
    height: 100%;
  }
}
</style>
