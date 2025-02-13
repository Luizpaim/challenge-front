<script lang="ts">
import { defineComponent, ref, toRefs, onMounted } from 'vue'

import ScrollPanel from 'primevue/scrollpanel/ScrollPanel'
import LevelProgress from './LevelProgress.vue'
import CardProgress from './CardProgress.vue'

import contentsHardcode from '@/utils/contents-hardcode'

import useContentStore from '@/store/content.store'

export default defineComponent({
  components: {
    LevelProgress,
    CardProgress,
    ScrollPanel,
  },

  setup() {
    const contents = ref(contentsHardcode)

    const { loadByIdContent, contentById } = toRefs(useContentStore())

    onMounted(async () => {
      if (contents.value.length > 0) {
        await loadByIdContent.value(contents.value[0].id)
      }
    })

    return {
      contentById,
      contents,
      loadByIdContent,
    }
  },
})
</script>
<template>
  <aside class="completion-course">
    <LevelProgress />
    <ScrollPanel
      :pt="{
        wrapper: {
          style:
            'border-right: 10px solid var(--surface-50); border-bottom: 10px solid var(--surface-50);',
        },
        bary: 'surface-300 opacity-100 border-noround',
      }"
      style="padding: 0; gap: 20px; width: 100%; height: 350px"
    >
      <div
        v-for="item in contents"
        :key="item.id"
        @click="loadByIdContent(item.id)"
      >
        <CardProgress
          :id="item.id"
          :title="item.title"
          :description="item.description ?? ''"
          :company-id="item.company_id"
          :url="item.url"
          :total-likes="item.total_likes"
          :type="item.type"
          :cover="item.cover ?? ''"
          :created-at="item.created_at"
          class="content-card"
        />
      </div>
    </ScrollPanel>
  </aside>
</template>
<style lang="css" scoped>
.completion-course {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 35%;
  height: 100%;
}

.content-card {
  margin-bottom: 20px;
}
</style>
