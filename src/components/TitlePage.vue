<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'

import TypeContentPlayerIcon from '@/utils/content-player-icon'

import { useContentStore } from '@/store/content'

export default defineComponent({
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    const { contentById } = toRefs(useContentStore())

    const icon = computed(
      () =>
        TypeContentPlayerIcon[
          contentById.value?.type as keyof typeof TypeContentPlayerIcon
        ]
    )
    return {
      icon,
      contentById,
    }
  },
})
</script>
<template>
  <div class="title">
    <i :class="icon" style="font-size: 2rem; color: #333333"></i>
    <h1>{{ contentById?.title }}</h1>
  </div>
</template>
<style lang="css" scoped>
.title {
  display: flex;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 26px;
    font-weight: 500;
    color: #333333;
  }
}
@media (max-width: 768px) {
  .title {
    h1 {
      font-size: 20px;
    }
  }
}
</style>
