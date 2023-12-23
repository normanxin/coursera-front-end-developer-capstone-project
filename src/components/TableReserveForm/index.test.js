import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TableReserveForm from '.';
import { act } from 'react-dom/test-utils';

const inputValue = {
  'First name': 'Foo',
  'Last name': 'Bar',
  Email: 'foo@bar.com',
  Phone: '5073128828',
  'Credit card': '6011000180331112',
  CVV: '123',
  Date: new Date().toISOString().split('T')[0],
  Time: '12:00',
  Adults: 1,
  Kids: 0,
  'I agree to receive text and message from the Little Lemon.': true,
};

test('renders form component with disabled submit button by default', () => {
  render(<TableReserveForm />);

  expect(screen.getByText('Get a table')).toBeDisabled();
});

test('call onback prop when back button clicked', () => {
  render(<TableReserveForm />);

  Object.entries(inputValue).forEach(
    async ([key, value]) =>
      await act(() =>
        fireEvent.change(screen.getByLabelText(key), { target: { value } })
      )
  );

  expect(screen.getByText('Get a table')).toBeEnabled();
});
