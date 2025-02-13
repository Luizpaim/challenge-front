<script lang="ts">
import ProgressBar from 'primevue/progressbar/ProgressBar'
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  components: {
    ProgressBar,
  },

  setup() {
    const progress = ref(0)

    const interval = ref(null)

    const startProgress = () => {
      interval.value = setInterval(() => {
        let newValue = progress.value + Math.floor(Math.random() * 10) + 1
        if (newValue >= 100) {
          newValue = 100
        }
        progress.value = newValue
      }, 2000) as any
    }

    const endProgress = () => {
      clearInterval(interval.value!)
      interval.value = null
    }

    onMounted(() => {
      startProgress()
    })

    onBeforeUnmount(() => {
      endProgress()
    })

    return {
      progress,
    }
  },
})
</script>
<template>
  <div class="level-progess">
    <span class="title">Your Study Progress</span>
    <div class="progress">
      <ProgressBar class="progress-bar" :value="progress" />
    </div>
    <p class="description">
      Great Job! 🎉 You're on the path to becoming a certified Mastering
      Illustration. Your dedication to learning is impressive. Finish strong!
    </p>
  </div>
</template>
<style lang="css" scoped>
.progress-bar {
  border-radius: 15px;
  background-color: #003366 !important;
}
.description {
  font-size: 18px;
  color: #555555;
}
.level-progess {
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 12px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: 100%;
}
.title {
  font-size: 20px;
  font-weight: 500;
  color: #333333;
}
</style>
