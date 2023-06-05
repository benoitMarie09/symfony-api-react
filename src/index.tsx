// client/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// Import your routes here
import routesArticle from "./routes/article";
import routesComment from "./routes/comment";
import routesTag from "./routes/tag";
import routesUser from "./routes/user";

const NotFound = () => (
  <h1>Not Found</h1>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const myRoutes = routesArticle.concat(routesComment).concat(routesTag).concat(routesUser) 

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/"/>
          {myRoutes.map( ( route ) =>
            route
            )}
        <Route/>
      </Routes>
    </Router>
  </React.StrictMode>
);