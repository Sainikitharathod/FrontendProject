// scripts/chart.js
function renderChart(bloodPressureData) {
    const ctx = document.getElementById("bloodPressureChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: bloodPressureData.map(bp => bp.year),
            datasets: [{
                label: "Blood Pressure",
                data: bloodPressureData.map(bp => bp.value),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // Smooth curve
                fill: true,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Year",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Blood Pressure",
                    },
                },
            },
        },
    });
}
// Mock API data for testing
const mockData = {
    name: "Jessica Taylor",
    age:32,
    bloodPressure: [
        { year: 2018, value: 120 },
        { year: 2019, value: 125 },
        { year: 2020, value: 118 },
        { year: 2021, value: 130 },
        { year: 2022, value: 124 },
    ],
};

// Function to update the patient info in the UI
function updatePatientInfo(patient) {
    document.getElementById("patient-name").textContent = patient.name;
    document.getElementById("patient-age").textContent = `Age: ${patient.age}`;
}

// Function to render the blood pressure chart
function renderChart(bloodPressureData) {
    const ctx = document.getElementById("bloodPressureChart").getContext("2d");

    const labels = bloodPressureData.map(entry => entry.year);
    const values = bloodPressureData.map(entry => entry.value);

    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Blood Pressure",
                data: values,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Year",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Blood Pressure",
                    },
                },
            },
        },
    });
}

// Function to simulate fetching patient data
function fetchPatientData(patientName) {
    if (mockData.name === patientName) {
        updatePatientInfo(mockData);
        renderChart(mockData.bloodPressure);
    } else {
        console.error("Patient not found");
    }
}

// Fetch data for Jessica Taylor when the page loads
fetchPatientData("Jessica Taylor");

