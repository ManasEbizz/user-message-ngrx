import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export const LOAD_TODO = '[Todo] Load Todo';
export const LOAD_TODO_FAIL = '[Todo] Load Todo Fail';
export const LOAD_TODO_SUCCESS = '[Todo] Load Todo Success';

export class LoadTodo implements Action {
  readonly type = LOAD_TODO;
}

export class LoadTodoFail implements Action {
  readonly type = LOAD_TODO_FAIL;
  constructor(payload: any) {}
}

export class LoadTodoSuccess implements Action {
  readonly type = LOAD_TODO_SUCCESS;
  constructor(public payload: User[]) {}
}

// Todo Actions
export type TodoActions = LoadTodo | LoadTodoFail | LoadTodoSuccess;
