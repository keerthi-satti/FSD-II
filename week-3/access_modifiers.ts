//ACCESS MODIFIERS - PUBLIC, PRIVATE, PROTECTED
class LibraryMember {
    // PUBLIC: Anyone can access the member's name
    public memberName: string;
    // PRIVATE: Only the class can access these
    private booksBorrowed: number;
    private libraryPin: number;
    // PROTECTED: Accessible within this class and its child classes
    protected rewardPoints: number = 0;
    constructor(name: string, borrowed: number, pin: number) {
        this.memberName = name;
        this.booksBorrowed = borrowed;
        this.libraryPin = pin;
    }

    // PUBLIC METHOD
    public borrowBook(count: number, enteredPin: number): void {

        if (this.checkPin(enteredPin)) {
            this.booksBorrowed += count;
            console.log(`${count} book(s) borrowed successfully. Total borrowed: ${this.booksBorrowed}`);
        } else {
            console.log("Invalid Library PIN.");
        }
    }

    // PRIVATE METHOD
    private checkPin(pin: number): boolean {
        return this.libraryPin === pin;
    }
}

// Child class to demonstrate PROTECTED
class PremiumMember extends LibraryMember {
    public addRewardPoints(): void {
        // Accessible because rewardPoints is protected
        this.rewardPoints += 50;
        console.log(`Reward Points: ${this.rewardPoints}`);
        // this.booksBorrowed += 1; - ERROR (booksBorrowed is private)
    }
}

const member = new LibraryMember("Keerthi", 2, 4567);

// Accessing PUBLIC property
console.log(`Member Name: ${member.memberName}`);

// Accessing PRIVATE property/method
// console.log(member.booksBorrowed); - ERROR (private)
// member.checkPin(4567); - ERROR (private)

// Using PUBLIC method
member.borrowBook(3, 4567); // Success (member exists)
member.borrowBook(1, 1234); // Invalid PIN (member doesn't exist)

// Demonstrating PROTECTED
const premium = new PremiumMember("Rahul", 1, 7890);
premium.addRewardPoints();