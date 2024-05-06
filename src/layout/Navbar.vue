<template>
  <Navbar :items="navbarItems">
    <NavbarDropdown :items="navbarDropdownItems">
      <template #profile="{ active }">
        <button
          :class="[
            active ? 'bg-slate-100' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm'
          ]"
          @click="goToProfile"
        >
          <PhUserCircle class="mr-2 h-5 w-5 text-primary-500" />
          Profile
        </button>
      </template>

      <template #sign-out="{ active }">
        <button
          :class="[
            active ? 'bg-slate-100' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm'
          ]"
        >
          <PhSignOut class="mr-2 h-5 w-5 text-primary-500" />
          Sign out
        </button>
      </template>
    </NavbarDropdown>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import NavbarDropdown from '@/components/navbar/NavbarDropdown.vue'

import { PhUserCircle, PhSignOut } from '@phosphor-icons/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navbarItems = [
  { title: 'Recruiters', to: 'recruiter' },
  { title: 'Candidates', to: 'candidate' },
  { title: 'About us', to: 'home' },
  { title: 'Contact', to: 'home' }
]

const navbarDropdownItems = [{ name: 'profile' }, { name: 'sign-out' }]

function goToProfile() {
  router.push({
    name: 'profile'
  })
}
</script>
