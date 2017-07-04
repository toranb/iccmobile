import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

const rebase = (action$, _, { ajax }) => {
  return action$.ofType('REFRESH_SESSIONS')
    .startWith('LOADING_SESSIONS')
    .delay(2000)
    .mergeMap(() =>
      ajax({method: 'GET', url: '/api/sessions'})
      .map(payload => ({ type: 'DESERIALIZE_ALL', payload }))
    )
}

export { rebase };
