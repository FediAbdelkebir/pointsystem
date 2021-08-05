import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Societes from './Societes';

describe('<Societes />', () => {
  test('it should mount', () => {
    render(<Societes />);

    const societes = screen.getByTestId('Societes');

    expect(societes).toBeInTheDocument();
  });
});