import { PortfolioState } from './actionTypes';
import { RootState } from '../createStore';

const getPortfolio = (store: RootState): PortfolioState => store.portfolio;

export const getAppliedFilters = (store: RootState): string[] =>
  getPortfolio(store) && getPortfolio(store).appliedFilters
    ? getPortfolio(store).appliedFilters
    : [];

export const getSortingOrder = (store: RootState): string =>
  getPortfolio(store) && getPortfolio(store).order
    ? getPortfolio(store).order
    : 'DESC';
