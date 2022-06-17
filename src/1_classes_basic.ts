// Code goes here!

class Department {
  private readonly id: string;
  name: string;
  private employees: string[] = [];
  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    //    this.employees = [];
  }
  describe() {
    //this:Department - to resolve the below issue
    console.log("Department " + this.name + this.id);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("1", "Accounting");
console.log(accounting.describe());
const accountingCopy = { desc: accounting.describe }; // add name:'jay' property to resolve issue
console.log(accountingCopy.desc());

const empData = new Department("2", "IT");
empData.addEmployee("Jay");
empData.addEmployee("yash");

//empData.employees[3] = "anna"; //private
empData.printEmployeeInfo();

// in short hand notaion need to use and reassignthings in constructor , in params only you can do
