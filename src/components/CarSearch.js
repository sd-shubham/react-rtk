import { useDispatch, useSelector } from "react-redux";
import { changeSaerchTerm } from "../store";

function CarSearch(){
const searchTerm =  useSelector((state) => state.cars.searchTerm)
const dispatch = useDispatch();
const handleSearchInputChange = (event) => {
    dispatch(changeSaerchTerm(event.target.value))
}
    return (
        <div>
           <div>
            <label>Saerch:</label>
            <input type="text" value={searchTerm} onChange={handleSearchInputChange}/>
           </div>
        </div>
    )
}

export default CarSearch;