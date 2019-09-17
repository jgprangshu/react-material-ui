/*
 *
 * Start actions
 *
 */

import { DEFAULT_ACTION,NEXT_STEP,PREV_STEP } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pageForward() {
  return {
    type: NEXT_STEP,
    payload :1
  };
}

export function pageBackward() {
  return {
    type: PREV_STEP,
    payload :1
  };
}
