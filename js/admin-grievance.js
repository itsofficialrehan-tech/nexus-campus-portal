

document.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.querySelector(".grievance-table tbody");
    const categoryFilter = document.querySelectorAll(".filter-row select")[0];
    const statusFilter = document.querySelectorAll(".filter-row select")[1];

  
    let grievances = [
        {
            id: "#1021",
            student: "Rehan Khan",
            category: "Academic",
            desc: "Delay in internal marks update",
            status: "Pending"
        },
        {
            id: "#1022",
            student: "Arjun Mehta",
            category: "Infrastructure",
            desc: "Lab systems not functioning",
            status: "In Review"
        }
    ];

    // ===============================
    // RENDER TABLE
    // ===============================
    function renderTable(data) {
        tableBody.innerHTML = "";

        data.forEach((g, index) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${g.id}</td>
                <td>${g.student}</td>
                <td>${g.category}</td>
                <td>${g.desc}</td>
                <td>
                    <span class="status ${statusClass(g.status)}">
                        ${g.status}
                    </span>
                </td>
                <td>
                    <button class="action-btn review" data-index="${index}">
                        Review
                    </button>
                    <button class="action-btn resolve" data-index="${index}">
                        Resolve
                    </button>
                </td>
            `;

            tableBody.appendChild(tr);
        });
    }

    // ===============================
    // STATUS CLASS HELPER
    // ===============================
    function statusClass(status) {
        if (status === "Pending") return "pending";
        if (status === "In Review") return "review";
        return "resolved";
    }

    // ===============================
    // BUTTON ACTIONS (DELEGATION)
    // ===============================
    tableBody.addEventListener("click", (e) => {

        const index = e.target.getAttribute("data-index");
        if (index === null) return;

        if (e.target.classList.contains("review")) {
            grievances[index].status = "In Review";
        }

        if (e.target.classList.contains("resolve")) {
            grievances[index].status = "Resolved";
        }

        applyFilters();
    });

    // ===============================
    // FILTER LOGIC
    // ===============================
    function applyFilters() {
        let filtered = [...grievances];

        const catValue = categoryFilter.value;
        const statusValue = statusFilter.value;

        if (catValue !== "All Categories") {
            filtered = filtered.filter(g => g.category === catValue);
        }

        if (statusValue !== "All Status") {
            filtered = filtered.filter(g => g.status === statusValue);
        }

        renderTable(filtered);
    }

    categoryFilter.addEventListener("change", applyFilters);
    statusFilter.addEventListener("change", applyFilters);

    // ===============================
    // INITIAL LOAD
    // ===============================
    renderTable(grievances);

});
