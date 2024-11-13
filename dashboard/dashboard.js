document.addEventListener("DOMContentLoaded", function () {
  // Initialize DataTable with responsive options
  $("#dataTable").DataTable({
    paging: true,
    searching: true,
    info: true,
    lengthChange: true,
    pageLength: 5,
    responsive: true,
    language: {
      search: "Filter records:",
    },
  });

  // Initialize Chart.js with responsive options
  const ctx = document.getElementById("userChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Total Users", "Males", "Females"],
      datasets: [
        {
          label: "User Statistics",
          data: [300, 180, 120],
          backgroundColor: ["#007bff", "#6610f2", "#dc3545"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const icon = document.querySelector(".theme-toggle-btn i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}
