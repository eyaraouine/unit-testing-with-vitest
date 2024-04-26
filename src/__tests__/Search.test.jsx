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
    expect(screen.getAllByText('loading...')).toBeInTheDocument();
    expect(screen.queryAllByText('Avatar')).toBeInTheDocument();
  });
 // const movieTitles = await screen.findAllByText('Avatar');
  //expect(movieTitles.length).toBeGreaterThan(0); // Vérifier s'il y a au moins un titre de film "Avatar"
  
});
