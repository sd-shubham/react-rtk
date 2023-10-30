import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import CarValue from "./CarValue";

function CarList() {

    const {data,searchTerm} = useSelector((state)=> state.cars)

    const cars = useSelector(({cars:{data,searchTerm}})=> {
        return data.filter(x => x.name.includes(searchTerm))
    })
    // const cars2 = useSelector((state)=> {
    //     return {
    //        cars: state.cars,
    //        form: state.form
    //     }
    // })
    console.log(searchTerm,cars);
    const dispatch = useDispatch();
    const handleDeleteCar = (id) => {
        dispatch(removeCar(id))
    }

    console.log(data)

    // const renderCars = data.filter(x => x.name.includes(searchTerm)).map((car) => {
    //     return (
    //         <tr key={car.id}>
    //             <td>{car.name}</td>
    //             <td>{car.cost}</td>
    //             <td>
    //                 <button onClick={()=> handleDeleteCar(car.id)}>Delete</button>
    //             </td>
    //         </tr>
    //     )
    // });
    const renderCars =  cars.map((car) => {
        return (
            <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.cost}</td>
                <td>
                    <button onClick={()=> handleDeleteCar(car.id)}>Delete</button>
                </td>
            </tr>
        )
    });

    const totalCost = cars.reduce((n, {cost}) => n + cost, 0)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCars}
                </tbody>
            </table>
            <CarValue totalCost={totalCost}/>
        </div>
    )
}

export default CarList;