import { render } from '@testing-library/react';
import App from './App';

test("renders a heading", () => {
  const { getByRole } = render(<App />);
  const heading = getByRole("heading", { name: /string calculator/i });
  expect(heading).toBeInTheDocument();
});