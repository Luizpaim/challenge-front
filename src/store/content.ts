import { defineStore } from 'pinia'
import { ref } from 'vue'

import { findByIdContent, Content } from '@/services/content.service'

const useContentStore = defineStore('contents', () => {
  const contentById = ref<Content | null>(null)

  const loading = ref(false)

  const loadByIdContent = async (contentId: string) => {
    loading.value = true
    try {
      contentById.value = await findByIdContent(contentId)
    } catch (error) {
      contentById.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    contentById,
    loadByIdContent,
  }
})

export default useContentStore
