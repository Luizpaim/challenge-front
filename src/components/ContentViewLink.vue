<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button/Button'

export default defineComponent({
  components: {
    ButtonCustom: Button,
  },
  props: {
    url: String,
    description: String,
  },
})
</script>
<template>
  <div class="content-link">
    <span class="description">
      {{ description }}
    </span>

    <a :href="url" target="_blank">
      <ButtonCustom link label="Acessar Link" />
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
