import React from 'react';

interface FilterContextProps {
  isFilterOpen: boolean;
  setisFilterOpen(v: boolean): void;
}

export const FilterContext = React.createContext({} as FilterContextProps);

interface FilterProviderProps {
  children: React.ReactNode;
}

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [isFilterOpen, setisFilterOpen] = React.useState(true);

  return (
    <FilterContext.Provider
      value={{
        isFilterOpen,
        setisFilterOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterProvider = () => React.useContext(FilterContext);

export default FilterProvider;
