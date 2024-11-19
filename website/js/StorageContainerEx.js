// Generic storage container
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.items = [];
    }
    // Add an item to the storage
    StorageContainer.prototype.add = function (item) {
        this.items.push(item);
    };
    // Get all items
    StorageContainer.prototype.getAll = function () {
        return this.items;
    };
    // Get an item by index
    StorageContainer.prototype.get = function (index) {
        return this.items[index];
    };
    return StorageContainer;
}());
// Create a storage container for numbers
var numberStorage = new StorageContainer();
numberStorage.add(1);
numberStorage.add(2);
numberStorage.add(3);
console.log("Number Storage:", numberStorage.getAll());
// Create a storage container for strings
var stringStorage = new StorageContainer();
stringStorage.add("TypeScript");
stringStorage.add("Generics");
console.log("String Storage:", stringStorage.getAll());
// Example of using get
console.log("First String:", stringStorage.get(0));
