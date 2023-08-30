"use strict";
class Company {
    // name: string;
    // employees: string[];
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
        this.name = name;
        this.employees = employees;
    }
    showInfo() {
        console.log(`Company name is ${this.name}. There are employees: ${this.employees}`);
    }
    showImage(imgObj) {
        console.log(imgObj.url);
    }
}
class companyImage {
    constructor(url) {
        this.url = url;
        this.url = url;
    }
}
const company = new Company('intel', ['joe biden', 'margharet thatcher']);
company.showInfo();
// company.name = 'apple' //not available because of 'private'
const img = new companyImage('https://cdn.pixabay.com/photo/2016/04/13/14/27/google-chrome-1326908_1280.png');
company.showImage(img);
// img.url = 'sdsd' //not available - readonly
