<template>
  <div class="flex p-2 bg-white rounded-[5px] m-1 mt-0 items-center cursor-pointer hover:bg-main-primary/10"
    v-for="account in accounts" :key="account.id" @click="switchAccount(account)">
    <div class="p-1">
      <img class="w-8 h-8 mr-2 rounded-full"
        :src="account.avatar ? account.avatar : 'https://lh3.googleusercontent.com/a/AEdFTp5wTZZVsK6bSsRooa6fNsPZEwM3mGdC8w-3eeNAyHw=s83-c-mo'"
        alt="Avatar">
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-md font-medium text-gray-900 truncate dark:text-white">
        {{ account.email }}
      </p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        {{ account.last_sign_in_at }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const authStore = useAuthStore()
    const accounts = authStore.users
    return { accounts }
  },
  methods: {
    switchAccount(account) {
      // Code to switch to the selected account
      console.log(`Switching to account: ${account.email}`);
    },
  },
};
</script>
