<script lang="ts">
import { computed } from 'vue'

import TypeContentPlayerIcon from '@/utils/content-player-icon'

export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
    companyId: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  setup(props: any) {
    const icon = computed(
      () =>
        TypeContentPlayerIcon[props.type as keyof typeof TypeContentPlayerIcon]
    )
    return {
      icon,
    }
  },
}
</script>
<template>
  <PPanel class="panel-content" :header="title" toggleable>
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
  </PPanel>
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
