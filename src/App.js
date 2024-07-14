import React from 'react'
import SignIn from './Pages/SignIn'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Pages/Home'

function App() {



	return (
		<div className='App'>
			<Routes>
				<Route path='/signin' element={<SignIn />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
