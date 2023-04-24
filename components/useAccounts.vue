<template>
    <div class="flex flex-row items-center p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none"
        v-for="account in accounts" :key="account.id" @click="switchAccount(account)">
        <img class="w-12 h-12 mr-3 rounded-full bg-black dark:bg-white"
            :src="account.avatar ? account.avatar : 'https://lh3.googleusercontent.com/a/AEdFTp5wTZZVsK6bSsRooa6fNsPZEwM3mGdC8w-3eeNAyHw=s83-c-mo'"
            alt="Avatar">
        <div class="flex-1 min-w-0 text-black dark:text-white">
            <p class="text-md font-medium truncate">
                {{ account.email }}
            </p>
            <p class="text-sm truncate text-gray-600 dark:text-gray-500">
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
