import { overlay } from "./loggedPatient.js";
import { deleteDoctor } from "./doctorServices.js";
import { getPatientDetails } from "./patientServices.js";

export function createDoctorCard(doctor) {
    const card = document.createElement("div");
    card.classList.add("doctor-card");

    const role = localStorage.getItem("userRole");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("doctor-info");

    const nameEl = document.createElement("h3");
    nameEl.textContent = doctor.name;

    const specEl = document.createElement("p");
    specEl.textContent = `Specialization: ${doctor.specialization}`;

    const emailEl = document.createElement("p");
    emailEl.textContent = `Email: ${doctor.email}`;

    const appointmentsEl = document.createElement("ul");
    appointmentsEl.textContent = "Available Appointments:";
    if (doctor.appointments && doctor.appointments.length > 0) {
        doctor.appointments.forEach((time) => {
            const li = document.createElement("li");
            li.textContent = time;
            appointmentsEl.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No available appointments";
        appointmentsEl.appendChild(li);
    }

    infoDiv.appendChild(nameEl);
    infoDiv.appendChild(specEl);
    infoDiv.appendChild(emailEl);
    infoDiv.appendChild(appointmentsEl);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("doctor-actions");

    if (role === "admin") {
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Doctor";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Session expired. Please log in again.");
                return;
            }
            try {
                const success = await deleteDoctor(doctor.id, token);
                if (success) {
                    alert("Doctor deleted successfully.");
                    card.remove();
                } else {
                    alert("Failed to delete doctor.");
                }
            } catch (err) {
                console.error(err);
                alert("Error while deleting doctor.");
            }
        });

        actionsDiv.appendChild(deleteBtn);
    }

    else if (role === "patient") {
        const bookBtn = document.createElement("button");
        bookBtn.textContent = "Book Now";
        bookBtn.classList.add("book-btn");

        bookBtn.addEventListener("click", () => {
            alert("Please log in to book an appointment.");
        });

        actionsDiv.appendChild(bookBtn);
    }

    else if (role === "loggedPatient") {
        const bookBtn = document.createElement("button");
        bookBtn.textContent = "Book Now";
        bookBtn.classList.add("book-btn");

        bookBtn.addEventListener("click", async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Session expired. Please log in again.");
                return;
            }
            try {
                const patient = await getPatientDetails(token);
                overlay(doctor, patient);
            } catch (err) {
                console.error(err);
                alert("Error fetching patient details.");
            }
        });

        actionsDiv.appendChild(bookBtn);
    }

    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
}

