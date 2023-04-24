<script setup>
import { useAuthStore } from '~/stores/auth'
const supabase = useSupabaseClient();
const authStore = useAuthStore();
supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore()
  const user = session?.user ?? null
  authStore.setUser(user)
})
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
