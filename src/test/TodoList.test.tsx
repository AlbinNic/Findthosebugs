import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component - Bugg 2', () => {
  test('onToggle ska anropas med uppgiftens korrekta ID, inte dess index', async () => {
    const mockOnToggle = vi.fn();
    const mockOnDelete = vi.fn();

    const mockTodos = [
      { id: 'unikt-id-123', text: 'Köp mjölk', completed: false },
      { id: 'unikt-id-456', text: 'Tvätta bilen', completed: false },
    ];

    render(
      <TodoList 
        todos={mockTodos} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1]);

    expect(mockOnToggle).toHaveBeenCalledWith('unikt-id-456');
  });
});
