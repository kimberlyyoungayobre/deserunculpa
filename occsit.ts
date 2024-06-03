class NumberDictionary {
  // Store the numbers with string keys
  private items: { [key: string]: number } = {};

  // Add or update the number at the given key
  public setItem(key: string, value: number): void {
    this.items[key] = value;
  }

  // Retrieve the number at the given key
  public getItem(key: string): number | undefined {
    return this.items[key];
  }

  // Remove the number at the given key
  public removeItem(key: string): void {
    delete this.items[key];
  }

  // List all keys in the dictionary
  public listKeys(): string[] {
    return Object.keys(this.items);
  }

  // Sum all numbers in the dictionary
  public sumValues(): number {
    return Object.values(this.items).reduce((sum, current) => sum + current, 0);
  }
}

// Example usage:
const numDict = new NumberDictionary();
numDict.setItem('one', 1);
numDict.setItem('two', 2);
console.log(numDict.getItem('one')); // Output: 1
console.log(numDict.sumValues()); // Output: 3
numDict.removeItem('two');
console.log(numDict.listKeys()); // Output: ['one']
