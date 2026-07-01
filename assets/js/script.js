// ================================
// FEET & BEYOND - CATEGORY TABS
// ================================

// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-btn");

    const categoryBox = document.querySelector(".category-box");

    // Dummy products (you can replace later with real images)
    const sneakers = [
        "Nike Air Max - KSh 15,999",
        "Adidas Campus - KSh 13,999",
        "Jordan 1 - KSh 18,999",
        "Puma RS-X - KSh 12,500"
    ];

    const clothing = [
        "Classic Hoodie - KSh 3,499",
        "Oversized T-Shirt - KSh 1,999",
        "Bomber Jacket - KSh 5,999",
        "Cargo Pants - KSh 4,299"
    ];

    // Function to render category
    function renderCategory(items, title) {

        categoryBox.innerHTML = "";

        const heading = document.createElement("h3");
        heading.textContent = title;

        const list = document.createElement("div");
        list.style.marginTop = "20px";

        items.forEach(item => {

            const p = document.createElement("p");

            p.textContent = item;

            p.style.padding = "10px";

            p.style.background = "#fff";

            p.style.margin = "10px auto";

            p.style.maxWidth = "500px";

            p.style.borderRadius = "10px";

            p.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

            list.appendChild(p);
        });

        categoryBox.appendChild(heading);
        categoryBox.appendChild(list);
    }

    // Default view
    renderCategory(sneakers, "Popular Sneakers");

    // Tab switching
    tabs.forEach((tab, index) => {

        tab.addEventListener("click", function () {

            // Remove active class
            tabs.forEach(t => t.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Switch category
            if (index === 0) {
                renderCategory(sneakers, "Popular Sneakers");
            } else {
                renderCategory(clothing, "Trending Clothing");
            }

        });

    });

});