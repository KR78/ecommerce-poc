import { FilterOptions } from '@/types';

/*
  creating this as a function (can be extended in future to pass in data / parameters
  to make it more dynamic)
*/
const priceRange = (): FilterOptions => [
  {
    name: 'Lower than $20',
    value: {
      _lt: '20',
    },
    onClick: () => null,
  },
  {
    name: '$20 - $100',
    value: {
      _gte: '20',
      _lte: '100',
    },
    onClick: () => null,
  },
  {
    name: '$100 - $200',
    value: {
      _gte: '100',
      _lte: '200',
    },
    onClick: () => null,
  },
  {
    name: 'More than $200',
    value: {
      _gt: '200',
    },
    onClick: () => null,
  },
]

export default priceRange;
