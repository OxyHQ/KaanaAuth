<script setup>
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore();
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
