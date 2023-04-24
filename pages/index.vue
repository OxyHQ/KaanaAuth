<template>
  <div>
    <div v-if="authStore.isLoggedIn" class="flex flex-col items-center">
      <img class="w-[2rem] mb-2" src="~/assets/images/logoIcon.png" alt="Kaana Logo" />
      <span class="text-2xl font-semi-bold mt-1">Welcome, {{ authStore.currentUser.email }}!</span>
      <p class="leading-normal font-semi-bold">Use your Kaana Account</p>
    </div>
    <div v-else>
      <h1>Please log in.</h1>
    </div>
  </div>
</template>


<script>
import { useAuthStore } from '~/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
}
</script>