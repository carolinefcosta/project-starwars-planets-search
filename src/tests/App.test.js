import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import { fireEvent } from '@testing-library/react';

describe('Requisito 05: Desenvolva testes para atingir 30% de cobertura total da aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(testData),
    }));
  })

  test('Testando o fetch',() => {
    act(() => {
      render(<App />);
    });

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets')
  });

  test('Testa inputs na tela', async () => {
    await act( async () => {
      render(<App />);
    });

    expect(screen.getByRole('heading', {  name: /Projeto Star Wars - Trybe/i })).toBeInTheDocument();
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId("button-filter")).toBeInTheDocument();
    expect(screen.getByTestId("button-remove-filters")).toBeInTheDocument();
  });

  test('Testa tabela com cabeçalhos e seus respectivos valores', () => {
    render(<App />);

    const titlesData = [
      'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 
      'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 
      'Edited', 'Url',
    ]

    titlesData.forEach((title) => {
      expect(screen.getByRole('columnheader', { name: title })).toBeInTheDocument();
    })
  })

  test('Filtre os planetas que possuem a letra "o" no nome', async () => {
    await act(async () => {
      render(<App />);
    });

    const input = await screen.findByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'o' } });
    expect(await screen.findAllByRole('row')).toHaveLength(8);
    const planetNames = ['Coruscant', 'Dagobah', 'Endor', 'Hoth', 'Kamino', 'Naboo', 'Tatooine'];
    for (const planetName of planetNames) {
      expect(await screen.findByText(planetName)).toBeInTheDocument();
    }
  });

  test('Filtre planetas que possuem a letra "oo" no nome', async () => {
    await act(async () => {
      render(<App />);
    });

    const input = await screen.findByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'oo' } });
    expect(await screen.findAllByRole('row')).toHaveLength(3);
    const planetNames = ['Naboo', 'Tatooine'];
    for (const planetName of planetNames) {
      expect(await screen.findByText(planetName)).toBeInTheDocument();
    }
  });

  test('Filtre utilizando a comparação "maior que"', async () => {
    await act(async () => {
      render(<App />);
    });

    fireEvent.change(await screen.findByTestId('column-filter'), { target: { value: 'diameter' } });
    fireEvent.change(await screen.findByTestId('comparison-filter'), { target: { value: 'maior que' } });
    fireEvent.change(await screen.findByTestId('value-filter'), { target: { value: '8900' } });
    fireEvent.click(await screen.findByTestId("button-filter"));

    expect(await screen.findAllByRole('row')).toHaveLength(8);
  });

})
