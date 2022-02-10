import React, { useState, useEffect } from 'react';
import {
  Filters,
  InputType,
} from '@/types';
import getCategories from '@/service/getCategories';
import getPriceRanges from '@/helpers/priceRanges';
import getFilters from './helpers/getFilters';
import { useWindowSize } from '@/hooks';
import CheckBox from '../CheckBox';
import Button from '../Button';
import { useFilterProvider } from '@/components/providers/filterProvider';
import style from './FilterComponent.module.scss';

const FilterComponent = () => {
  const size = useWindowSize();
  const { setisFilterOpen } = useFilterProvider();

  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>();

  const { loading, error, data } = getCategories();

  const handleToggleFilter = (v: any) => {
    console.log({ v });
  }

  useEffect(() => {
    if (loading) return setIsLoading(loading);

    if (data && data.categories) {
      const {
        categories,
      } = data;

      const categoriesFilterOptions = categories.map(({ id, name }) => ({
        name: name,
        value: id,
        onClick: handleToggleFilter,
      }))

      const priceRangeOptions = (getPriceRanges() || []).map((priceRange) => ({
        ...priceRange,
        onClick: handleToggleFilter,
      }))

      const filterData = {
        category: {
          inputType: InputType.CHECKBOX,
          options: categoriesFilterOptions,
        },
        priceRange: {
          inputType: InputType.RADIO,
          options: priceRangeOptions,
        },
      }

      setFilters(getFilters({ filterData }))
    }

  }, [loading, error, data])

  console.log({
    isLoading,
    filters,
  })


  return (
    <article className={`${style.wrapper} ${style.mobileFilter}`}>
      <header>
        <h1>Filter</h1>
        <span>
          <Button
            unStyled
            onClick={() => setisFilterOpen(false)}
          >
           <img src="/icons/close.svg" alt="Close Icon" />
          </Button>
        </span>
      </header>
      {
        filters
        && Object.values(filters).map((
          {
            name,
            options,
            inputType,
          }, index) => (
          <section
            key={name || index}
            className={style.categorySection}>
            {
              name
              && (
                <header className={style.categorySectionHeader}>
                  {size.width && size.width <= 414 && index === 0 ? '' : name}
                </header>
              )
            }
            <ul>
              {
                options
                && options.map((option, index) => (
                  <CheckBox
                    inputType={inputType}
                    key={option?.name || index}
                    name={option?.name || ''}
                    value={option?.value || ''}
                    onClick={option?.onClick || ''}
                  />
                ))
              }

            </ul>
          </section>
        ))
      }
    </article>
  )
};

export default FilterComponent;
