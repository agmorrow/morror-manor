<template>
  <Popover class="relative bg-white">
    <!-- Desktop View -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <span class="sr-only">Morrow Manor Photography</span>
          <h1 class="h-8 w-auto sm:h-10">Morrow Manor Photography</h1>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">home</router-link>
          <router-link to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">about</router-link>
          <router-link to="/galleries" class="text-base font-medium text-gray-500 hover:text-gray-900">galleries
          </router-link>
          <router-link to="/contact" class="text-base font-medium text-gray-500 hover:text-gray-900">contact
          </router-link>
        </PopoverGroup>
      </div>
    </div>
    <!-- Mobile View -->
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="h-8 w-auto">Morrow Manor Photography</h1>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-1 gap-y-4 gap-x-8">
              <router-link to="/" class="text-base font-medium text-gray-900 hover:text-gray-700">home</router-link>
              <router-link to="/about" class="text-base font-medium text-gray-900 hover:text-gray-700">about
              </router-link>
              <router-link to="/galleries" class="text-base font-medium text-gray-900 hover:text-gray-700">galleries
              </router-link>
              <router-link to="/contact" class="text-base font-medium text-gray-900 hover:text-gray-700">contact
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'


</script>