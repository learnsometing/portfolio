import {
  ADD_FILTERS,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  REMOVE_FILTER,
  CHANGE_SORTING_ORDER,
  PortfolioState,
  PortfolioActionTypes,
  FilterActionTypes,
} from './actionTypes';

const initialState: PortfolioState = {
  appliedFilters: [],
  order: 'DESC',
};

function addNewFilters(stateFilters: string[], newFilters: string[]): string[] {
  const uniqueNewFilters = newFilters.filter(
    (filter: string) => !stateFilters.includes(filter)
  );
  return [...stateFilters, ...uniqueNewFilters];
}

function removeFilter(stateFilters: string[], filter: string): string[] {
  if (stateFilters.includes(filter)) {
    return stateFilters.filter((stateFilter) => stateFilter !== filter);
  }

  return stateFilters;
}

function getFilters(state: string[] = [], action: FilterActionTypes): string[] {
  switch (action.type) {
    case ADD_FILTERS:
      return addNewFilters(state, action.payload);
    case APPLY_FILTERS:
      return [...action.payload];
    case CLEAR_FILTERS:
      return action.payload;
    case REMOVE_FILTER:
      return removeFilter(state, action.payload);
    default:
      return state;
  }
}

export function portfolioReducer(
  state: PortfolioState = initialState,
  action: PortfolioActionTypes
): PortfolioState {
  switch (action.type) {
    case ADD_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: getFilters(state.appliedFilters, action),
      });
    case APPLY_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: getFilters(state.appliedFilters, action),
      });
    case CLEAR_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: getFilters(state.appliedFilters, action),
      });
    case REMOVE_FILTER:
      return Object.assign({}, state, {
        appliedFilters: getFilters(state.appliedFilters, action),
      });
    case CHANGE_SORTING_ORDER:
      return Object.assign({}, state, {
        order: action.payload,
      });
    default:
      return state;
  }
}
