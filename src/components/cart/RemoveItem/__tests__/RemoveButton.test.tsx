// RemoveButton.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RemoveButton from '../RemoveButton';
import { useCartStore } from '@/store/cartStore/store';

jest.mock('@/store/cartStore/store', () => ({
  useCartStore: jest.fn(),
}));

describe('RemoveButton Component', () => {
  beforeEach(() => {
    (useCartStore as jest.Mock).mockReturnValue({
      removeItem: jest.fn(),
    });
  });

  it('debe renderizar el botón de eliminar', () => {
    render(<RemoveButton itemId={1} itemName="Cafe Orgánico" />);
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('debe llamar a removeItem al hacer clic en el botón de eliminar', () => {
    render(<RemoveButton itemId={1} itemName="Cafe Orgánico" />);
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    expect(useCartStore().removeItem).toHaveBeenCalledWith(1);
  });
});
