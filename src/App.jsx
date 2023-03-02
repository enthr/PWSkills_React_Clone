import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Pages/Root';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import JobAssistance from './Pages/JobAssistance';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'job-assistance',
                element: <JobAssistance />            
            }
        ]
    },
    {
        path: '/signin',
        element: <Signin />
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
};

export default App;