<template>
    <div class="h-screen relative flex flex-col justify-center items-center">
        <div
            class="relative flex m-auto h-screen sm:h-auto w-screen sm:max-w-[450px] sm:shadow-lg shadow-none sm:rounded-[25px] bg-emerald-50 dark:bg-emerald-900 p-1 sm:border sm:border-gray-300 dark:sm:border-gray-900">
            <div class="m-auto w-full max-w-[450px]">
                <slot class="mx-auto p-4" />
                <Footer />
            </div>
        </div>
        <div>
            <h1>Color mode: {{ $colorMode.value }}</h1>
            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
            </select>
        </div>
    </div>
</template>