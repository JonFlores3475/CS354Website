/**
 * @file Example of a compiler error due to self-imposed duck type limitations using TypeScript.
 * @author Martin Guzman
 */



// Define which variables allow/disallow duck typing in this interface.
interface Duck {
    bill: string
    uniqueType: any
}

class MallardDuck implements Duck {
    bill: string;
    uniqueType: number;

    constructor(billColor: string, num: number) {
        this.bill = billColor;
        this.uniqueType = num;
    }
}

class DomesticDuck implements Duck {
    bill: string;
    uniqueType: boolean;

    constructor(billColor: string, bool: boolean) {
        this.bill = billColor;
        this.uniqueType = bool;
    }
}

class Customer {
    bill: number;
    uniqueType: string;

    constructor(dollars: number, name: string) {
        this.bill = dollars;
        this.uniqueType = name;
    }
}

// Use TypeScript's developer-imposed duck typing in thsi function.
function DuckToString(duck: Duck) :string {
    var duckStr = "Duck bill color: "+duck.bill +"\n";
        duckStr += "UniqueType: "+duck.uniqueType+"\n";
    return duckStr;
}





/* Display an instance of self-imposed duck typing limit error handling (Caught during compile time!). */
let duck1 = new MallardDuck("orange", 2002);
let duck2 = new DomesticDuck("yellow", true);
let customer1 = new Customer(20.00, "Manny");
const duckList = [duck1, duck2, customer1];

for(let i=0; i<duckList.length; i++) {
    // Compiler Error: DuckToString() will not accept an object not fitting the Duck interface!
    console.log(DuckToString(duckList[i]) + "\n\n");
}