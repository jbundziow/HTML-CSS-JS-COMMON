import { validateInput } from "./validation.js";


//function for decorator @autobind
const autobind = (_: {}, _1: string, descriptor: PropertyDescriptor) => {
    //_ and _1 are not used
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


class ProjectInput {
    public templateElement: HTMLTemplateElement; //template with form inside
    public hostElement: HTMLDivElement; //<div> #app
    public element: HTMLFormElement; //<form>

    //input fields
    public titleInputElement: HTMLInputElement;
    public descriptionInputElement: HTMLInputElement;
    public peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.querySelector('#project-input') as HTMLTemplateElement;
        this.hostElement = document.querySelector('#app') as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true); //import template from <template> tag
        this.element = importedNode.firstElementChild as HTMLFormElement; //get <form> from inside of <template> tag
        this.attach()

        //get inputs
        this.element.id = 'user-input'
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.configureSubmitBtn()
    }

    private attach(): void {
        this.hostElement.insertAdjacentElement('afterbegin', this.element) //attach form into <div> #app
    }
    
    private configureSubmitBtn(): void {
        //@@@@@@@@@ bind(this) is not needed because of decorator @autobind below
        // this.element.addEventListener('submit', this.submitHandler.bind(this)) //use bind to pass 'this'
        this.element.addEventListener('submit', this.submitHandler);
    }

    private validateUserInputs(title: string, description: string, people: string): [string, string, number] | undefined {
        const isTitleInputValidated: boolean = validateInput({
            value: title,
            required: true,
            minLength: 1,
            maxLength: 255,
        })
        const isDescriptionInputValidated: boolean = validateInput({
            value: description,
            required: true,
            minLength: 1,
            maxLength: 255,
        })
        const isPeopleInputValidated: boolean = validateInput({
            value: +people,
            required: true,
            min: 1,
            max: 10
        })

        if(isTitleInputValidated && isDescriptionInputValidated && isPeopleInputValidated) {
            return [title, description, +people];
        }
        else {
            return;
        }
    }

    private clearInputs(): void {
        this.titleInputElement.value = ''
        this.descriptionInputElement.value = ''
        this.peopleInputElement.value = ''
    }


    @autobind //using decorator instead .bind(this)
    private submitHandler(e: Event): void {
        e.preventDefault();
        const inputsData = this.validateUserInputs(this.titleInputElement.value, this.descriptionInputElement.value, this.peopleInputElement.value);
        if(inputsData) {
            // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            //TODO: pass inputsData into function to add project
            this.clearInputs();
        }
        else {
            alert('You\'ve passed a wrong data!')
        }
    }

}

    //@ts-ignore
    const prjInput = new ProjectInput();