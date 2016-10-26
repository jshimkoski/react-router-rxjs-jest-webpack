import Rx from 'rxjs';
import update from 'react/lib/update';

import CounterState from 'states/counter/counter.state';
import JsonPlaceholderState from 'states/jsonPlaceholder/jsonPlaceholder.state';

const subject = new Rx.ReplaySubject(1);

let state = {
  postResult: [],
  results: [],
  counter: 0
};

CounterState.subjects.incrementCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.next(state);
});

CounterState.subjects.decreaseCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.next(state);
});

JsonPlaceholderState.jsonSubjects.goGetJSON.subscribe( data => {
  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.next(state);
});

JsonPlaceholderState.jsonSubjects.goPostJSON.subscribe( data => {
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