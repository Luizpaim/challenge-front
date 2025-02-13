<script lang="ts">
import { defineComponent, ref, toRefs, onMounted } from 'vue'

import Swal from 'sweetalert2'

import LevelProgress from '@/components/LevelProgress.vue'
import CardProgress from '@/components/CardProgress.vue'
import contentsHardcode from '@/utils/contents-hardcode'

import { useContentStore } from '@/store/content'

export default defineComponent({
  components: {
    LevelProgress,
    CardProgress,
  },

  setup() {
    const contents = ref(contentsHardcode)

    const { loadByIdContent, contentById } = toRefs(useContentStore())

    const alertMessage = (title: string, text: string) =>
      Swal.fire({
        icon: 'error',
        title,
        text,
      })

    const findContent = async (contentId: string) => {
      const isContent = await loadByIdContent.value(contentId)

      if (!isContent) {
        alertMessage('Ops...', 'Você não tem acesso a esse conteúdo.')
      }
    }

    onMounted(async () => {
      if (contents.value.length > 0) {
        await findContent(contents.value[0].id)
      }
    })

    return {
      contentById,
      contents,
      loadByIdContent,
      findContent,
    }
  },
})
</script>
<template>
  <aside class="completion-course">
    <LevelProgress />
    <PScrollPanel
      :pt="{
        wrapper: {
          style:
            'border-right: 10px solid var(--surface-50); border-bottom: 10px solid var(--surface-50);',
        },
        bary: 'surface-300 opacity-100 border-noround',
      }"
      style="padding: 0; gap: 20px; width: 100%; height: 500px"
    >
      <div
        v-for="item in contents"
        :key="item.id"
        class="content-card"
        @click.stop="findContent(item.id)"
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
        />
      </div>
    </PScrollPanel>
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
@media (max-width: 768px) {
  .completion-course {
    width: 100%;
  }
}
</style>
