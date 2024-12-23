// scripts/main.js
const API_URL = "https://api.coalitiontechnologies.com/patient-data";

async function fetchPatientData(patientName) {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const patient = data.patients.find(p => p.name === patientName);
        if (patient) {
            updatePatientInfo(patient);
            renderChart(patient.bloodPressure); // Pass data to chart rendering function
        } else {
            console.error("Patient not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function updatePatientInfo(patient) {
    document.getElementById("patient-name").textContent = patient.name;
    document.getElementById("patient-age").textContent = patient.age;
}

// Fetch data for Jessica Taylor
fetchPatientData("Jessica Taylor");
