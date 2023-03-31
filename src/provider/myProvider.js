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

  // Auxílio do Mentor Pablo e colegas
  const filterFields = () => {
    setFilters([...filters, {
      column,
      operator,
      number,
    }]);
    setColumns([...columns, column]);
  };

  const removeOneFilter = (objFilter) => {
    const newFilters = filters.filter((filter) => filter.column !== objFilter.column);
    setFilters(newFilters);
    setColumns(columns.filter((columnsInArray) => columnsInArray !== objFilter.column));
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
