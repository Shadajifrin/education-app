// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import CourseHome from './components/CourseHome'
import Price from './components/Price'
import blog from './blog'
import Contact from './Contact'
import EnrollmentForm from './components/EnrollmentForm'
import Login from './components/Login'
import FrontPage from './components/FrontPage'
import LoginForm from './components/LoginForm'
import Forgot from './components/Forgot'
import Reset from './components/Reset'
import AddClass from './components/AddClass'



const App = () => {
  return (
    <div>
   
   <Router>
   <Header />
    <Switch>
    <Route exact path='/' component={FrontPage}/>
     <Route exact path='/home' component={Home}/>
     <Route exact path='/about' component={About}/>
     <Route exact path='/courses' component={CourseHome}/>
     <Route exact path='/team' component={Team}/>
     <Route exact path='/pricing' component={Price}/>
      <Route exact path='/journal' component={blog}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/form' component={EnrollmentForm}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/loginform' component={LoginForm}/>
      <Route exact path='/forgot' component={Forgot}/>
      <Route exact path='/reset' component={Reset}/>
      <Route exact path='/addclass' component={AddClass}/>
      

    </Switch>
  
   </Router>
   
    </div>

  )
}

export default App
