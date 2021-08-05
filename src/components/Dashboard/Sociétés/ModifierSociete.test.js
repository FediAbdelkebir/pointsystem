import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModifierSociete from './ModifierSociete';

describe('<ModifierSociete />', () => {
  test('it should mount', () => {
    render(<ModifierSociete />);
    
    const modifiersociete = screen.getByTestId('ModifierSociete');

    expect(modifiersociete).toBeInTheDocument();
  });
});