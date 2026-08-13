// Importing the Order class to use it
import { Order } from './OrderLogic';
import { Customer } from './Customer';


// Create a customer object
const buyer: Customer = {
    name: "Suresh Kumar",
    age: 25,
    address: "Kochi"
};

// Initialize the Order class
const myOrder = new Order(
    buyer,
    1200,
    1001
);

// 3. Execute the logic
myOrder.printOrder();