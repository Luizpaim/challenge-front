<script lang="ts">
import { defineComponent } from 'vue'

import HeaderCourse from './HeaderCourse.vue'

import CompletionCourse from './CompletionCourse.vue'

export default defineComponent({
  components: {
    CompletionCourse,
    HeaderCourse,
  },
})
</script>
<template>
  <div class="container-page">
    <div class="sub-container">
      <HeaderCourse />
      <slot />
    </div>
    <CompletionCourse />
  </div>
</template>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

h1,
h2,
h3,
p,
ul,
li,
figure {
  font-family: 'Poppins';
  margin: 0;
  padding: 0;
}
.p-error {
  color: red;
}

html,
body,
*,
button,
input {
  font-family: 'Poppins';
  border: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
.container-page {
  display: flex;
  padding: 20px;
  height: 100vh;
  width: 100%;
  gap: 30px;

  font-size: 14px;
  background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
  background-image: url('https://www.transparenttextures.com/patterns/diagmonds-light.png');
}
.sub-container {
  width: 65%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
}

@media (max-width: 768px) {
  .container-page {
    flex-direction: column;
    padding: 10px;
    height: 100%;
  }
  .sub-container {
    width: 100%;
  }
}
</style>
