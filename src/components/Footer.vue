<template>
    <footer class="bg-gray-200 text-black py-4">
      <div class="container mx-auto px-4">
        <p class="text-center">&copy; {{ currentYear }} - Present Paper Trail Inc. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: calc(100% - 240px); /* Subtract the width of the sidebar from the container's width */
    margin-left: 240px; /* Set the left margin to match the sidebar's width */
  }
  </style>
  