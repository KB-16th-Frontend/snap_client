<template>
  <Teleport to="#loading">
    <div class="loading-overlay" role="alert" aria-busy="true" aria-live="assertive">
      <Vue3Lottie :width="200" :height="200" :animation-data="loadingJson" />
    </div>
  </Teleport>
</template>

<script setup>
import './LottieLoading.css';
import { Vue3Lottie } from 'vue3-lottie';
import loadingJson from '@/assets/lottie/loading.json';
</script>
