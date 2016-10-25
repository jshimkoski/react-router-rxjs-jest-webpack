import {nameStore} from 'stores/name/name.store';

class TestComponent {

  setName(name) {
    return nameStore.setName(name);
  }

  getName() {
    return nameStore.getName();
  }

}

export default TestComponent;