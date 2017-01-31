import Rx from 'rxjs';
import update from 'react/lib/update';

import Intent from 'states/counter/counter.intent';

const subject = new Rx.ReplaySubject(1);

let state = {
  counter: 0
};

Intent.subjects.incrementCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.next(state);
});

Intent.subjects.decreaseCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.next(state);
});

subject.next(state);

export default {
  subject
};