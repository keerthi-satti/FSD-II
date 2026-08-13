// GENERIC FUNCTIONS

// function returns the first item
function getFirstProduct<T>(items: T[]): T {
    return items[0];
}

// function returns an object
function createOrder<T>(item: T): { product: T; orderTime: Date } {
    return {product: item, orderTime: new Date()};
}

const productNames = ["Laptop", "Smartphone", "Headphones"];
const firstProduct = getFirstProduct<string>(productNames);

console.log(`First product: ${firstProduct.toUpperCase()}`);

const prices = [50000,25000,3000];
const firstPrice = getFirstProduct<number>(prices);

console.log(`First product price: ₹${firstPrice}`);


// Objects
interface Electronic {brand: string; model: string;}

const phone: Electronic = {brand: "Samsung", model: "S24"};
const orderedPhone = createOrder<Electronic>(phone);

console.log(`Ordered item: ${orderedPhone.product.brand} ${orderedPhone.product.model}`);
console.log(`Order Time: ${orderedPhone.orderTime}`);

const autoProduct = getFirstProduct(productNames);

console.log(`Automatically detected product: ${autoProduct}`);