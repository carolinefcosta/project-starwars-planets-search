import PropTypes from 'prop-types';
import { useState } from 'react';
import Context from '../context/myContext';
import useFetch from '../services/api';

export default function MyProvider({ children }) {
  const [loading, data, setData] = useFetch();
  const [searchInput, setSearchInput] = useState('');
  const [column, setColumn] = useState('population');
  const [filters, setFilters] = useState([]);
  const [columns, setColumns] = useState([]);
  const [operator, setOperator] = useState('maior que');
  const [number, setNumber] = useState(0);

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
