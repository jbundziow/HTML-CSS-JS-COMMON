

class ProjectInput {
    public templateElement: HTMLTemplateElement;
    public hostElement: HTMLDivElement;
    public element: HTMLFormElement;

    constructor() {
        this.templateElement = document.querySelector('#project-input') as HTMLTemplateElement;
        this.hostElement = document.querySelector('#app') as HTMLDivElement;
        
        const importedNode = document.importNode(this.templateElement.content, true); //import template from <template> tag
        this.element = importedNode.firstElementChild as HTMLFormElement; //get <form> from inside of <template> tag
        
        this.attach()
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element) //attach form into <div> #app
    }
}

const prjInput = new ProjectInput();