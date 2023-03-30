import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarDetail from './screens/car-detail/CarDetail'
import Home from './screens/home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<CarDetail />} path='/car/:id' />

				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
