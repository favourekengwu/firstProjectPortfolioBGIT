import './App.css';
// Allows for router to be imported without refering index.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Portfolio';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Portfolio from './components/Home/Portfolio';

function App() {
  const callRouter = createBrowserRouter(
    [{
      path: '',
      element:<MainLayout />,
      children: [
        {
        index: true,
        element:<Home />,
      },
      {
        path: 'about',
        element:<About />,
      },
      {
        path:'portfolio',
        element:<Portfolio />,
      },
      {
        path:'games',
        element:<Games />,
      },
      {
        path:'contact',
        element:<Contact />,
      }
    ]
    }]
  )
  return (
    <RouterProvider router={callRouter}> 
      
    </RouterProvider>
  );
}

export default App;