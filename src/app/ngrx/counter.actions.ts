import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Increment = '[Counter Component] Increment'
}
 
export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}