import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Ensure this file contains Tailwind imports if you're using Tailwind CSS
import AppRouter from './router.jsx'; // Import AppRouter

// Get the root element where the React app will be rendered
const rootElement = document.getElementById('root')

// Create a root for rendering the React application
const root = createRoot(rootElement)

// Render the App component wrapped in StrictMode
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
