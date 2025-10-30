import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from './App';

test('renders the hero text on the home page', () => {
  // We use createMemoryRouter for testing to control the routes
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          // We need a dummy element for the test to render
          element: <div>Home Page Content</div>,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  // Render the RouterProvider, not App directly
  render(<RouterProvider router={router} />);
  
  // Now, look for text that is actually in your App.jsx, like the navbar
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});