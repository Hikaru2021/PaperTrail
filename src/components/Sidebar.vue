<template>
  <aside class="sidebar bg-gray-800 text-white">
    <div>
      <SidebarNav />
    </div>
    <div class="flex justify-center items-center p-4 hover hover:bg-gray-100 hover:bg-opacity-20 border-b border-gray-200">
      <button class="flex justify-center items-center w-full border-r border-gray-200">
        <img src="/home-icon.svg" alt="Logo" class="h-8 mr-6" /> Home
      </button>
      <button class="hidden sm:block">
        <img src="/setting-icon.svg" alt="Logo" class="h-6 ml-4 mr-7" />
      </button>
    </div>
  </aside>
</template>

<style>
.sidebar {
  /* Add your sidebar styles here */
  width: 255px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

<script>
import SidebarNav from '@/components/SideBarNav.vue';

export default {
  components: {
    SidebarNav
  }
};
</script>
