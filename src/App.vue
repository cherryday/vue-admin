<script setup>
import { RouterView } from 'vue-router';
import MainSidebar from './components/MainSidebar.vue';
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <div>
    <div class="flex">
      <MainSidebar></MainSidebar>
      <MainHeader />
    </div>

    <main>
      <RouterView />
    </main>
  </div>
</template>
