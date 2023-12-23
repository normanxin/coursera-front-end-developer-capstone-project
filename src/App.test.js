import { render } from '@testing-library/react';
import App from './App';

test('renders reserve table form', () => {
  const { container } = render(<App />);

  expect(container.querySelector('form')).toBeInTheDocument();
});
