// Theme Toggle - Works on both pages
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Contact Form Validation - Only on contact.html
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset();
    }
});

// Fetch API - Only on index.html
document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
        userList.innerHTML = "<li>Failed to load users. Please try again.</li>";
    }
});

// FAQ Toggle - Only on index.html
document.querySelectorAll(".question")?.forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
    });
});

// BONUS: Real-time Clock (Uncomment to use)
/*
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Initial call
*/

// BONUS: Back to Top Button (Uncomment to use)
/*
window.addEventListener("scroll", () => {
    const btn = document.getElementById("backToTop");
    if (btn) {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
*/