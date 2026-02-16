import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ইউজার লগইন আছে কি না চেক করা
onAuthStateChanged(auth, (user) => {
    if (user) {
        // ইউজার নাম আপডেট করা
        document.querySelector('.content-header h2 span').innerText = user.email.split('@')[0];
        // ডাটাবেজ থেকে প্রবলেম নিয়ে আসা
        loadProblems(user.uid);
    } else {
        // লগইন না থাকলে লগইন পেজে পাঠিয়ে দেওয়া
        window.location.href = 'auth.html';
    }
});

async function loadProblems(uid) {
    const problemGrid = document.getElementById('problemGrid');
    problemGrid.innerHTML = '<p>Loading problems...</p>';

    try {
        const q = query(
            collection(db, "problems"), 
            where("userId", "==", uid),
            orderBy("createdAt", "desc")
        );
        
        const querySnapshot = await getDocs(q);
        problemGrid.innerHTML = ''; // লোডিং মেসেজ মুছে ফেলা

        if (querySnapshot.empty) {
            problemGrid.innerHTML = '<p>কোনো প্রবলেম পাওয়া যায়নি। নতুন প্রবলেম অ্যাড করুন!</p>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const card = document.createElement('div');
            card.className = 'prob-card';
            card.innerHTML = `
                <div class="prob-info">
                    <h4>${data.title || 'Untitled'}</h4>
                    <span>ID: ${data.probId} | Origin: <a href="${data.url}" target="_blank">Link</a></span>
                </div>
                <button class="solve-btn" onclick="editProblem('${doc.id}')">Solve Again</button>
            `;
            problemGrid.innerHTML += card.outerHTML;
        });

        // টোটাল সলভ আপডেট করা
        document.querySelector('.stat-card h3').innerText = querySnapshot.size;

    } catch (error) {
        console.error("Error fetching problems:", error);
        problemGrid.innerHTML = '<p>ডেটা লোড করতে সমস্যা হচ্ছে।</p>';
    }
}
