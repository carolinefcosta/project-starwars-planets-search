// Auxílio do Mentor Pablo
export default function filterPlanets(planet, arrayFilters) {
  const planetComparator = [];

  arrayFilters.forEach((filter) => {
    if (filter.operator === 'maior que') {
      planetComparator.push(Number(planet[filter.column]) > Number(filter.number));
    }
    if (filter.operator === 'menor que') {
      planetComparator.push(Number(planet[filter.column]) < Number(filter.number));
    }
    if (filter.operator === 'igual a') {
      planetComparator.push(Number(planet[filter.column]) === Number(filter.number));
    }
  });

  return planetComparator.every((bool) => bool);
}
