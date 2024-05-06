<template>
  <div>
    <Tabs :tabs="tabs">
      <template #tab1>
        <div class="flex px-10">
          <div class="w-full max-w-60 space-y-3">
            <div class="mb-4 font-medium">Candidates</div>
            <Checkbox label="All candidates" />
            <Checkbox label="Shortlisted" />
            <Checkbox label="Not shortlisted" />

            <div class="mb-4 pt-6 font-medium">Contract type</div>
            <Checkbox label="Full time" />
            <Checkbox label="Short term" />
            <Checkbox label="Internship" />
          </div>

          <div class="grid grid-cols-1 gap-4">
            <Candidate
              v-for="candidate in candidates"
              :key="candidate.id"
              :candidateId="candidate.id"
              :firstName="candidate.firstName"
              :lastName="candidate.lastName"
              :bio="''"
            />
          </div>
        </div>
      </template>

      <template #tab2>
        <div class="flex px-10">
          <div class="w-full max-w-60 space-y-3">
            <div class="mb-4 font-medium">Candidates</div>
            <Checkbox label="All candidates" />
            <Checkbox label="Shortlisted" />
            <Checkbox label="Not shortlisted" />

            <div class="mb-4 pt-6 font-medium">Contract type</div>
            <Checkbox label="Full time" />
            <Checkbox label="Short term" />
            <Checkbox label="Internship" />
          </div>

          <div class="grid grid-cols-1 gap-4">
            <Candidate
              v-for="candidate in candidatesWithCandidacy"
              :key="candidate.id"
              :candidateId="candidate.id"
              :firstName="candidate.firstName"
              :lastName="candidate.lastName"
              :proposition-date="candidate.Candidacy[0].createdAt"
              :bio="''"
            />
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import Candidate from '../components/Candidate.vue'
import Checkbox from '@/components/Checkbox.vue'

const tabs = [
  { title: 'Find candidate', value: 'tab1' },
  { title: 'My candidates', value: 'tab2' }
]

const candidates = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe'
  }
]

const candidatesWithCandidacy = [
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Black',
    Candidacy: [
      {
        id: 1,
        createdAt: '24 April 2024'
      }
    ]
  }
]
</script>
