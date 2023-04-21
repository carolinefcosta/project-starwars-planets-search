import '../styles/Filters.css';
import { useContext } from 'react';
import Context from '../context/myContext';

const fields = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function Filters() {
  const {
    searchInput,
    setSearchInput,
    setColumn,
    setOperator,
    number,
    setNumber,
    filterFields,
    columns,
    filters,
    removeFilters,
    removeOneFilter,
    // ascDesc,
  } = useContext(Context);

  const fieldsFiltered = fields.filter((element) => !columns.includes(element));

  return (
    <div className="div-filters">
      <h1 className="h1-filters">☄️ Projeto Star Wars ☄️</h1>
      <div>
        <label htmlFor="name-filter">
          Pesquisar:
          {' '}
          <input
            className="search-input-filters"
            id="name-filter"
            data-testid="name-filter"
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
          />
        </label>
      </div>
      <div className="div-column-operation-number-btn-filter">
        <label htmlFor="column-filter">
          Coluna:
          {' '}
          <select
            className="select-filters"
            onClick={ (e) => setColumn(e.target.value) }
            data-testid="column-filter"
            id="column-filter"
          >
            {
              fieldsFiltered.map((element, index) => (
                <option key={ index } value={ element }>{element}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador:
          {' '}
          <select
            onChange={ (e) => setOperator(e.target.value) }
            data-testid="comparison-filter"
            id="comparison-filter"
            className="select-filters"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          Número:
          {' '}
          <input
            className="input-filters"
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
            type="number"
            data-testid="value-filter"
            id="value-filter"
          />
        </label>
        <button
          className="btn-filters"
          onClick={ () => filterFields() }
          data-testid="button-filter"
          type="button"
        >
          Filtrar
        </button>
        <div>
          <button
            className="btn-filters"
            onClick={ () => removeFilters() }
            type="button"
            data-testid="button-remove-filters"
          >
            Remover Filtros
          </button>
        </div>

      </div>
      {/* Auxílio do Mentor Pablo e colega Allex */}
      <div>
        {
          filters.map((obj) => (
            <div key={ obj.column } data-testid="filter">
              <p>{`${obj.column} ${obj.operator} ${obj.number}`}</p>
              <button
                onClick={ () => {
                  removeOneFilter(obj);
                } }
                value={ obj.column }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="asc"
            label="Crescente"
            // onClick={ ({ target: { value } }) => ascDesc(value) }
          />
          Crescente:
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="desc"
            label="Decrescente"
            // onClick={ ({ target: { value } }) => ascDesc(value) }
          />
          Decrescente:
        </label>

        <button
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default Filters;
