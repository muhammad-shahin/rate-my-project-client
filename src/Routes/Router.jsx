import PreviewPdf from '../Components/PreviewPdf/PreviewPdf';
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
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <CreateProject />
          </PrivateRoute>
        ),
      },
      {
        path: '/all-projects',
        element: <AllProjects />,
      },
      {
        path: '/project-details/:projectId',
        element: (
          <PrivateRoute>
            <ProjectDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-projects',
        element: (
          <PrivateRoute>
            <MyProjects />
          </PrivateRoute>
        ),
      },
      {
        path: '/submitted-projects',
        element: (
          <PrivateRoute>
            <SubmittedProjects />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:projectId',
        element: (
          <PrivateRoute>
            <UpdateProject />
          </PrivateRoute>
        ),
      },
      {
        path: '/pdf/:pdfURL',
        element: (
          <PrivateRoute>
            <PreviewPdf />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
