<template>
  <div class="h-screen bg-color">
    <div class="bg-image absolute inset-0 opacity-60"></div>
    <div class="relative bg-color opacity-90">
      <nav class="h-14">
        <div class="grid grid-cols-2 h-full">
          <div class="w-full flex items-start justify-start p-4">
            <img src="/Logo-01.png" alt="Logo" class="w-56 h-6 mt-1" />
          </div>
          <div class="w-full flex items-end justify-end p-4 text-white">
            <button @click="showSignInModal = true" class="flex items-center p-2 text-sm hover:underline-offset-1 ">Sign In</button>
            <button @click="showSignUpModal = true" class="bg-button flex items-center justify-center p-2 rounded-full text-sm w-36 ml-3">Get Started for Free</button>
          </div>
        </div>
      </nav>
      <div class="h-screen bg-color">
        
      </div>
    </div>
  </div>
  <div class="h-screen">
    <SignUpModal v-if="showSignUpModal" @close-modal="showSignUpModal = false" />
    <SignInModal v-if="showSignInModal" @close-modal="showSignInModal = false" />
  </div>
</template>

<script>
import SignUpModal from '@/components/SignUpModal.vue';
import SignInModal from '@/components/SignInModal.vue';

export default {
  components: {
    SignUpModal,
    SignInModal
  },
  data() {
    return {
      showSignUpModal: false,
      showSignInModal: false
    };
  }
};
</script>

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
  