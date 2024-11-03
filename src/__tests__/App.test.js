import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; 

test('changes to "dark" mode when the button is clicked', () => {
  const { container } = render(<App />);
  

  fireEvent.click(screen.getByText(/Toggle Mode/i)); 
  
  
  expect(container.querySelector(".App.dark")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  
  
  fireEvent.click(screen.getByText(/Toggle Mode/i));
  expect(container.querySelector(".App.dark")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Toggle Mode/i));
  expect(container.querySelector(".App.dark")).not.toBeInTheDocument();
});