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
        this.element.addEventListener('submit', this.submitHandler.bind(this)) //use bind to pass 'this'
    }

    private submitHandler(e: Event): void {
        e.preventDefault();
        console.log(this.titleInputElement.value);
        console.log(this.descriptionInputElement.value);
        console.log(this.peopleInputElement.value);
    }

}


    const prjInput = new ProjectInput();
