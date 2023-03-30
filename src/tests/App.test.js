import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';

// const planets = testData.results.name;

describe('Requisito 05: Desenvolva testes para atingir 30% de cobertura total da aplicação', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    })
  })

  test('Testando o fetch', async () => {
    render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');
  });

  test('Testa componente Filters', () => {
    render(<App />);

    const h1Title = screen.getByRole('heading', {  name: /Projeto Star Wars - Trybe/i });
    expect(h1Title).toBeVisible();

    const inputBusca = screen.getByTestId('name-filter');
    expect(inputBusca).toBeVisible();

    const inputColumn = screen.getByTestId('column-filter');
    expect(inputColumn).toBeVisible();
    expect(inputColumn).toHaveLength(5);

    const inputOperator = screen.getByTestId('comparison-filter');
    expect(inputOperator).toBeVisible();
    expect(inputOperator).toHaveLength(3);

    const inputNumber = screen.getByTestId('value-filter');
    expect(inputNumber).toBeVisible();

    const button = screen.getByRole('button', { name: /Filtrar/i });
    expect(button).toBeVisible();
  });

  test('Testa componente Table', () => {
    render(<App />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Surface Water')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(screen.getByText('Url')).toBeInTheDocument();
  });

  // test('Testa se possui 10 planetas', async () => {
  //   planets.forEach(({ name }) => {
  //     expect(screen.getByRole('cell', { name })).toBeInTheDocument();
  //   });
  // });
})

// test('I am your test', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, App!/i);
//   expect(linkElement).toBeInTheDocument();
// });
