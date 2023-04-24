<template>
    <div class="grid grid-rows-auto gap-1 place-items-stretch">
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none google-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Google'" :disabled="loading" @click="login('google')">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:google" size="30" class="text-red-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none twitter-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Twitter'" :disabled="loading" @click="login('twitter')">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:twitter" size="30" class="text-sky-400" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none facebook-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Facebook'" :disabled="loading" @click="login('facebook')">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:facebook" size="30" class="text-blue-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none spotify-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Spotify'" :disabled="loading" @click="login('spotify')">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:spotify" size="30" class="text-lime-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none twitch-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Twitch'" :disabled="loading" @click="login('twitch')">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:twitch" size="30" class="text-violet-600" />
            </template>
        </button>
    </div>
</template>


<script setup lang="ts">
const router = useRouter()
const loading = ref(false);

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/accounts',
    }
})

const login = async (provider: 'google' | 'twitter' | 'facebook' | 'spotify' | 'twitch') => {
    const { status, data, signOut, signIn } = useAuth()

    try {
        await signIn(provider)
        console.log(`Successfully logged in with ${provider}!`)
        router.push('/accounts')
    } catch (error) {
        alert((error as any).error_description || (error as any).error.message)
    }
}

</script>