// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
const App = () => {
  return (
    <div>
   
   <Router>
   <Header />
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/about' component={About}/>
  
    
  
    </Switch>
   </Router>
    </div>
  )
}

export default App
