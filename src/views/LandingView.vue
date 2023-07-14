<template>
    <div class="h-screen bg-sky-950">
      <div class="bg-image absolute inset-0 opacity-30"></div>
      <div class="relative bg-sky-950 opacity-90">
        <nav class="h-14">
          <div class="grid grid-cols-2 h-full">
            <div class="w-full flex items-start justify-start p-4">
              <img src="/Logo-01.png" alt="Logo" class="w-56 h-6 mt-1" />
            </div>
            <div class="w-full flex items-end justify-end p-4 text-white">
              <button class="flex items-center p-2 text-sm hover:underline-offset-1">Sign In</button>
              <button class="bg-blue-500 flex items-center justify-center p-2 rounded-full text-sm w-36 ml-3">Get Started for Free</button>
            </div>
          </div>
        </nav>
        <div class="h-full">
          <div class="h-screen">
            hello
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .bg-image {
      background-image: url('/bg-landing.jpg');
      background-size: cover;
    }
  </style>
  