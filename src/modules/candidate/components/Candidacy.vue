<template>
  <div class="flex w-full flex-col gap-2 rounded-xl border border-slate-200 p-6">
    <div class="aspect-square max-h-40 w-full shrink-0 rounded-xl bg-slate-200 p-2">
      <PhImage class="h-full w-full text-slate-300" />
    </div>

    <div class="space-y-1">
      <div class="text-base">
        <span class="font-semibold">{{ props.recruiterName }}</span>
        wants to get to know you!
      </div>
      <div class="text-xs text-slate-500">{{ props.date }}</div>
    </div>

    <div class="mt-2 w-full rounded-lg text-justify text-sm text-slate-600">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero odit eius recusandae ducimus
      ab ratione sunt dolores neque ipsam beatae cupiditate aliquam, velit cum omnis.
    </div>

    <div class="flex w-full gap-2 pt-4">
      <Button :outline="true" class="w-full max-w-52" @click="showAcceptModal = true">
        <div class="flex items-center">
          <PhCheck class="h-5 w-5 text-primary-500" />
          <span class="ml-2">Accept</span>
        </div>
      </Button>

      <Button
        :outline="true"
        class="w-full max-w-52 !border-slate-500 !text-slate-500"
        @click="showDeclineModal = true"
      >
        <div class="flex items-center">
          <PhX class="h-5 w-5 text-slate-500" />
          <span class="ml-2">Decline</span>
        </div>
      </Button>
    </div>
  </div>

  <Modal :show-modal="showAcceptModal" :show-buttons="false" @close="showAcceptModal = false">
    <div class="space-y-2">
      <div class="text-xl font-medium">Accept this Candidacy?</div>

      <div class="space-y-4">
        <div class="text-sm text-slate-600">
          By accepting this candidacy, you will be able to proceed with the recruitment process.
        </div>
      </div>

      <div class="flex justify-end gap-2 pt-2">
        <Button :outline="true" @click="showAcceptModal = false" class="px-4">Cancel</Button>
        <Button class="px-6">Accept</Button>
      </div>
    </div>
  </Modal>

  <Modal :show-modal="showDeclineModal" :show-buttons="false" @close="showDeclineModal = false">
    <div class="space-y-2">
      <div class="text-xl font-medium">Decline this Candidacy?</div>

      <div class="space-y-4">
        <div class="text-sm text-slate-600">
          By declining this candidacy, you decide not to proceed with the recruitment process and
          you won't see this candidacy again.
        </div>
      </div>

      <div class="flex justify-end gap-2 pt-2">
        <Button :outline="true" @click="showDeclineModal = false" class="px-4">Cancel</Button>
        <Button class="px-6">Decline</Button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhCheck, PhX, PhImage } from '@phosphor-icons/vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

const props = defineProps<{
  recruiterName: string
  date: string
}>()

const showAcceptModal = ref(false)
const showDeclineModal = ref(false)
</script>
