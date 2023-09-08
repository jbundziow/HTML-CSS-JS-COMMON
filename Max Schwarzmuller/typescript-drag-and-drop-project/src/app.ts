import { validateInput } from "./validation.js";

// Project Type
enum ProjectStatus {
    Active,
    Finished
  }
  
  class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
  
  // Project State Management
  type Listener = (items: Project[]) => void;
  
  class ProjectState {
    private listeners: Listener[] = [];
    private projects: Project[] = [];
    private static instance: ProjectState;
  
    private constructor() {}
  
    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }
  
    addListener(listenerFn: Listener) {
      this.listeners.push(listenerFn);
    }
  
    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }
  
  const projectState = ProjectState.getInstance();


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


// ProjectList Class
class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: Project[];
  
    constructor(private type: 'active' | 'finished') {
      this.templateElement = document.getElementById(
        'project-list'
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
      this.assignedProjects = [];
  
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as HTMLElement;
      this.element.id = `${this.type}-projects`;
  
      projectState.addListener((projects: Project[]) => {
        const relevantProjects = projects.filter(prj => {
          if (this.type === 'active') {
            return prj.status === ProjectStatus.Active;
          }
          return prj.status === ProjectStatus.Finished;
        });
        this.assignedProjects = relevantProjects;
        this.renderProjects();
      });
  
      this.attach();
      this.renderContent();
    }
  
    private renderProjects() {
      const listEl = document.getElementById(
        `${this.type}-projects-list`
      )! as HTMLUListElement;
      listEl.innerHTML = '';
      for (const prjItem of this.assignedProjects) {
        const listItem = document.createElement('li');
        listItem.textContent = prjItem.title;
        listEl.appendChild(listItem);
      }
    }
  
    private renderContent() {
      const listId = `${this.type}-projects-list`;
      this.element.querySelector('ul')!.id = listId;
      this.element.querySelector('h2')!.textContent =
        this.type.toUpperCase() + ' PROJECTS';
    }
  
    private attach() {
      this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
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
            projectState.addProject(this.titleInputElement.value, this.descriptionInputElement.value, Number(this.peopleInputElement.value))
            this.clearInputs();
        }
        else {
            alert('You\'ve passed a wrong data!')
        }
    }

}

    //@ts-ignore
    const prjInput = new ProjectInput();
    //@ts-ignore
    const activePrjList = new ProjectList('active');
    //@ts-ignore
    const finishedPrjList = new ProjectList('finished');
    