// Importing specific members from other files
import { GST_RATE, DELIVERY_FEE } from './Constants';
import { Customer } from './Customer';
export class Order {
    constructor(
        public customer: Customer,
        private basePrice: number,
        public orderNumber: number
    ) {}

    // Method to calculate the final price
    public calculateFinalPrice(): number {
        const taxAmount = this.basePrice * GST_RATE;
        return this.basePrice + taxAmount + DELIVERY_FEE;
    }

    public printOrder(): void {
        console.log(`--- Order Confirmed ---`);
        console.log(`Customer: ${this.customer.name} (${this.customer.age})`);
        console.log(`Order No: ${this.orderNumber}`);
        console.log(`Total Price: ₹${this.calculateFinalPrice()}`);
        console.log(`-----------------------`);
    }
}