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
  } = useContext(Context);

  const fieldsFiltered = fields.filter((element) => !columns.includes(element));
  console.log(fieldsFiltered);

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
        <button
          data-testid="button-remove-filters"
        >
          Remover Filtros
        </button>
      </div>
      <div>
        {
          filters.map((resultFiltered) => (
            <div key={ resultFiltered } data-testid="filter">
              <p value={ resultFiltered }>{resultFiltered}</p>
              <button>Excluir</button>
            </div>
          ))
        }
      </div>
    </>

  );
}

export default Filters;
