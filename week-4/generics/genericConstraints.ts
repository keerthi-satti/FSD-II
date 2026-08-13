// Generic Constraints in TypeScript

interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(item: T): number {
    return item.length;
}

// String
const genericConstraintText = "TypeScript";
console.log(`Length of text: ${printLength(genericConstraintText)}`);

// Array
const genericConstraintProducts = ["Laptop","Phone","Tablet"];
console.log(`Number of products: ${printLength(genericConstraintProducts)}`);