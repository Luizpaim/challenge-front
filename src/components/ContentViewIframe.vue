<script lang="ts">
import { defineComponent } from 'vue'

import { ContentTypeEnum } from '@/utils/enums/ContentTypeEnum'

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
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      ContentTypeEnum,
    }
  },
})
</script>
<template>
  <div class="content-iframe">
    <iframe
      :class="{ 'iframe-block': type !== ContentTypeEnum.PDF }"
      class="iframe-preview"
      allowfullscreen
      width="100%"
      height="100%"
      :src="url"
    ></iframe>
    <div v-if="type === ContentTypeEnum.PDF" class="content-link">
      <span class="description">
        {{ description }}
      </span>

      <a :href="url" target="_blank">
        <PButton link label="Baixar" />
      </a>
    </div>
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
.content-link {
  display: none;
}
@media (max-width: 768px) {
  .iframe-block {
    display: block !important;
  }

  .iframe-preview {
    display: none;
  }

  .content-link {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100%;
  }
}

@media (max-width: 1100px) {
  .iframe-preview {
    width: 100%;
    height: 100%;
  }
}
</style>
