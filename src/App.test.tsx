import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the application', () => {
  const { getByText, asFragment } = render(<App />);
  const linkElement = getByText(/Chicago/i);
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
