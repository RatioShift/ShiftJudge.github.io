import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        if (!isLogin) {
            // সাইন আপ (Create Account)
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account Created Successfully!");
        } else {
            // লগইন (Sign In)
            await signInWithEmailAndPassword(auth, email, password);
        }
        // লগইন সফল হলে ড্যাশবোর্ডে পাঠিয়ে দেবে
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert("Error: " + error.message);
    }
});
