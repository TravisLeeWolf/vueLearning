<script setup>
import MainHeader from './components/MainHeader.vue';
import ProjectList from './components/ProjectList.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <MainHeader />
  <div class="text-center p-2 space-y-2 max-w-6xl mx-auto">
    <h2 class="text-2xl">The projects below along with this webpage are all made using Vue.JS</h2>
    <div class="columns-2 gap-4 max-w-xl mx-auto">
      <p>You can also click the button to view the GitHub repo for my Vue projects</p>
      <div class="pt-3">
        <a class="p-1 border border-black rounded shadow-md bg-blue-400 text-white" href="https://github.com/TravisLeeWolf/vueLearning" target="_blank">Vue GitHub Repo</a>
      </div>
    </div>
  </div>
  <ProjectList />
  <div class="min-h-screen"></div>
  <MainFooter />
</template>
