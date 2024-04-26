import {expect,test} from "vitest"
import { render, screen } from "@testing-library/react"

// Importer le composant à tester
import Header from '../components/Header';

// Décrire le test
test('renders the header correctly', () => {
  // Rendre le composant
  render(<Header />);

  // Vérifier si le titre est rendu correctement
  const headerTitle = screen.getByText('Movie Search');
  expect(headerTitle).toBeInTheDocument();

  // Vérifier si le titre a les classes CSS appropriées
  expect(headerTitle).toHaveClass('text-white');
  expect(headerTitle).toHaveClass('text-center');
  expect(headerTitle).toHaveClass('text-3xl');
  expect(headerTitle).toHaveClass('pb-4');

  // Vérifier si le conteneur a la classe CSS appropriée
  const navContainer = screen.getByRole('navigation');
  expect(navContainer).toHaveClass('bg-indigo-700');
  expect(navContainer).toHaveClass('py-4');
  expect(navContainer).toHaveClass('px-4');
});
