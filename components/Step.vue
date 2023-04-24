<template>
  <div class="flex flex-col items-center space-y-3">
    <svg
      viewBox="0 0 75 24"
      width="75"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      style="enable-background: new 0 0 500 500"
      xml:space="preserve"
    >
      <g>
        <path
          fill="#FBBC04"
          d="M250,366.6c-67.7,0-121.9,22-121.9,50.8c76.2,42.3,169.3,44,245.5,1.7v-1.7C373.6,388.6,317.7,366.6,250,366.6   z"
        />
        <circle class="st0" cx="250" cy="273.5" r="57.6" />
        <path
          fill="#4285F4"
          d="M436.2,226.1C431.2,127.9,348.2,50,250,50S70.5,127.9,63.8,226.1v138.8c10.2,11.9,22,22,33.9,30.5   c11.9-30.5,47.4-49.1,89.7-57.6c-37.2-33.9-37.2-91.4-3.4-128.7s93.1-37.2,130.4-3.4s37.2,93.1,3.4,130.4c-1.7,1.7-1.7,1.7-3.4,3.4   c44,8.5,79.6,28.8,89.7,59.3c11.9-8.5,22-18.6,32.2-28.8V226.1z"
        />
      </g>
    </svg>
    <span class="text-2xl font-semi-bold leading-normal">Sign In</span>
    <p class="leading-normal">Use your Kaana Account</p>
  </div>
  <form class="my-8">
    <div class="relative mb-2">
      <input
        id="email"
        class="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
        type="text"
        autofocus
      />
      <label
        for="email"
        class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"
        >Email or phone</label
      >
    </div>
    <div class="space-y-9">
      <div>
        <a class="text-sm font-bold text-blue-500" href="#">Forgot email?</a>
      </div>
      <div class="text-sm">
        <p>Sign In with other providers?</p>
        <a class="font-bold text-blue-500" href="#">Click here</a>.
      </div>
      <div class="text-sm flex justify-between items-center">
        <a
          class="font-bold text-blue-500 py-2 px-2 rounded-full -ml-2 hover:bg-blue-50 hover:text-blue-700"
          href="#"
          >Create account</a
        >
        <button
          class="py-2 px-6 rounded-full text-white btn bg-black hover:opacity-80"
        >
          Next
        </button>
      </div>
    </div>
  </form>
</template>
