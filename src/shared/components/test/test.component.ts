import NameService from 'stores/name/name.store';

class TestComponent {

  setName(name:string) {
    return NameService.setName(name);
  }

  getName() {
    return NameService.getName();
  }

}

export default TestComponent;