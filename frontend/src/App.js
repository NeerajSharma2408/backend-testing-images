import './App.css';
import ImageForm from './components/ImageForm';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <ImageForm></ImageForm>}
  ]);

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
