import Rx from 'rxjs';

import CounterModel from 'states/counter/model';
import JsonPlaceholderModel from 'states/jsonPlaceholder/model';

export default Rx.Observable.combineLatest(
  CounterModel.subject,
  JsonPlaceholderModel.subject,
  function (
    CounterState,
    JsonPlaceholderState
  ) {
    return {
      CounterState: CounterState,
      JsonPlaceholderState: JsonPlaceholderState
    };
  }
);