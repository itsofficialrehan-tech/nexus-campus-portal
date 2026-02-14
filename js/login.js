

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const role = document.querySelector("select").value;

    /* COMMON PASSWORD */
    const COMMON_PASSWORD = "codinghunter";

    /* PASSWORD CHECK */
    if (password !== COMMON_PASSWORD) {
        alert("Invalid password!");
        return;
    }

    /* ROLE + EMAIL VALIDATION */
    if (role === "Admin") {
        if (!email.endsWith("@admin.campus.edu")) {
            alert("Admin must use @admin.campus.edu email");
            return;
        }
        window.location.href = "admin-dashboard.html";
    }

    else if (role === "Staff / Teacher") {
        if (!email.endsWith("@staff.campus.edu")) {
            alert("Staff must use @staff.campus.edu email");
            return;
        }
        window.location.href = "staff-dashboard.html";
    }

    else if (role === "Student") {
        /* Any Gmail or campus mail allowed */
        window.location.href = "student-dashboard.html";
    }

    else {
        alert("Please select a role");
    }
});

/* GOOGLE LOGIN (UI DEMO) */
document.querySelector(".google-login").addEventListener("click", () => {
    alert("Google Sign-In enabled (demo mode)");
});
