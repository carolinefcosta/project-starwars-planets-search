import { useContext } from 'react';
import Context from '../context/myContext';
import filterPlanets from '../utils/filters';
import '../styles/Table.css';

function Table() {
  const { data, searchInput, filters } = useContext(Context);

  const arrayFilter = data.filter((filterPlanet) => {
    const searchName = searchInput === '' ? data : (
      filterPlanet.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchName;
  });

  return (
    <fieldset className="fieldset-table">
      <table>
        <tr className="tr-th-table">
          <th className="primeiro-th">Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
        {/* Auxílio do Mentor Pablo */}
        <tbody>
          {
            arrayFilter
              .filter((planet) => filterPlanets(planet, filters))
              .map((planet, i) => (
                <tr key={ i } className="tr-map-td">

                  <td className="primeiro-td">{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>

                </tr>
              ))
          }
        </tbody>
      </table>
    </fieldset>
  );
}

export default Table;
