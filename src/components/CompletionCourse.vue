<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'

import ScrollPanel from 'primevue/scrollpanel/ScrollPanel'
import LevelProgress from './LevelProgress.vue'
import CardProgress from './CardProgress.vue'

import useContentStore from '@/store/content'

export default defineComponent({
  components: {
    LevelProgress,
    CardProgress,
    ScrollPanel,
  },

  setup() {
    const contents = reactive([
      {
        id: '4372ebd1-2ee8-4501-9ed5-549df46d0eb0',
        title: 'Introdução à Cultura Tech',
        description:
          'Uma imagem ilustrativa sobre a cultura de trabalho em equipe.',
        url: 'http://localhost:3000/uploads/image1.jpg',
        total_likes: 0,
        type: 'image',
        cover: 'http://localhost:3000/uploads/image1-cover.jpg',
        company_id: '5e444e9c-66a9-4004-bde5-db5e614e5c34',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: '26a42e72-cc93-44b3-acae-01537a36322b',
        title: 'Ambiente de Trabalho Moderno',
        description:
          'Uma imagem representando espaços colaborativos e inovação nas empresas de tecnologia.',
        url: 'http://localhost:3000/uploads/image2.png',
        total_likes: 2,
        type: 'image',
        cover: 'http://localhost:3000/uploads/image2-cover.jpg',
        company_id: '5e444e9c-66a9-4004-bde5-db5e614e5c34',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: '7acff1c5-4c43-4923-a323-d22a12573041',
        title: 'Guia de Boas Práticas em Desenvolvimento',
        description:
          'Um documento detalhado sobre boas práticas de programação e metodologias ágeis.',
        url: 'http://localhost:3000/uploads/pdf1.pdf',
        total_likes: 4,
        type: 'pdf',
        cover: 'http://localhost:3000/uploads/pdf1-cover.jpg',
        company_id: '5e444e9c-66a9-4004-bde5-db5e614e5c34',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: '3a5a94aa-17da-4e9a-b493-fe7e81294631',
        title: 'Manual de Arquitetura de Software',
        description:
          'Um manual técnico abordando padrões arquiteturais e boas práticas para sistemas escaláveis.',
        url: 'http://localhost:3000/uploads/pdf2.pdf',
        total_likes: 6,
        type: 'pdf',
        cover: 'http://localhost:3000/uploads/pdf2-cover.jpg',
        company_id: 'c86b4e57-23d8-48f3-9f1d-d9325e5a2ccd',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: '6969d6c7-40ea-4a3c-b635-d6546b971304',
        title: 'Plataforma de Aprendizado Online',
        description:
          'Acesse este link para cursos e treinamentos voltados para tecnologia e inovação.',
        url: 'https://learning.rocks',
        total_likes: 8,
        type: 'link',
        cover: null,
        company_id: '5e444e9c-66a9-4004-bde5-db5e614e5c34',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: 'd060ab17-c961-4de7-929f-a0d52aa3ecf4',
        title: 'Inteligência artificial',
        description: null,
        url: 'http://localhost:3000/uploads/video1.mp4',
        total_likes: 10,
        type: 'video',
        cover: 'http://localhost:3000/uploads/video1-cover.jpg',
        company_id: '5e444e9c-66a9-4004-bde5-db5e614e5c34',
        created_at: '2025-02-03T22:41:50.798Z',
      },
      {
        id: '7acff1c5-4c43-4923-a323-d22a12573044',
        title: 'Guia de Boas Práticas em Desenvolvimento FORMATO TEXTO',
        type: 'txt',
        description:
          'Um documento detalhado sobre boas práticas de programação e metodologias ágeis.FORMATO TEXTO',
        cover: 'http://localhost:3000/uploads/txt1-cover.txt',
        url: 'http://localhost:3000/uploads/txt1.txt?expires=1739388929&signature=q66k98',
        created_at: '2025-02-11T19:40:02.022Z',
        total_likes: 4,
      },
    ])

    const { loadByIdContent, contentById } = toRefs(useContentStore())

    onMounted(async () => {
      if (contents.length > 0) {
        await loadByIdContent.value(contents[0].id)
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
      style="padding: 0; gap: 20px; width: 100%; height: 500px"
    >
      <div
        v-for="item in contents"
        :key="item.id"
        @click.stop="loadByIdContent(item.id)"
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
@media (max-width: 768px) {
  .completion-course {
    width: 100%;
  }
}
</style>
