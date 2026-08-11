//SPECIAL TYPES - ANY,UNKNOWN, VOID
// 1. Using the 'any' type
let anyValue: any = 10;
anyValue = "changing to string"; // No error
anyValue = true; // Still no error
// 2. Using the 'unknown' type
let unknownValue: unknown = "Hello User";
// The next would cause a compile error without a check:
// let length: number = unknownValue.length;
//checking using if condition
if (typeof unknownValue === "string") {
console.log("Length of unknown string: " + unknownValue.length);
}
// 3. Using the 'void' type - the function doesn't return any value 
function logNotification(message: string): void {
console.log("ALERT: " + message);
}
logNotification("You are Working with void return type!");