<script lang="ts">
import { defineComponent } from 'vue'

import ContentPlayer from '@/components/ContentPlayer.vue'
import ContainerPage from '@/components/ContainerPage.vue'

export default defineComponent({
  components: {
    ContainerPage,
    ContentPlayer,
  },

  setup() {},
})
</script>

<template>
  <ContainerPage>
    <ContentPlayer />
  </ContainerPage>
</template>
