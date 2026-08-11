//UNDERSTANDING SIMPLE TYPES - NUMBER, STRING, BOOLEAN
// 1. String: Storing text
let userName: string = "keerthi";
// 2. Number: Storing numeric values (integers or decimals)
let userAge: number = 19;
// 3. Boolean: Storing true/false logic
let isMemberOfVSSC: boolean = true;
console.log("Data type of userName is --> "+typeof userName); // Output: string
console.log("Data type of userAge is --> "+typeof userAge); // Output: number
console.log("Data type of isMember is --> "+typeof isMemberOfVSSC); // Output: boolean
// A simple function using these types
function displayUserProfile(name: string, age: number, active: boolean): void {
console.log(`User: ${name}`);
console.log(`Age: ${age}`);
console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUserProfile(userName, userAge, isMemberOfVSSC);