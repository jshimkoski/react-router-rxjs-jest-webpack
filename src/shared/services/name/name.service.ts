module NameService {

  export var name: string;

  export function setName(name: string): void {
    this.name = name;
    console.log("NameService setName: ", this.name);
  }

  export function getName(): string {
    console.log("NameService getName: ", this.name);
    return this.name;
  }

}

export default NameService;