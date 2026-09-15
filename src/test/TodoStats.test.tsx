import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoStats from '../components/TodoStats';

describe('TodoStats Component', () => {
  test('visar rätt antal kvarvarande uppgifter', () => {
    const mockTodos = [
      { id: '1', text: 'Gör läxan', completed: true },
      { id: '2', text: 'Städa rummet', completed: false },
      { id: '3', text: 'Handla mat', completed: false },
    ];

    render(<TodoStats todos={mockTodos} />);


    const statsText = screen.getByText('2 kvar av 3');
    expect(statsText).toBeInTheDocument();
  });
});
