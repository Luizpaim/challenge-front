<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
<template>
  <div class="content-link">
    <span class="description">
      {{ description }}
    </span>

    <a :href="url" target="_blank">
      <PButton link label="Acessar Link" class="button-link" />
    </a>
  </div>
</template>

<style lang="css" scoped>
.content-link {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100%;
}
.link-preview {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
