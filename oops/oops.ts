class Department {
    // name: string;
    private employees: string[] = [];

    //readonly is like final in java
    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log("Department Name: " + this.name);
    }

    addEmployee(emp: string) {
        this.employees.push(emp);
    }
}
const dept = new Department("e1", "Engg");

console.log(dept);

dept.describe();

// const accCopy = { name: "s", describe: dept.describe };

// accCopy.describe();
