import { db, auth } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function saveToDatabase() {
    const user = auth.currentUser;
    if (!user) {
        alert("আগে লগইন করুন!");
        return;
    }

    const problemData = {
        userId: user.uid,
        title: document.getElementById('probTitle').value,
        probId: document.getElementById('probId').value,
        url: document.getElementById('originUrl').value,
        code: document.getElementById('mainEditor').value,
        createdAt: serverTimestamp()
    };

    try {
        await addDoc(collection(db, "problems"), problemData);
        alert("প্রবলেমটি আপনার ড্যাশবোর্ডে সেভ হয়েছে!");
    } catch (error) {
        console.error("Error saving: ", error);
    }
}

// এই ফাংশনটি গ্লোবাল করার জন্য
window.saveToDatabase = saveToDatabase;
