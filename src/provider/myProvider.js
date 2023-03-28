import PropTypes from 'prop-types';
import Context from '../context/myContext';
import useFetch from '../services/api';

export default function MyProvider({ children }) {
  const [loading, data] = useFetch();
  const value = {
    loading,
    data,
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
