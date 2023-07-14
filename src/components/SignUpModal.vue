<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-70"></div> <!-- Modal overlay -->
      <div class="bg-color p-14 h-3/5 w-96 rounded-2xl shadow-md relative">
        <button class="absolute top-2 right-2 p-2 bg-" @click="$emit('close-modal')">
            <img src="/x-icon.svg" alt="SVG Image" class="h-4"/>
        </button>
        <h1 class="text-4xl text-white flex justify-center items-center mb-12">Sign Up!</h1>
        <h1 class="text-sky-600">Email</h1>
        <input type="text" class="border border-gray-300 p-1 rounded-lg shadow-sm w-full" placeholder="Enter your email" v-model="email">
        <h1 class="text-sky-600">Password</h1>
        <input type="password" class="border border-gray-300 p-1 rounded-lg shadow-sm w-full" placeholder="Enter your password" v-model="password">
        <div class="flex justify-center items-center p-1 mt-5">
            <button @click="register" class="bg-button rounded-xl p-2 w-60">Create Account</button>
        </div>
        <div class="flex justify-center items-center p-1">
            <button class="p-1 mt-2 text-sky-700">Already have an account?</button>
        </div>
        <div class="flex justify-center items-center p-1">
            <button class="bg-button mt-2 text-black rounded-xl p-2 w-60">Sign In with Google</button>
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

<script setup>
import { ref } from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'

const email = ref("")
const password = ref ("")
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((date) =>{
        console.log("Successfully Registered!");
        router.push('/home')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};
const signInWithGoogle = () => {

}
</script>
  