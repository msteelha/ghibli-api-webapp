import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('renders Ghibli api link', () => {
    render(<App />);
    const textElement = screen.getByText(/Studio Ghibli API/i);
    expect(textElement).toBeInTheDocument();
  })
});