import { configureStore } from "@reduxjs/toolkit";

import {addCar,changeSaerchTerm,removeCar,carsReducer} from './slices/carsSlice';
import {changeName,changeCost,formReducer} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSaerchTerm
}