import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import CustomRoute from './custom-route';
import TestPage from "./views/TestPage/TestPage";

import 'antd/dist/antd.css';
import './App.css'

function App() {

  return (
    <Switch>
      <CustomRoute exact path="/" component={TestPage} layout={true} />
    </Switch>
  );
}

export default App;
