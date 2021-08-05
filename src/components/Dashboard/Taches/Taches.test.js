import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Taches from './Taches';

describe('<Taches />', () => {
  test('it should mount', () => {
    render(<Taches />);
    
    const taches = screen.getByTestId('Taches');

    expect(taches).toBeInTheDocument();
  });
});