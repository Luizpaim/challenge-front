<script lang="ts">
import { defineComponent, toRefs } from 'vue'

import ContentViewImage from './ContentViewImage.vue'
import ContentViewIframe from './ContentViewIframe.vue'
import ContentViewLink from './ContentViewLink.vue'
import { useContentStore } from '@/store/content'
import { ContentTypeEnum } from '@/utils/enums/ContentTypeEnum'

export default defineComponent({
  components: {
    ContentViewImage,
    ContentViewIframe,
    ContentViewLink,
  },

  setup() {
    const { contentById } = toRefs(useContentStore())

    return {
      contentById,
      ContentTypeEnum,
    }
  },
})
</script>
<template>
  <div class="content-player">
    <ContentViewImage
      v-if="contentById?.type === ContentTypeEnum?.IMAGE"
      :url="contentById?.url"
    />
    <ContentViewIframe
      v-if="
        contentById?.type === ContentTypeEnum?.PDF ||
        contentById?.type === ContentTypeEnum?.VIDEO ||
        contentById?.type === ContentTypeEnum?.TXT
      "
      :url="contentById?.url"
      :type="contentById?.type"
      :description="contentById?.description"
    />
    <ContentViewLink
      v-if="contentById?.type === ContentTypeEnum?.LINK"
      :url="contentById?.url"
      :description="contentById?.description"
    />
  </div>
</template>
<style lang="css" scoped>
.content-player {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
