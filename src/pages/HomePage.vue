<style scoped></style>

<template>
  <BaseLayout>
    <div class="d-flex flex-column gap-block w-100">
      <MainBlock />
      <PaymentsBlock />
      <CommonFooter />
    </div>
  </BaseLayout>
  <!-- <DetailLayout>
    <template v-slot:header>여기에 이것저것 들어갑니다.</template>
    <div class="d-flex flex-column gap-block w-100">
      <MainBlock />
      <PaymentsBlock />
      <CommonFooter />
    </div>
  </DetailLayout> -->
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue';
import MainBlock from '@/components/home/MainBlock.vue';
import PaymentsBlock from '@/components/home/PaymentsBlock.vue';
import CommonFooter from '@/components/layouts/CommonFooter.vue';
</script>
