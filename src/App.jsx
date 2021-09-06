import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import ProviderMovie from './Context/ProviderMovie';
import ProviderDetail from './Context/ProviderDetail';
import ProviderVideo from './Context/ProviderVideo';
import Initial from './Screen/Initial';

const App = () => {

  return (
    <Router history={useHistory}>
      <ProviderMovie>
        <ProviderDetail>
          <ProviderVideo>
            <Switch>
              <Route exact path="/">
                <Initial/>
              </Route>  
            </Switch>
          </ProviderVideo>  
        </ProviderDetail>
      </ProviderMovie>
    </Router>
  );

}

export default App;