// Code goes here!
//65 - t0 82 re write code again in new file for each concept manner

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard for extra type checcking
    return a.toString() + b.toString();
  }
  return a + b;
}

type UknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UknownEmployee) {
  console.log("Name : " + emp.name);
  if ("privileges" in emp) {
    //type guard
    console.log("Privileges : " + emp.privileges);
  } else if ("startDate" in emp) {
    console.log("Start Date : " + emp.startDate);
  }
}

printEmployeeInfo({ name: "jayesh", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving Car..");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck....");
  }
  loadCargo(cargo: number) {
    console.log("loading cargo ..." + cargo);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
  if (vehicle instanceof Truck) vehicle.loadCargo(2000);
}

//
