import {
  Filters,
  InputType,
  FilterOptions,
} from '@/types';

enum ProductFilterTypeKeys {
  category = 'category',
  priceRange = 'priceRange'
}

enum ProductFilterTypeNames {
  category = 'Category',
  priceRange = 'Price range'
}

interface FilterOption {
  options: FilterOptions,
  inputType: InputType,
}

interface getFiltersProps {
  filterData: {
    [ProductFilterTypeKeys.category]: FilterOption,
    [ProductFilterTypeKeys.priceRange]: FilterOption,
  }
}

const getFilters = ({
  filterData,
}: getFiltersProps): Filters => {

  const filters = Object.values(ProductFilterTypeKeys).reduce((acc, filter) => ({
    ...acc,
    [filter]: {
      name: ProductFilterTypeNames[filter],
      options: filterData[filter]?.options || [],
      inputType: filterData[filter]?.inputType || InputType.CHECKBOX,
    },
  }), {})

  return filters;
};

export default getFilters;
