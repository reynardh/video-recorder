<template>
  <div class="relative flex w-full flex-col gap-2 rounded-xl border border-slate-200 p-6">
    <div class="aspect-square max-h-40 w-full shrink-0 rounded-xl bg-slate-200 p-2">
      <PhImage class="h-full w-full text-slate-300" />
    </div>

    <div class="text-base font-medium">
      {{ props.date }}
    </div>

    <div
      v-if="props.isLive"
      class="mt-4 flex h-10 items-center rounded-lg justify-center bg-slate-50 text-sm text-slate-600"
    >
      <PhCheckCircle class="h-6 w-6 text-primary-500" />
      <span class="ml-2 font-medium">Live video</span>
    </div>

    <Button v-else :outline="true" class="mt-4 w-full">
      <div class="flex items-center">
        <PhStar class="h-5 w-5 text-primary-500" />
        <span class="ml-2">Make Live</span>
      </div>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { PhStar, PhImage, PhCheckCircle } from '@phosphor-icons/vue'
import Button from '@/components/Button.vue'

const props = defineProps<{
  date: string
  isLive: boolean
}>()
</script>
