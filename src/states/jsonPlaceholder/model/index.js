import Rx from 'rxjs';
import update from 'react/lib/update';

import Intent from 'states/jsonPlaceholder/intent';

const subject = new Rx.ReplaySubject(1);

let state = {
  postResult: [],
  results: []
};

Intent.jsonSubjects.goGetJSON.subscribe( data => {
  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.next(state);
});

Intent.jsonSubjects.goPostJSON.subscribe( data => {
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