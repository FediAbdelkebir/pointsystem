import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModifierTache from './ModifierTache';

describe('<ModifierTache />', () => {
  test('it should mount', () => {
    render(<ModifierTache />);
    
    const modifiertache = screen.getByTestId('ModifierTache');

    expect(modifiertache).toBeInTheDocument();
  });
});