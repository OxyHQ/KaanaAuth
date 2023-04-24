<template>
  <transition name="slide-fade">
    <div class="bg-white dark:bg-gray-900 m-1 p-10 rounded-[25px] flex-1 sm:h-auto">
      <Auth />
      <div>
        <p>Or use your logged account</p>
        <useAccounts />
        <button @click="signIn('credentials', { username: 'test', password: 'hunter2' })">Username and Password</button>
      </div>
    </div>
  </transition>
</template>

<style>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
  background-color: var(--bg);
}

.input:focus+.label,
.input:active+.label,
.input.filled+.label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.9rem;
  background-color: var(--bg);
  color: #1a73e8;
  padding: 0 5px 0 5px;
  margin: 0 5px 0 5px;
}

.label {
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}
</style>