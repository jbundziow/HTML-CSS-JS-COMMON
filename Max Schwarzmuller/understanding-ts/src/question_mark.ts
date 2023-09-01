interface PersonA {
    firstName: string;
    lastName?: string; // lastName is optional
  }
  
  const person1: PersonA = {
    firstName: "John",
    // lastName is omitted, which is okay because it's optional
  };
  
  const person2: PersonA = {
    firstName: "Alice",
    lastName: "Smith",
  };
  
  console.log(person1); // Output: { firstName: 'John' }
  console.log(person2); // Output: { firstName: 'Alice', lastName: 'Smith' }

