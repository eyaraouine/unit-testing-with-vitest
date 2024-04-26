import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import { expect,test } from 'vitest';
import SearchMovies from '../components/Search';

test('searches movies and renders them', async () => {
  // Rendre le composant
  render(<SearchMovies />);

  // Entrer un terme de recherche dans l'input
  fireEvent.change(screen.getByPlaceholderText('Search movies by name...'), {
    target: { value: 'Avatar' },
  });

  // Cliquer sur le bouton de recherche
  fireEvent.submit(screen.getByRole('form' ));

  // Attendre que les films soient chargés
 await waitFor(() => {
    const avatars = screen.getAllByText(/^Avatar$/);
    expect(avatars.length).toBeGreaterThan(0);
  });
 
  
});
