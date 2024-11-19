// Generic storage container
class StorageContainer<T> {
    private items: T[] = [];
  
    // Add an item to the storage
    add(item: T): void {
      this.items.push(item);
    }
  
    // Get all items
    getAll(): T[] {
      return this.items;
    }
  
    // Get an item by index
    get(index: number): T | undefined {
      return this.items[index];
    }
  }
  
  // Create a storage container for numbers
  const numberStorage = new StorageContainer<number>();
  numberStorage.add(1);
  numberStorage.add(2);
  numberStorage.add(3);
  console.log("Number Storage:", numberStorage.getAll());
  
  // Create a storage container for strings
  const stringStorage = new StorageContainer<string>();
  stringStorage.add("TypeScript");
  stringStorage.add("Generics");
  console.log("String Storage:", stringStorage.getAll());
  
  // Example of using get
  console.log("First String:", stringStorage.get(0));
  