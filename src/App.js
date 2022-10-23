import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./app/Navbar/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Homepage />
      </div>
    </RouterProvider>
  );
}

export default App;
