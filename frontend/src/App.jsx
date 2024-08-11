import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Home from "./pages/home";
import NotLoggedInUser from "./privateRouter/NotLoggedInUser";
import LoggedInUser from "./privateRouter/LoggedInUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedInUser />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Registration />
      </RouterProvider>
    </>
  );
}

export default App;
