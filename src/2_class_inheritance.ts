// Code goes here!
//65 - t0 82 re write code again in new file for each concept manner
class Departments {
  //private readonly id: string;
  id: string;
  name: string;
  private employees: string[] = [];
  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    //    this.employees = [];
  }
  describe() {
    //this:Department - to resolve the below issue
    console.log("ID: " + this.id + "Department " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartmet extends Departments {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}
const itdept = new ITDepartmet("1", ["mh", "cd"]);
itdept.addEmployee("mh");
itdept.addEmployee("cd");
itdept.name = "New name";
itdept.printEmployeeInfo();
console.log(itdept);

const accountings = new Departments("1", "Accounting");
console.log(accounting.describe());
const accountingCopys = { desc: accounting.describe }; // add name:'jay' property to resolve issue
console.log(accountingCopy.desc());

const empDatas = new Departments("2", "IT");
empData.addEmployee("Jay");
empData.addEmployee("yash");

//empData.employees[3] = "anna"; //private
empData.printEmployeeInfo();

// in short hand notaion need to use and reassignthings in constructor , in params only you can do
