import PropTypes from 'prop-types';
import { useState } from 'react';
import Context from '../context/myContext';
import useFetch from '../services/api';

export default function MyProvider({ children }) {
  const [loading, data, setData] = useFetch();
  const [searchInput, setSearchInput] = useState('');
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [number, setNumber] = useState(0);

  const filterFields = () => {
    if (operator === 'maior que') {
      const resultOperator = data
        .filter((filterPlanet) => Number(filterPlanet[column]) > Number(number));
      setData(resultOperator);
    } else if (operator === 'menor que') {
      const resultOperator = data
        .filter((filterPlanet) => Number(filterPlanet[column]) < Number(number));
      setData(resultOperator);
    } else if (operator === 'igual a') {
      const resultOperator = data
        .filter((filterPlanet) => Number(filterPlanet[column]) === Number(number));
      setData(resultOperator);
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
