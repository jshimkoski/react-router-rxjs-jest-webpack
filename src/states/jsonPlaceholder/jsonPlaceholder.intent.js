import Rx from 'rxjs';
import Api from 'states/jsonPlaceholder/jsonPlaceholder.api';

var jsonSubjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()
};

export default {
  jsonSubjects,
  getJSON: () => Api.get('posts').subscribe(::jsonSubjects.goGetJSON.next),
  postJSON: () => Api.get('available').subscribe(::jsonSubjects.goPostJSON.next)
};