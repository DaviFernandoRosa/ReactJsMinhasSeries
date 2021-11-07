import React from  'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Generos from './components/Gerenos/Generos';
import NewGenero from './components/NewGenero/NewGenero';
import EditarGenero from './components/EditarGenero/EditarGenero';
import Series from './components/Series/Series';
import NovaSerie from './components/NovaSerie/NovaSerie';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {

  return (
    <Router>
        <div>
          <Header />
          <Switch>
              <Route exact path='/'  component={Home} />
              <Route exact path='/generos' component={Generos} />
              <Route exact path='/generos/novo' component={NewGenero} />
              <Route exact path='/generos/:id' component={EditarGenero} />
              <Route exact path='/Series' component={Series}/>
              <Route exact path='/NovaSerie' component={NovaSerie}/>
          </Switch>
         

       </div>
    </Router>
       
  );
}

export default App;
