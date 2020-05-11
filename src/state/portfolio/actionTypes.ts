export const ADD_FILTERS = 'ADD_FILTERS';
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

interface ApplyFiltersAction {
  type: typeof APPLY_FILTERS;
  payload: string[];
}

interface AddFiltersAction {
  type: typeof ADD_FILTERS;
  payload: string[];
}

interface ClearFiltersAction {
  type: typeof CLEAR_FILTERS;
  payload: string[];
}

interface RemoveFilterAction {
  type: typeof REMOVE_FILTER;
  payload: string;
}

export const CHANGE_SORTING_ORDER = 'CHANGE_SORTING_ORDER';

export interface PortfolioState {
  appliedFilters: string[];
  order: string;
}

interface ChangeSortingOrderAction {
  type: typeof CHANGE_SORTING_ORDER;
  payload: string;
}

export type FilterActionTypes =
  | ApplyFiltersAction
  | AddFiltersAction
  | ClearFiltersAction
  | RemoveFilterAction;

export type SortingActionTypes = ChangeSortingOrderAction;

export type PortfolioActionTypes = FilterActionTypes | SortingActionTypes;
