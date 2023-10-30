import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm(){
    const {name,cost} = useSelector((state) => state.form);
    console.log(name,cost)
    const disptach = useDispatch();
    const handleNameChange = (event) =>{
        disptach(changeName(event.target.value))
    }
    const handleCostChange = (event) => {
        disptach(changeCost(+event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        disptach(addCar({name,cost}))
    }
    console.log("value changed")
    return (
        <div className="car-form panel">
           <h4 className="subtitle is-3">ADD Car</h4>
           <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" 
                    value={name}
                    onChange={handleNameChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" 
                    value={cost || ''}
                    onChange={handleCostChange}
                    step='any'
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
           </form>
        </div>
    )
}

export default CarForm;