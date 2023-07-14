<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-70"></div> <!-- Modal overlay -->
      <div class="bg-color p-14 h-3/5 w-96 rounded-2xl shadow-md relative">
        <button class="absolute top-2 right-2 p-2 bg-" @click="$emit('close-modal')">
            <img src="/x-icon.svg" alt="SVG Image" class="h-4"/>
        </button>
        <h1 class="text-4xl text-white flex justify-center items-center mb-12">Sign Up!</h1>
        <h1 class="text-sky-600">Email</h1>
        <input type="text" class="border border-gray-300 p-1 rounded-lg shadow-sm w-full" placeholder="Enter your email">
        <h1 class="text-sky-600">Username</h1>
        <input type="text" class="border border-gray-300 p-1 rounded-lg shadow-sm w-full" placeholder="Enter your username">
        <h1 class="text-sky-600">Password</h1>
        <input type="text" class="border border-gray-300 p-1 rounded-lg shadow-sm w-full" placeholder="Enter your password">
        <div class="flex justify-center items-center p-1 mt-5">
            <button class="bg-button rounded-2xl p-2 w-60">Create Account</button>
        </div>
        <div class="flex justify-center items-center p-1">
            <button class="p-1 mt-2 text-sky-700">Already have an account?</button>
        </div>
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
  