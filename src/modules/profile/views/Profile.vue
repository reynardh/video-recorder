<template>
  <div class="h-full">
    <h1 class="text-xl">Profile settings</h1>

    <div class="flex h-full items-center justify-center">
      <div class="flex w-full max-w-sm flex-col space-y-4">
        <div class="mb-4 flex justify-center">
          <div class="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-100 p-6">
            <PhImage class="h-full w-full text-slate-300" />
          </div>
        </div>

        <Input
          type="text"
          label="First name"
          v-model="profile.firstName"
          placeholder="First name"
        />
        <Input type="text" label="Last name" v-model="profile.lastName" placeholder="Last name" />
        <Input
          type="text"
          label="Phone number"
          v-model="profile.phone"
          placeholder="Phone number"
        />

        <div class="flex flex-col">
          <label class="mb-1 text-sm text-slate-700 font-medium">Bio</label>
          <textarea
            type="text"
            v-model="profile.bio"
            placeholder="Bio"
            class="resize-none rounded-md border-slate-400"
            rows="3"
          />
        </div>

        <div class="pt-4">
          <Button class="w-full">Update Profile</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { PhImage } from '@phosphor-icons/vue'
import Button from '@/components/Button.vue'
import Input from '@/components/input/Input.vue'

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  phone: '1234567890',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc gravida fermentum. Nullam nec purus nec nunc gravida fermentum.'
}
</script>
