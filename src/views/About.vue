<template>
  <div class="bg-white">
    <div class="pt-6">

      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img v-bind:src="product.images[0].src" :alt="product.images[0].alt"
            class="h-full w-full object-cover object-center" />
        </div>

        <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>
            <div class="mt-10">
              <div class="mt-4 space-y-6">
                <h2 class="text-sm text-gray-600">{{ product.details }}</h2>
              </div>
            </div>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>


    </div>
  </div>
</template>
  
<script setup>
  import Photo from '../assets/img/about-test.jpg'

const product = {
  name: 'Morrow Manor Photography',

  images: [
    {
      src: Photo,
      alt: 'Portrait of Austin and Marissa',
    },  
  ],
  
  details:
  'WE LOVE PHOTOS. WE LOVE PEOPLE.',

  description:
  "Hi! We're Austin & Marissa. We're newlywed best friends who love coffee, travel, and The Office. Our backgrounds are actually in social work (homeless & domestic violence services) but we are also passionate about serving people with our art. That's where photography comes in. Being able to express our creativity while capturing the joy in life for our clients is why we started this business. We would love to adventure with you & share in those big moments~The Morrows"
}

</script>