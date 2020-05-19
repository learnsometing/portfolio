import {
  ADD_FILTER,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  REMOVE_FILTER,
  FilterActionTypes,
  CHANGE_SORTING_ORDER,
  SortingActionTypes,
} from './actionTypes';

export function addFilter(filter: string): FilterActionTypes {
  return {
    type: ADD_FILTER,
    payload: filter,
  };
}

export function applyFilters(
  filters: string[]
): (dispatch: (action: FilterActionTypes) => void) => void {
  return function(dispatch): void {
    dispatch({
      type: APPLY_FILTERS,
      payload: filters,
    });
  };
}

export function clearFilters(): (
  dispatch: (action: FilterActionTypes) => void
) => void {
  return function(dispatch): void {
    dispatch({
      type: CLEAR_FILTERS,
      payload: [],
    });
  };
}

export function removeFilter(filter: string): FilterActionTypes {
  return {
    type: REMOVE_FILTER,
    payload: filter,
  };
}

export function changeSortingOrder(order: string): SortingActionTypes {
  return {
    type: CHANGE_SORTING_ORDER,
    payload: order,
  };
}
