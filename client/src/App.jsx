import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home'

import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
import PostPage from './pages/PostPage'
import  UpdatePost  from './pages/UpdatePost'
import { CreatePost } from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'

function App() {
  

  return (
   
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
            <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/search" element={ <Search/>} />
      <Route element={<PrivateRoute />}>
       <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>


        <Route path="/projects" element={<Project />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

      </Routes>
      <Footer></Footer>
    
    </BrowserRouter>

  )
}

export default App
