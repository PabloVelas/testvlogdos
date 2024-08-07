// src/Root.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "views/Home";
import MainTemplate from "templates/MainTemplate";
import { routes } from "config/routes";
import NotFoundPage from "views/404";
import ViewsList from 'components/ViewsList/ViewsList'; // Correct path

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
       
        <Routes>
          {routes.map((route) => {
            if (route.path === "/") {
              return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  element={<Home />}
                />
              );
            } else {
              return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            }
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;

