<script lang="ts">
import { defineComponent, computed } from 'vue'

import Panel from 'primevue/panel/Panel'

import TypeContentPlayerIcon from '@/utils/content-player-icon'

export default defineComponent({
  components: {
    Panel,
  },
  props: {
    id: String,
    title: String,
    url: String,
    totalLikes: Number,
    type: String,
    cover: String,
    companyId: String,
    createdAt: String,
    description: String,
  },

  setup(props) {
    const icon = computed(
      () =>
        TypeContentPlayerIcon[props.type as keyof typeof TypeContentPlayerIcon]
    )
    return {
      icon,
    }
  },
})
</script>
<template>
  <Panel class="panel-content" :header="title" toggleable>
    <template #header>
      <div class="card-progress">
        <div class="icon">
          <i :class="icon" style="font-size: 1.5rem"></i>
        </div>
        <div class="content">
          <span>{{ title }}</span>
        </div>
      </div>
    </template>
    <p>{{ description }}</p>
  </Panel>
</template>
<style lang="css" scoped>
.panel-content {
  border-radius: 12px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  font-family: 'Poppins';
}
.card-progress {
  width: 100%;

  display: flex;
  text-align: flex-start;
  justify-content: flex-start;
  gap: 20px;
}
.icon {
  display: flex;
  align-self: center;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
  }
}
</style>
