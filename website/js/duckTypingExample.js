/**
 * @file Example of self-imposing limited duck typing using TypeScript.
 * @author Martin Guzman
 */
var MallardDuck = /** @class */ (function () {
    function MallardDuck(billColor, num) {
        this.bill = billColor;
        this.uniqueType = num;
    }
    return MallardDuck;
}());
var DomesticDuck = /** @class */ (function () {
    function DomesticDuck(billColor, bool) {
        this.bill = billColor;
        this.uniqueType = bool;
    }
    return DomesticDuck;
}());
var Customer = /** @class */ (function () {
    function Customer(dollars, name) {
        this.bill = dollars;
        this.uniqueType = name;
    }
    return Customer;
}());
// Use TypeScript's developer-imposed duck typing in thsi function.
function DuckToString(duck) {
    var duckStr = "Duck bill color: " + duck.bill + "\n";
    duckStr += "UniqueType: " + duck.uniqueType + "\n";
    return duckStr;
}
/* Display an instance of self-imposed duck typing limit error handling (Caught during compile time!). */
var duck1 = new MallardDuck("orange", 2002);
var duck2 = new DomesticDuck("yellow", true);
var customer1 = new Customer(20.00, "Manny");
var duckList = [duck1, duck2]; // This array throws error during comilation: [duck1, duck2,customer1]
for (var i = 0; i < duckList.length; i++) {
    console.log(DuckToString(duckList[i]) + "\n\n");
}
