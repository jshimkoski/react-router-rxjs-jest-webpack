import Rx from 'rxjs';
import update from 'react/lib/update';

import Counter from 'states/counter/counter.state';
import Example from 'states/example/example.state';

const subject = new Rx.ReplaySubject(1);

let state = {
  postResult: [],
  results: [],
  counter: 0
};

Counter.subjects.incrementCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.next(state);
});

Counter.subjects.decreaseCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.next(state);
});

Example.jsonSubjects.goGetJSON.subscribe( data => {
  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.next(state);
});

Example.jsonSubjects.goPostJSON.subscribe( data => {
  state = update(state, {
    $merge: {
      postResult: data
    }
  });
  subject.next(state);
});

subject.next(state);

export default {
  subject
};