//CONSTRUCTORS OVERLOADING
class CourseEnrollment {
    public studentName: string;
    public courseFee: number;
    public discountRate: number; 
    public durationMonths: number;

    // Constructor Overloading
    // Default course enrollment - Standard course with 6-month duration and 5% discount
    constructor(name: string, fee: number);

    // Custom course with specific discount and duration
    constructor(name: string, fee: number, discount: number, months: number);

    // Implementation of constructor
    constructor( name: string, fee: number, discount?: number, months?: number) {
        this.studentName = name;
        this.courseFee = fee;
        // Default discount if not provided
        this.discountRate = discount ?? 5;
        // Default duration if not provided
        this.durationMonths = months ?? 6;
    }

    // Calculates the final course fee after discount
    public calculateFinalFee(): number {
        const discount = (this.courseFee * this.discountRate) / 100;
        return this.courseFee - discount;
    }

    // Method to display enrollment details
    public displayDetails(): void {
        console.log(`--- Course Enrollment ---`);
        console.log(`Student: ${this.studentName}`);
        console.log(`Course Fee: ₹${this.courseFee}`);
        console.log(`Discount: ${this.discountRate}%`);
        console.log(`Duration: ${this.durationMonths} month(s)`);
        console.log(`Final Fee: ₹${this.calculateFinalFee()}`);
    }
}

// Using the Default constructor
const standardCourse = new CourseEnrollment("Rajesh Kumar", 50000);

// Using the overloaded constructor
const premiumCourse = new CourseEnrollment("Anjali Sharma", 100000, 10, 12);

// Using Properties and Methods after construction
standardCourse.displayDetails();
premiumCourse.displayDetails();

// Updating a property manually
premiumCourse.courseFee = 110000;
console.log(`Updated Final Fee for Anjali: ₹${premiumCourse.calculateFinalFee()}`);