<script lang="ts">
import { defineComponent } from 'vue'
import TitlePage from '@/components/TitlePage.vue'

export default defineComponent({
  components: {
    TitlePage,
  },
})
</script>
<template>
  <div class="breadcrumb-content">
    <TitlePage title="Mastering Illustrtion" />
  </div>
</template>
<style lang="css" scoped>
.breadcrumb-content {
  gap: 20px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: #666666;
  font-family: 'Poppins';
}
.breadcrumb {
  border: none;
  padding: 0;
}
</style>
