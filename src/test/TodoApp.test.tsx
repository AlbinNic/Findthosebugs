import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from '../components/TodoApp';

describe('TodoApp - Bugg 3 & 4', () => {
  test('Filtret "Klara" ska bara visa avklarade uppgifter', async () => {
    render(<TodoApp />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add|lägg till|\+/i });
    
    await userEvent.type(input, 'Köp mjölk');
    await userEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    const completedFilterButton = screen.getByRole('button', { name: /klara/i });
    await userEvent.click(completedFilterButton);

    expect(screen.getByText('Köp mjölk')).toBeInTheDocument();
  });
});
