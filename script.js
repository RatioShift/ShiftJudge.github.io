function saveProblem() {
    const probId = document.getElementById('probNum').value;
    const url = document.getElementById('originUrl').value;
    if(probId) {
        localStorage.setItem('currentProb', probId);
        localStorage.setItem('currentUrl', url);
        alert('প্রবলেম সেট করা হয়েছে!');
    }
}

function copyCode() {
    const code = document.getElementById('codeEditor');
    code.select();
    document.execCommand('copy');
    alert('কোড কপি হয়েছে!');
}

function openBeecrowd() {
    const probId = localStorage.getItem('currentProb');
    if(probId) {
        // সরাসরি সাবমিট পেজে যাওয়ার চেষ্টা করবে
        const submitUrl = `https://www.beecrowd.com.tr/judge/en/runs/add/${probId}`;
        window.open(submitUrl, '_blank');
    } else {
        alert('আগে প্রবলেম আইডি সেভ করুন!');
    }
}
