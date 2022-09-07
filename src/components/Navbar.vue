<!-- 
  <nav>
     Desktop Menu
    <div>
      <div className="max--7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 py-5 px-2">
          Logo 
          <div className="flex items-center py-5 px-2 text-xl font-bold">Morrow Manor Photography</div>
          Routes 
          <div className="flex items-center space-x-1">
            <router-link to="/" className="py-5 px-2">home</router-link>
            <router-link to="/about" className="py-5 px-2">about</router-link>
            <router-link to="/galleries" className="py-5 px-2">galleries</router-link>
            <router-link to="/inquire" className="py-5 px-2">inquire</router-link>
          </div>
        </div>
          Show Mobile Button 
          <div></div>
        </div>
      </div>
    </div> -->

    <template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          
            <span class="sr-only">Morrow Manor Photography</span>
            <h1 class="h-8 w-auto sm:h-10">Morrow Manor Photography</h1>
          
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
      

            <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">home</router-link>
            <router-link to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">about</router-link>
            <router-link to="/galleries" class="text-base font-medium text-gray-500 hover:text-gray-900">galleries</router-link>
            <router-link to="/inquire" class="text-base font-medium text-gray-500 hover:text-gray-900">inquire</router-link>


        </PopoverGroup>
       
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="h-8 w-auto">Morrow Manor Photography</h2>
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
         
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            
            
            <router-link to="/" class="text-base font-medium text-gray-900 hover:text-gray-700">home</router-link>
            <router-link to="/about" class="text-base font-medium text-gray-900 hover:text-gray-700">about</router-link>
            <router-link to="/galleries" class="text-base font-medium text-gray-900 hover:text-gray-700">galleries</router-link>
            <router-link to="/inquire" class="text-base font-medium text-gray-900 hover:text-gray-700">inquire</router-link>

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