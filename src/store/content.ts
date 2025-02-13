import { defineStore } from 'pinia'
import { ref } from 'vue'

import { findByIdContent, Content } from '@/services/content.service'

export const useContentStore = defineStore('contents', () => {
  const contentById = ref<Content | null>(null)

  const loading = ref(false)

  const loadByIdContent = async (contentId: string): Promise<boolean> => {
    loading.value = true
    try {
      const { provision } = await findByIdContent(contentId)

      contentById.value = provision

      return true
    } catch (error) {
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    contentById,
    loadByIdContent,
  }
})
