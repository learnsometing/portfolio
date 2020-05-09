export const getPortfolio = (store) => store.portfolioReducer;
export const getAppliedFilters = (store) =>
  getPortfolio(store) ? getPortfolio(store).appliedFilters : [];
