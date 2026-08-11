//DEMOSTRATE FUNCTIONS, PARAMETERS, RETURN TYPES
// 1. Parameter & Return Types
function welcomeStudent(name: string): string {
    return `Welcome, ${name}!`;
}
// 2. Default Parameters
function getSubject(subject: string = "Mathematics"): string {
    return `Subject: ${subject}`;
}

// 3. Optional Parameters
function displayStudent(studentId: number, grade?: string): void {
    console.log(`Student ID: ${studentId}`);
    if (grade) {
        console.log(`Grade: ${grade}`);
    }
}
// 4. REST Parameters (using ...)
function calculateMarks(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0);
}
console.log(welcomeStudent("Keerthi"));
console.log(getSubject()); 
console.log(getSubject("Science"));
displayStudent(101); 
displayStudent(102, "A+");  
const totalMarks = calculateMarks(85, 90, 78, 88, 95);
console.log(`Total Marks: ${totalMarks}`);