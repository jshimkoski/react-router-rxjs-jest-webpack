class NameStore {

  name;

  setName(name) {
    this.name = name;
    console.log("NameService setName: ", this.name);
  }

  getName() {
    console.log("NameService getName: ", this.name);
    return this.name;
  }

}

export let nameStore = new NameStore();