   <template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
    import Navbar from './views/nav/Navbar.vue'
    import Footer from './views/nav/Footer.vue'
</script>
