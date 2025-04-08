<style scoped>
.container {
  max-width: 768px !important;
  border: 1px solid #000;
  min-height: 100vh;
  padding: 0;
  position: relative;
}
main {
  padding: 2rem 1rem 6rem;
}
</style>
<template>
  <div class="container bg-gray-1">
    <DetailHeader>
      <slot name="header"></slot>
    </DetailHeader>

    <main class="d-flex align-items-center flex-column">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import DetailHeader from './DetailHeader.vue';
</script>
