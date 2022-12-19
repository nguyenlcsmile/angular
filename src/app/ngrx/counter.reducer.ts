import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';
 
export const initialState = 0;
 
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
        return state + 1;
 
    default:
        return state;
  }
}