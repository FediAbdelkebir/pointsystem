import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Scripts from './Scripts';

describe('<Scripts />', () => {
  test('it should mount', () => {
    render(<Scripts />);
    
    const scripts = screen.getByTestId('Scripts');

    expect(scripts).toBeInTheDocument();
  });
});