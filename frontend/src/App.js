import React from 'react';
import './App.css'; //main frame heart of the project 
//importing necessary components and function from the react-router-dom library for routing
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import PropertyList from './Components/Home/PropertyList'; 
// import Main from './Components./Home./Main'
import Main from "./Components/Home/Main"
function App() {
  // manages the routing configuration for the application
  const router= createBrowserRouter(
    //create route from the elements passed to it
    createRoutesFromElements(
      //define a Route component that matches all paths"/" and render the main component
      //exact propertirs ensure that the route matches exactly what u gave in path
      <Route path = "/" element={<Main/>} exact>
        <Route path = "/" element = {<PropertyList/>} exact />
        </Route>
    )
  );
  return (
    <div className="App">
      {/* This ensures that the routing functionality is available throughout the application
      <RouterProvider router={router}/> */}
   <RouterProvider router={router}/> 
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Main from './Components/Home/Main';

// function App() {
//   const router = createBrowserRouter();
//   const routes = createRoutesFromElements(
//     <Route path="/" element={<Main />} exact />
//   );

//   return (
//     <div className="App">
//       <RouterProvider router={router}>
//         <Router routes={routes} />
//       </RouterProvider>
//     </div>
//   );
// }

// export default App;
