"use strict";
class Company {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    showInfo() {
        console.log(`Company name is ${this.name}`);
    }
}
const company = new Company('intel', ['joe biden']);
company.showInfo();
