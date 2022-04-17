<script setup>
import { RouterLink } from 'vue-router';
import IconDashboard from './icons/IconDashboard.vue';
import IconTasks from './icons/IconTasks.vue';
import IconEmail from './icons/IconEmail.vue';
import IconContact from './icons/IconContact.vue';
import IconChat from './icons/IconChat.vue';
import IconDeals from './icons/IconDeals.vue';

const menuLinks = [
  { to: '/', icon: IconDashboard, text: 'Dashboard' },
  { to: '/tasks', icon: IconTasks, text: 'Tasks' },
  { to: '/email', icon: IconEmail, text: 'Email' },
  { to: '/contacts', icon: IconContact, text: 'Contacts' },
  { to: '/chat', icon: IconChat, text: 'Chat' },
  { to: '/deals', icon: IconDeals, text: 'Deals' },
];
</script>

<template>
  <aside class="font-medium shadow-[6px_0_18px_0_rgba(0,0,0,0.06)]">
    <div class="px-6 h-[60px] flex items-center border-b">
      <RouterLink to="/">
        <img src="./logo.svg" />
      </RouterLink>
    </div>

    <div class="p-6">
      <div class="flex items-center">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          class="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div class="mb-1 text-lg">Sierra Ferguson</div>
          <div class="text-grey-400 text-xs">s.ferguson@gmail.com</div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-y-5 items-start">
        <RouterLink
          v-for="link in menuLinks"
          :key="link.text"
          v-slot="{ isActive }"
          :to="link.to"
          class="flex items-center group text-blue-900"
          active-class="text-blue-400"
        >
          <component
            :is="link.icon"
            class="mr-4"
            :class="isActive ? 'text-blue-400' : 'text-grey-300'"
          ></component>
          {{ link.text }}
        </RouterLink>
      </div>
    </div>
  </aside>
</template>
