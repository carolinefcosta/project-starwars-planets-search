import { useContext } from 'react';
import Context from '../context/myContext';

function Filters() {
  const { searchInput, setSearchInput } = useContext(Context);
  return (
    <labe>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        name="searchInput"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
    </labe>
  );
}

export default Filters;
