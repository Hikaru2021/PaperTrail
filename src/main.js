
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjlWiMXgXJ8MEmLPEq5IdG_SYjIh0XJE",
  authDomain: "papertrail-d5b94.firebaseapp.com",
  projectId: "papertrail-d5b94",
  storageBucket: "papertrail-d5b94.appspot.com",
  messagingSenderId: "358983312117",
  appId: "1:358983312117:web:b128a8b31b1b6030f45bbc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
