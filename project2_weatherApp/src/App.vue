<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <div class="flex-grow">
    </div>
    <footer class="bg-weather-primary text-white text-center bottom-0">
      <p class="text-lg -mb-4">Travis Naidoo - 2024</p>
      <a class="text-[8px]" href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by Nendra Wahyu  - Flaticon</a>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>