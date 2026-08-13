// GEBERIC VARIABLES
class StorageBox<T> {
    private contents: T;
    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    public getItem(): T {
        console.log("Opening storage box...");
        return this.contents;
    }

    public storeItem(newItem: T): void {
        this.contents = newItem;
        console.log("Storage box updated successfully.");
    }
}

const moneyBox = new StorageBox<number>(5000);
let money = moneyBox.getItem();

console.log(`Current Amount: ₹${money}`);

const notesBox = new StorageBox<string>("Important Project Notes");

console.log(`Stored Note: ${notesBox.getItem()}`);

interface Product {name: string; price: number; quantity: number; }

const productBox = new StorageBox<Product>({
    name: "Laptop",
    price: 50000,
    quantity: 1
});

const myProduct = productBox.getItem();

console.log(`Product: ${myProduct.name}`);
console.log(`Price: ₹${myProduct.price}`);
console.log(`Quantity: ${myProduct.quantity}`);


// ERROR :
// moneyBox.storeItem("Laptop");
// This will FAIL because moneyBox was initialized as a <number> storage box.