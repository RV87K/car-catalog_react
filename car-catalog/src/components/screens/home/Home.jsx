// import { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../../../providers/AuthProvider.jsx'
// import { CarService } from '../../../services/car.service.js'
// import CarItem from './car-item/CarItem.jsx'
// import CreateCarForm from './create-car-form/CreateCarForm.jsx'

// function Home() {
// 	const [cars, setCars] = useState([])

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const data = await CarService.getAll()

// 			setCars(data)
// 		}

// 		fetchData()
// 	}, [])

// 	const { user, setUser } = useContext(AuthContext)

// 	return (
// 		<div>
// 			<h1>Cars catalog</h1>

// 			{user ? (
// 				<>
// 					<h2>Welcome, {user.name}!</h2>
// 					<button onClick={() => setUser(null)}>Logout</button>
// 				</>
// 			) : (
// 				<button
// 					onClick={() =>
// 						setUser({
// 							name: 'Max',
// 						})
// 					}
// 				>
// 					Login
// 				</button>
// 			)}

// 			<CreateCarForm setCars={setCars} />
// 			<div>
// 				{cars.length ? (
// 					cars.map(car => <CarItem key={car.id} car={car} />)
// 				) : (
// 					<p>There are no cars</p>
// 				)}
// 			</div>
// 		</div>
// 	)
// }

import { cars } from "./cars.data";
import styles from "./Home.module.css";

//commit
function Home() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {cars.map(car  => (
          <div key={car.id} className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${car.image})`,
              }}
            />
            <div className={styles.info}>
              <h2>{car.name}</h2>
              <p>$100 000</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
