<template>
  <nav>
    <!-- Desktop Menu -->
    <div>
      <div className="max--7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 py-5 px-2">
          <!-- Logo -->
          <div className="flex items-center py-5 px-2 text-xl font-bold">Morrow Manor Photography</div>
          <!-- Routes -->
          <div className="flex items-center space-x-1">
            <router-link to="/" className="py-5 px-2">home</router-link>
            <router-link to="/about" className="py-5 px-2">about</router-link>
            <router-link to="/galleries" className="py-5 px-2">galleries</router-link>
            <router-link to="/inquire" className="py-5 px-2">inquire</router-link>
          </div>
        </div>
          <!-- Show Mobile Button -->
          <div></div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div></div>
  </nav>
</template>

<script setup>


</script>