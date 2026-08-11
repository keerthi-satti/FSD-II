//COMPARING TRADITIONAL FUNCTIONS WITH ARROW FUNCTIONS
//Traditional Function
function calculateFunction(price: number, taxRate: number): number {
return price + (price * taxRate);
}
//Arrow Function
const calculateArrowFunction = (price: number, taxRate: number): number => {
return price + (price * taxRate);
};
// 3. Shorthand Arrow Function
const getWelcomeMessage = (adventure: string): string => `Welcome to ${adventure}!`;

const ticketPrice: number = 2000; 
const gstRate: number = 0.18; 
console.log(getWelcomeMessage("WONDER LAND"));
// Using the traditional method
const total1 = calculateFunction(ticketPrice, gstRate);
console.log(`Total (Traditional): ₹${total1}`);
// Using the arrow function method
const total2 = calculateArrowFunction(ticketPrice, gstRate);
console.log(`Total (Arrow): ₹${total2}`);