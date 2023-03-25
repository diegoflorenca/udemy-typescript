class Department {
	// private id: string;
	// public name: string;
	// #2.0 NOTE: Accessing this property directly should not be allowed, that why it is private.
	private employees: string[] = [];

	// #3 NOTE: We are declaring the properties and adding them to the constructor al at once. That's why the properties are commented out.
	// #4 NOTE: The `readonly` property blocks this property from being changed.
	constructor(private readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
	}

	// #1.0 NOTE: The parameter `this: Department` helps typescript catch unwanted behaviors.
	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeesInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('d1', 'Accounting');

// #2.1 NOTE: This is not allowed because employees is private.
// accounting.employees[2] = 'Anna';

console.log(accounting);
accounting.describe();

// #1.1 NOTE: .this refers to the object that called it, in this case the `accountingCopy` object has no name, so the name is undefined. This error could be avoided by adding `this: Department` to the `describe` method parameter and adding a name property to the `accountingCopy`.
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Diego');
accounting.printEmployeesInformation();
