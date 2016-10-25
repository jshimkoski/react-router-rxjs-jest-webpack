import NameService from 'services/name/name.service';

class TestComponent {

  setName(name:string) {
    return NameService.setName(name);
  }

  getName() {
    return NameService.getName();
  }

}

export default TestComponent;