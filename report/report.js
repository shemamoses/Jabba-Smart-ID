// Initialize DataTable
document.addEventListener("DOMContentLoaded", function () {
  $("#reportTable").DataTable({
    paging: true,
    searching: true,
    info: true,
  });

  // Initialize Chart.js
  const ctx = document.getElementById("citizenChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Male", "Female", "Other"],
      datasets: [
        {
          data: [120, 100, 10], // Example data: Male, Female, Other
          backgroundColor: ["#007bff", "#dc3545", "#ffc107"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
});
