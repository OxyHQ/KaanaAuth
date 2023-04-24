<template>
  <div>
    <NuxtLink class="flex p-2 bg-white rounded-[25px] rounded-t-[5px] m-1 mt-0 items-center hover:bg-main-primary/10"
      to="/login">
      <div class="p-1 ml-1 mr-2">
        <Icon name="material-symbols:person-add-outline" size="24" />
      </div>
      <p class="ml-1">Add another account</p>
    </NuxtLink>
    <div class="flex p-2 m-1 mt-0 items-center">
      <div class="p-1 ml-1">
        <Icon name="material-symbols:logout" size="24" />
      </div>
      <p class="ml-1">Sign out</p>
    </div>
  </div>
</template>
