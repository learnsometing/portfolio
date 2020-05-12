import {
  ADD_FILTER,
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

function addFilter(state: string[], filter: string): string[] {
  if (!state.includes(filter)) {
    return [...state, filter];
  }

  return state;
}

function removeFilter(stateFilters: string[], filter: string): string[] {
  if (stateFilters.includes(filter)) {
    return stateFilters.filter((stateFilter) => stateFilter !== filter);
  }

  return stateFilters;
}

function getFilters(state: string[] = [], action: FilterActionTypes): string[] {
  switch (action.type) {
    case ADD_FILTER:
      return addFilter(state, action.payload);
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
    case ADD_FILTER:
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
