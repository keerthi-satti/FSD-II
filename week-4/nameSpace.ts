// namespace
namespace OnlineStore {

    // PRIVATE namespace 
    const minimumProductNameLength = 3;


    // We use the 'export' keyword INSIDE the namespace to make this function accessible from outside
    export function validateProductName(name: string): boolean {
        return name.length >= minimumProductNameLength;
    }

    export function validateProductCode(code: string): boolean {
        const codeRegex = /^[A-Z]{3}[0-9]{4}$/;
        return codeRegex.test(code.toUpperCase());
    }

    // Nested Namespace
    export namespace Payment {
        export function calculateGST(amount: number): number {
            return amount * 0.18; // 18% GST
        }
    }
}


const productName = "Laptop";
const productCode = "LAP1234";


console.log(`Is Product Name Valid? ${OnlineStore.validateProductName(productName)}`);


console.log(`Is Product Code Valid? ${OnlineStore.validateProductCode(productCode)}`);


// Accessing the nested namespace
const productPrice = 50000;
const tax = OnlineStore.Payment.calculateGST(productPrice);

console.log(`GST on ₹${productPrice} is ₹${tax}`);


// ERROR:
// console.log(OnlineStore.minimumProductNameLength);
// The line above will fail because
// 'minimumProductNameLength' was not exported!