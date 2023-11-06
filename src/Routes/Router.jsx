import Root from '../Layouts/Root/Root';
import AllProjects from '../Pages/AllProjects/AllProjects';
import CreateProject from '../Pages/CreateProject/CreateProject';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails';
import SignUp from '../Pages/SignUp/SignUp';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/create-project',
        element: <CreateProject />,
      },
      {
        path: '/all-projects',
        element: <AllProjects />,
      },
      {
        path: '/project-details',
        element: <ProjectDetails />,
      },
    ],
  },
];

export default routes;
