// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import CourseHome from './components/CourseHome'
import Price from './components/Price'
import blog from './blog'
import Contact from './Contact'
import Footer from './footer'
import EnrollmentForm from './components/EnrollmentForm'
const App = () => {
  return (
    <div>
   
   <Router>
   <Header />
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/about' component={About}/>
     <Route exact path='/courses' component={CourseHome}/>
     <Route exact path='/team' component={Team}/>
     <Route exact path='/pricing' component={Price}/>
      <Route exact path='/journal' component={blog}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/form' component={EnrollmentForm}/>
    </Switch>
    <Footer />
   </Router>
    </div>
  )
}

export default App
