<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-70"></div> <!-- Modal overlay -->
      <div class="bg-color p-14 h-3/5 w-96 rounded-md shadow-md relative">
        <button class="absolute top-2 right-2 p-2 bg-" @click="$emit('close-modal')">
            <img src="/x-icon.svg" alt="SVG Image" class="h-4"/>
        </button>
        <h1 class="text-4xl text-white flex justify-center items-center mb-16">Sign Up!</h1>
        <h1 class="text-sky-600">Email</h1>
        <h1 class="text-sky-600">Username</h1>
        <h1 class="text-sky-600">Password</h1>
      </div>
    </div>
</template>

<style scoped>
    .bg-image {
      background-image: url('/bg-landing.jpg');
      background-size: cover;
    }

    .bg-color{
      background-color: #161B33;
    }

    .bg-button
    {
      background-color: #474973;
    }
  </style>
  