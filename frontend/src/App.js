import './App.css';
import SignUpForm from './components/SignUpForm';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    // , element: <SignUpForm></SignUpForm>
    {path: "/signup",element: <SignUpForm></SignUpForm>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
