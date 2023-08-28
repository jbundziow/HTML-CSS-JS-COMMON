class Company {
    // name: string;
    // employees: string[];
    constructor(private readonly name: string, private readonly employees: string[]) {
        this.name = name;
        this.employees = employees;
    }

    showInfo(this: Company) {
        console.log(`Company name is ${this.name}. There are employees: ${this.employees}`);
    }

    showImage(imgObj : companyImage) {
        console.log(imgObj.url);
    }

}


class companyImage {
    constructor(public readonly url: string) {
        this.url = url;
    }
}


const company = new Company('intel', ['joe biden', 'margharet thatcher']);

company.showInfo();

// company.name = 'apple' //not available because of 'private'


const img = new companyImage('https://cdn.pixabay.com/photo/2016/04/13/14/27/google-chrome-1326908_1280.png')

company.showImage(img)
// img.url = 'sdsd' //not available - readonly