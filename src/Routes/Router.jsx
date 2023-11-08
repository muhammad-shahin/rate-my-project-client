import Root from '../Layouts/Root/Root';
import AllProjects from '../Pages/AllProjects/AllProjects';
import CreateProject from '../Pages/CreateProject/CreateProject';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyProjects from '../Pages/MyProjects/MyProjects';
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails';
import SignUp from '../Pages/SignUp/SignUp';
import SubmittedProjects from '../Pages/SubmittedProjects/SubmittedProjects';
import UpdateProject from '../Pages/UpdateProject/UpdateProject';

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
        path: '/project-details/:projectId',
        element: <ProjectDetails />,
      },
      {
        path: '/my-projects',
        element: <MyProjects />,
      },
      {
        path: '/submitted-projects',
        element: <SubmittedProjects />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/update/:projectId',
        element: <UpdateProject />,
      },
    ],
  },
];

export default routes;
