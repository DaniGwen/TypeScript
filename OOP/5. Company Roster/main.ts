class Employee {
    private name: string;
    private salary: number;
    private position: string;
    private department: string;
    private email?: string;
    private age?: number;

    constructor(name: string,
        salary: number,
        position: string,
        department: string,
        email?: string,
        age?: number) {
        this.age = age;
        this.department = department;
        this.email = email;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class Department{
    private employees:Employee[] = [];

    public AddEmployee(employee:Employee){
        this.employees.push(employee);
    }
    
}

function highestAverageSalary(input:string){

}