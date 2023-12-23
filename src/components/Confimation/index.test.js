import { render, fireEvent, screen } from '@testing-library/react';
import Confirmation from '.';

const date = '23-12-23';
const time = '12:00';

test('renders confirmation component with date and time', () => {
  render(<Confirmation date={date} time={time} />);

  expect(
    screen.getByText(
      `We are looking forward to your visit on ${date} at ${time}.`
    )
  ).toBeInTheDocument();
});

test('call onback prop when back button clicked', () => {
  const handleBack = jest.fn();

  render(<Confirmation date={date} time={time} onBack={handleBack} />);

  fireEvent.click(screen.getByText('Back'));

  expect(handleBack).toHaveBeenCalled();
});
