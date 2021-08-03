import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Head from './Head';

describe('<Head />', () => {
  test('it should mount', () => {
    render(<Head />);
    
    const head = screen.getByTestId('Head');

    expect(head).toBeInTheDocument();
  });
});