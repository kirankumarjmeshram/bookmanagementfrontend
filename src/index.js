import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/bootstrap.custom.css";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import AddBook from './screens/AddBook';
import SeachBook from './screens/SeachBook';
//import "./assets/styles/index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App/>}>
      <Route index ={true} path="/" element={<HomeScreen />}/>
      <Route path="/book/:id" element={<BookScreen />}/>
      <Route path="/add" element={<AddBook />}/>
      <Route path="/search" element={<SeachBook/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
