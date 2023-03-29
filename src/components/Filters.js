import { useContext } from 'react';
import Context from '../context/myContext';

function Filters() {
  const {
    searchInput,
    setSearchInput,
    setColumn,
    setOperator,
    number,
    setNumber,
    filterFields,
  } = useContext(Context);
  return (
    <>
      <h1>Projeto Star Wars - Trybe</h1>
      <div>
        <label htmlFor="name-filter">
          Busca:
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="column-filter">
          Coluna:
          <select
            onChange={ (e) => setColumn(e.target.value) }
            data-testid="column-filter"
            id="column-filter"
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Operador:
          <select
            onChange={ (e) => setOperator(e.target.value) }
            data-testid="comparison-filter"
            id="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value-filter">
          Número:
          <input
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
            type="number"
            data-testid="value-filter"
            id="value-filter"
          />
        </label>

        <button
          onClick={ () => filterFields() }
          data-testid="button-filter"
          type="button"
        >
          Filtrar
        </button>
      </div>
    </>

  );
}

export default Filters;
