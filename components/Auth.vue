<script setup>
import { useAuthStore } from '~/stores/auth'

const supabase = useSupabaseClient();
const authStore = useAuthStore();
const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error, user } = await supabase.auth.signInWithOtp({ email: email.value });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};

</script>
<template>
  <div class="flex flex-col items-center">
    <img class="w-[3rem]" src="~/assets/images/logoIcon.png" alt="Kaana Logo" />
    <span class="text-2xl font-bold">Sign In</span>
    <p class="leading-normal font-semi-bold mt-1">Use your Kaana Account</p>
  </div>
  <form class="my-8" @submit.prevent="handleLogin">
    <div class="relative mb-2">
      <input id="email"
        class="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
        type="email" v-model="email" autofocus />
      <label for="email" class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Email or
        phone</label>
    </div>
    <div class="space-y-9">
      <div>
        <p class="text-sm">
          <span class="mr-1">What is Kaana?</span>
          <a class="text-blue-500" href="#">Learn More</a>
        </p>
      </div>
      <div class="text-sm">
        <p class="inline pr-1">Sign In with other providers?</p>
        <nuxt-link to="/login/providers" class="inline text-blue-500">Click here</nuxt-link>
      </div>
      <div class="text-sm flex justify-between items-center">
        <NuxtLink to="/login/providers"
          class="text-blue-500 py-2 px-2 rounded-full -ml-2 hover:bg-blue-50 hover:text-blue-700">
          More providers
        </NuxtLink>
        <button class="py-2 px-6 rounded-full text-white btn bg-black hover:opacity-80" type="submit"
          :disabled="loading">
          {{ loading? "Loading": "Send magic link" }}
        </button>
      </div>
    </div>
  </form>
</template>