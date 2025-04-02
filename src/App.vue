<style scoped></style>

<template>
  <!-- 헤더와 푸터는 고정 -->
  <CommonHeader />

  <CommonBody>
    <RouterView />
  </CommonBody>

  <CommonFooter />
</template>

<script setup>
import { RouterView } from 'vue-router';
import CommonHeader from './components/layouts/CommonHeader.vue';
import CommonFooter from './components/layouts/CommonFooter.vue';
import CommonBody from './components/layouts/CommonBody.vue';
</script>
