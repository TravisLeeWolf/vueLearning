<script setup></script>

<template>
  <nav
    class="flex items-center justify-between p-2 shadow-lg bg-blue-400 text-white"
  >
    <a class="flex items-center space-x-2" href="https://travisthecoder.com">
      <img class="h-10 w-auto main-icon" src="/icon.png" alt="Badge Round" />
    </a>
    <div class="text-2xl">Vue Projects</div>
    <div class="space-x-2">
      <a
        class="p-1 border border-black rounded shadow-md bg-white text-black"
        href="https://www.travisthecoder.com"
        >Home</a
      >
      <a
        class="p-1 border border-black rounded shadow-md bg-white text-black"
        href="https://projects.travisthecoder.com"
        >Back to Projects</a
      >
    </div>
  </nav>
</template>

<style scoped>
@keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
}
  
@media (prefers-reduced-motion: no-preference) {
    .main-icon {
        animation: logo-spin infinite 20s linear;
    }
}
</style>
