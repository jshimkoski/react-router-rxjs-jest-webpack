import TestComponent from 'components/test/test.component';

let test = new TestComponent();
test.setName("Bob Barker");

let test2 = new TestComponent();
test2.getName();

test.setName("Testing 123");

let test3 = new TestComponent();
test3.getName();
test2.setName("One More");
test.getName();