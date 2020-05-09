import { ADD_FILTERS, APPLY_FILTERS, CLEAR_FILTERS } from './actionTypes';
import { Filters } from './actions';

const initialState = {
  appliedFilters: [],
};

interface AppState {
  appliedFilters: string[];
}

function addNewFilters(stateFilters: string[], newFilters: string[]): string[] {
  const uniqueNewFilters = newFilters.filter(
    (filter: string) => !stateFilters.includes(filter)
  );
  return [...stateFilters, ...uniqueNewFilters];
}

export function portfolioReducer(
  state: AppState = initialState,
  action: Filters
): AppState {
  switch (action.type) {
    case ADD_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: addNewFilters(
          state.appliedFilters,
          action.payload.filters
        ),
      });
    case APPLY_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: [...action.payload.filters],
      });
    case CLEAR_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: action.payload.filters,
      });
    default:
      return state;
  }
}
