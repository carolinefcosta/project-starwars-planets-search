import PropTypes from 'prop-types';
import { useState } from 'react';
import Context from '../context/myContext';
import useFetch from '../services/api';

export default function MyProvider({ children }) {
  const [loading, data, setData, origin] = useFetch();
  const [searchInput, setSearchInput] = useState('');
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [filters, setFilters] = useState([]);
  const [columns, setColumns] = useState([]);

  const filterFields = () => {
    if (operator === 'maior que') {
      const searchResult = data
        .filter((filterPlanet) => Number(filterPlanet[column]) > Number(number));
      setData(searchResult);
      setFilters([...filters, [
        column,
        operator,
        number,
      ]]);
      setColumns([...columns, column]);
    } else if (operator === 'menor que') {
      const searchResult = data
        .filter((filterPlanet) => Number(filterPlanet[column]) < Number(number));
      setData(searchResult);
      setFilters([...filters, [
        column,
        operator,
        number,
      ]]);
      setColumns([...columns, column]);
    } else if (operator === 'igual a') {
      const searchResult = data
        .filter((filterPlanet) => Number(filterPlanet[column]) === Number(number));
      setData(searchResult);
      setFilters([...filters, [
        column,
        operator,
        number,
      ]]);
      setColumns([...columns, column]);
    }
  };

  const removeOneFilter = async (value) => {
    // if (operator === 'maior que') {
    //   const searchResult = data
    //     .filter((filterPlanet) => Number(filterPlanet[column]) > Number(number));
    //   setData(searchResult);
    // } else if (operator === 'menor que') {
    //   const searchResult = data
    //     .filter((filterPlanet) => Number(filterPlanet[column]) < Number(number));
    //   setData(searchResult);
    // } else if (operator === 'igual a') {
    //   const searchResult = data
    //     .filter((filterPlanet) => Number(filterPlanet[column]) === Number(number));
    //   setData(searchResult);
    // }
    const newFilters = filters.filter(([c]) => c !== value);
    setFilters(newFilters);
    const newColumns = columns.filter((c) => c !== value);
    setColumns(newColumns);
    await setData([...filters]);
  };

  const removeFilters = () => {
    setFilters([]);
    setData(origin);
    setColumns([]);
  };

  const value = {
    loading,
    data,
    searchInput,
    setSearchInput,
    column,
    setColumn,
    operator,
    setOperator,
    number,
    setNumber,
    setData,
    filterFields,
    filters,
    columns,
    removeFilters,
    removeOneFilter,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
