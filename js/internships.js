
document.addEventListener("DOMContentLoaded", () => {
    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".internship-card");

            const role = card.querySelector("h3").innerText;
            const company = card.querySelector(".company").innerText;
            const stipend = card.querySelector(".stipend").innerText;
            const duration = card.querySelector(".duration").innerText;

            openModal({ role, company, stipend, duration });
        });
    });
});

function openModal(data) {
    
    const oldModal = document.querySelector(".modal-overlay");
    if (oldModal) oldModal.remove();

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
        <div class="modal-box">
            <h2>${data.role}</h2>
            <p><strong>${data.company}</strong></p>

            <div class="modal-details">
                <p>${data.stipend}</p>
                <p>${data.duration}</p>
            </div>

            <div class="modal-actions">
                <button class="confirm-btn">Confirm Apply</button>
                <button class="close-btn">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".close-btn").onclick = () => modal.remove();

    modal.querySelector(".confirm-btn").onclick = () => {
        modal.querySelector(".modal-box").innerHTML = `
            <h2>✅ Application Submitted</h2>
            <p>Your internship application has been sent successfully.</p>
            <button class="close-btn">Close</button>
        `;
        modal.querySelector(".close-btn").onclick = () => modal.remove();
    };
}
