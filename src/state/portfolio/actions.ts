import {
  ADD_FILTERS,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  REMOVE_FILTER,
  FilterActionTypes,
  CHANGE_SORTING_ORDER,
  SortingActionTypes,
} from './actionTypes';

export function addFilters(filters: string[]): FilterActionTypes {
  return {
    type: ADD_FILTERS,
    payload: filters,
  };
}

export function applyFilters(filters: string[]): FilterActionTypes {
  return {
    type: APPLY_FILTERS,
    payload: filters,
  };
}

export function clearFilters(): FilterActionTypes {
  return {
    type: CLEAR_FILTERS,
    payload: [],
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
