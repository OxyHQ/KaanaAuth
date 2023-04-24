<template>
  <div>
    <CurrentAccountInfo />
    <CurrentUsers />
    <AccountsSwitcherBottom />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>