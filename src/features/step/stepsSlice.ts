import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface StepState{
    step : number,
    type: string,
    pm: string,
    tether: string,
}

const initialState: StepState = {
    step : 0,
    type: '',
    pm: '',
    tether: '',
}


const stepSlice = createSlice ({
    name: 'steps',
    initialState,
    reducers:{
        nextStep: (state) => {
            state.step += 1
        },
        setStep: (state, action : PayloadAction<number>) => {
            state.step = action.payload
        },
        resetStep: (state) => {
            state.step = 0
        }, 
        setType : (state , action : PayloadAction<string>) => {
            state.type = action.payload
        },
        setPM : (state , action : PayloadAction<string>) => {
            state.pm = action.payload
        },
        setTether : (state , action : PayloadAction<string>) => {
            state.tether = action.payload
        },
    }
})


export const {nextStep, setStep, resetStep, setType, setPM, setTether } = stepSlice.actions
export default stepSlice.reducer