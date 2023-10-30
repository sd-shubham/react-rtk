import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name:'cars',
    initialState:{
        searchTerm: '',
        data: []
    },
    reducers:{
        changeSaerchTerm(state,action){
            state.searchTerm = action.payload;
        },
        addCar(state,action){
            state.data.push({...action.payload,id:nanoid()})
            // or
            // state.cars.push({
            //     name: action.payload.name,
            //     cost: action.payload.cost
            // })
        },
        removeCar(state,action){
            state.data = state.data.filter((car) => car.id !== action.payload)
        }
    }
})

export const {addCar,changeSaerchTerm,removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;