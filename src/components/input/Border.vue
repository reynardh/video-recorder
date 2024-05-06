<template>
  <div
    class="border flex flex-row-reverse overflow-hidden rounded-md border-slate-400 bg-white focus-within:border-slate-400"
    :class="{
      '!border-0': props.borderless
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    borderless?: boolean
  }>(),
  {
    borderless: false
  }
)
</script>
