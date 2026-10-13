// 1. Submit button par click karne se Dashboard open hoga
function login() {
    window.location.href = "dashboard.html";
}

// 2. Add button par click karne se Add Project page open hoga
function goToAddPage() {
    window.location.href = "add.html";
}

// 3. Save Project par click karne se Pop-up aayega aur Dashboard par wapas jayega
function saveProject() {
    // Alert pop-up dikhana
    alert("Project Added Successfully!");

    // Alert ok hone ke baad wapas dashboard par bhejna
    window.location.href = "dashboard.html";
}