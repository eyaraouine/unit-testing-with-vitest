// Importer les fonctions nécessaires de @vitest/react
import { expect,test } from 'vitest';
import {render, screen} from '@testing-library/react'
// Importer le composant à tester
import App from '../App';

// Décrire le test
test('renders the App correctly', () => {
  // Rendre le composant
  render(<App />);

  // Vérifier si le titre du Header est rendu correctement
  const headerTitle = screen.getByText('Movie Search');
  expect(headerTitle).toBeInTheDocument();

  // Vérifier si le composant de recherche est rendu
  const searchMoviesComponent = screen.getByRole('form');
  expect(searchMoviesComponent).toBeInTheDocument();
});
