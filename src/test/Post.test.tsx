import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Post from '../components/Post';

describe('Post Component - Bugg 5', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('ska hämta data baserat på inskickat id-prop, inte hårdkodat id', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 42, title: 'Inlägg 42', body: 'Innehåll' }),
      } as Response)
    );

    render(<Post id={42} />);

    await waitFor(() => {
      expect(screen.getByText('Inlägg 42')).toBeInTheDocument();
    });

    expect(fetchSpy).toHaveBeenCalledWith('https://typicode.com42');
  });
});
