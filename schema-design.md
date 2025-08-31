## MySQL Database Design

### Table: doctor
- id: INT, Primary Key, Auto Increment
- clinic_location_id: INT, Foreign Key → clinic_locations(id)
- name: STRING, Not Null
- specialization: STRING, Not Null
- phone: INT, Not Null, Unique
- email: STRING, Unique


### Table: patient
- id: INT, Primary Key, Auto Increment
- name: STRING, Not Null
- date_of_birth: DATE, Not Null
- gender: ENUM('M', 'F', 'OTHER')
- email: STRING, Not Null, Unique
- phone: INT, Not Null, Unique
- address: String, Not Null
- 

### Table: admin
- id: INT, Primary Key, Auto Increment
- email: STRING, Not Null
- doctor_id: INT, Foreign Key → doctor(id)
- patient_id: INT, Foreign Key → patient(id)

### Table: appointments
- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key → doctors(id)
- patient_id: INT, Foreign Key → patients(id)
- clinic_location_id: INT, Foreign Key → clinic_locations(id)
- appointment_time: DATETIME, Not Null
- duration: INT, Not Null, Default 30
- status: INT (0 = Scheduled, 1 = Completed, 2 = Cancelled)

  ### Table: clinic_locations
- id: INT, Primary Key, Auto Increment
- address: STRING, Not Null
- name: STRING, Not Null
- email: STRING, Not Null
- phone: INT, Not Null

## MongoDB Collection Design

### Collection: prescriptions

```json
{
  "_id": "ObjectId('64abc123456')",
  "patientId": "11",
  "patientName": "John James",
  "appointmentId": 51,
  "medication": "Paracetamol",
  "dosage": "500mg",
  "doctorNotes": "Take 1 tablet every 6 hours.",
  "refillCount": 2,
  "prescriptionDate": "2024-08-31T10:30:00Z",
  "expiryDate": "2025-02-28T23:59:59Z",
  "pharmacy": {
    "name": "Walgreens SF",
    "location": "Slovak Street"
  }
}
