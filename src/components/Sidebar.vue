<template>
    <aside class="sidebar bg-gray-800 text-white">
        <SidebarNav/>
    </aside>
</template>
  
  <style>
  .sidebar {
    /* Add your sidebar styles here */
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  </style>
  
<script>
import SidebarNav from '@/components/SideBarNav.vue'

export default {
components: {
  SidebarNav
}
}
</script>