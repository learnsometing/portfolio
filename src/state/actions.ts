import { ADD_FILTERS, APPLY_FILTERS, CLEAR_FILTERS } from './actionTypes';

interface Action {
  type: string;
}

export interface Filters extends Action {
  payload: {
    filters: string[];
  };
}

export function addFilters(filters: string[]): Filters {
  return {
    type: ADD_FILTERS,
    payload: {
      filters,
    },
  };
}

export function applyFilters(filters: string[]): Filters {
  return {
    type: APPLY_FILTERS,
    payload: {
      filters,
    },
  };
}

export function clearFilters(): Filters {
  return {
    type: CLEAR_FILTERS,
    payload: {
      filters: [],
    },
  };
}
