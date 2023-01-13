import * as fromTodos from '../actions/user.action';
import { User } from '../../models/user.model';

export interface TodoState {
  data: User[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: TodoState = {
  data: [],
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromTodos.LoadTodo
): TodoState {
  switch (action.type) {
    case fromTodos.LOAD_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromTodos.LOAD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case fromTodos.LOAD_TODO_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
}
