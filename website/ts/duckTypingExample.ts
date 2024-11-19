/**
 * @file Example of duck typing in TypeScript.
 * @author Martin Guzman
 */

class MallardDuck {
    bill: string;
    uniqueDataType: number;

    constructor(billColor: string, numberDataType: number) {
        this.bill = billColor;
        this.uniqueDataType =numberDataType;
    }
}

class DomesticDuck {
    bill: string;
    uniqueDataType: boolean;

    constructor(billColor: string, booleanDataType: boolean) {
        this.bill = billColor;
        this.uniqueDataType = booleanDataType;
    }
}

class RestaurantCustomer {
    bill: number;
    uniqueDataType: string;

    constructor(dollars: number, name: string) {
        this.bill = dollars;
        this.uniqueDataType = name;
    }
}


/* Now, attempt to validate info about given items! */
let item1 = new MallardDuck("orange", 2002);
let item2 = new DomesticDuck("yellow", true);
let item3 = new RestaurantCustomer(20.00, "Manny");

const itemList = [item1, item2, item3];


for(let i=0; i<itemList.length; i++) {
    try {
        let stringToPrint: string = "Duck bill color: " + itemList[i].bill + ", the duck's unique attribute: " + itemList[i].uniqueDataType;
        console.log(stringToPrint);
    } catch (error) {
        console.log("Error: Invalid data typing! Bill must be a string!")
    }
}


