<template>
  <div class="h-full min-h-full bg-slate-50">
    <Navbar />

    <div class="py-10" style="height: calc(100% - 64px)">
      <main class="mx-auto h-full max-w-7xl rounded-xl bg-white sm:px-6 lg:px-12 lg:py-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
</script>
