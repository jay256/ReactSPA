/**
 * Created by jay on 8/5/17.
 */
import { call, put } from 'redux-saga/effects';

import TitlesApi from '../api/titles';

export function* titlesFetchList(action) {
  // call the api to get the users
  const titles = yield call(TitlesApi.getList);

  // dispatch the success action with the users attached
  yield put({
    type: 'titles.fetchTitleListSuccess',
    titles: titles,
  });
}
