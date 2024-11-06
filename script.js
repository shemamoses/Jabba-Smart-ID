// Toggle theme function with icon change
function toggleTheme() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  const themeToggleBtn = document.querySelector(".theme-toggle-btn i");
  if (document.body.classList.contains("bg-dark")) {
    themeToggleBtn.classList.replace("fa-moon", "fa-sun");
  } else {
    themeToggleBtn.classList.replace("fa-sun", "fa-moon");
  }
}

// Add active class for selected menu item
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Search and filter table
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll("#tableBody tr");

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    if (rowText.includes(filter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Chart.js setup for user statistics
const ctx = document.getElementById("userChart").getContext("2d");
const userChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Total Registered Users", "Male Users", "Female Users"],
    datasets: [
      {
        label: "User Statistics",
        data: [500, 300, 200], // Example data, adjust based on real values
        backgroundColor: ["#0d6efd", "#6c757d", "#e83e8c"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
