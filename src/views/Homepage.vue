<template>
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex flex-col flex-1">
        <Navbar />
        <div class="flex-1 bg-white">
          <!-- Main content -->
        </div>
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavBar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    components: {
      Navbar,
      Sidebar,
      Footer
    }
  }
  </script>