import Rx from 'rxjs';
import update from 'react/lib/update';

import Example from 'states/example/example.state';

const subject = new Rx.ReplaySubject(1);

let state = {
  postResult: [],
  results: [],
  counter: 0
};

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