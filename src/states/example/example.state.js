import Rx from 'rxjs';
import Request from './example.api';

var jsonSubjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()
};

export default {
  jsonSubjects,
  getJSON: () => Request.get('posts').subscribe(::jsonSubjects.goGetJSON.next),
  postJSON: () => Request.get('available').subscribe(::jsonSubjects.goPostJSON.next)
};