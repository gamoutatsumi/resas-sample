import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '@/components/Header';

describe('App.tsx', () => {
  test('Printing title', () => {
    render(<Header />);
    expect(screen.getByText('都道府県別総人口推移')).toBeInTheDocument();
  });
});
