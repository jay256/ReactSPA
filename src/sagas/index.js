/**
 * Created by jay on 8/5/17.
 */
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { titlesFetchList, titleClick } from './titles';

/**
 *  Main saga generator
 */
export function* sagas() {
  yield [
    fork(takeLatest, 'titlesFetchList', titlesFetchList),
  ];
}
