import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from '../components/MainView';

const AppRouter = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<MainView />} exact={true} />
      </Routes>
  </BrowserRouter>
);

export default AppRouter;
