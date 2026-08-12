//
class Hospital {
    // 1. STATIC: Shared by all objects.
    public static readonly hospitalName: string = "Apollo Hospital";
    public static totalPatientsRegistered: number = 0;

    // 2. READONLY: Can be assigned in the constructor
    public readonly patientId: string;

    public patientName: string;

    constructor(name: string, id: string) {
        this.patientName = name;
        this.patientId = id;

        // Accessing a static member inside the constructor
        Hospital.totalPatientsRegistered++;
    }


    // STATIC METHOD:
    public static getHospitalPolicy(): void {
        console.log(`Welcome to ${this.hospitalName}. Patients must carry their ID during every visit.`);
        // 'this.patientName' would fail here because static methods
    }


    // INSTANCE METHOD:
    public showPatient(): void {
        console.log(`Patient: ${this.patientName}`);
        console.log(`Patient ID: ${this.patientId}`);
    }
}

// Accessing STATIC members - Use the Class name, not the object.

console.log(Hospital.hospitalName);
Hospital.getHospitalPolicy();

// Creating specific patient objects
const patient1 = new Hospital("Suresh Raina", "APOLLO000123");
const patient2 = new Hospital("Deepika P.", "APOLLO000456");

// Calling an instance method
patient1.showPatient();
patient2.showPatient();


// 3. Testing READONLY
console.log(patient1.patientId); 
// Works: we can read it.
// patient1.patientId = "APOLLO999999";
// ERROR: Cannot assign to 'patientId'
// because it is a read-only property.
// Testing STATIC persistence
console.log(`Total Patients Registered: ${Hospital.totalPatientsRegistered}`);