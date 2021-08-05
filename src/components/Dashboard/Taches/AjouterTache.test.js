import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AjouterTache from './AjouterTache';

describe('<AjouterTache />', () => {
  test('it should mount', () => {
    render(<AjouterTache />);
    
    const ajoutertache = screen.getByTestId('AjouterTache');

    expect(ajoutertache).toBeInTheDocument();
  });
});