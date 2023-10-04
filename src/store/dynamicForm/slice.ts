import { createSlice } from '@reduxjs/toolkit'
import { type DynamicFormInitialData } from './types'

const initialState: DynamicFormInitialData = {
  data: {}
}

const dynamicFormSlice = createSlice({
  initialState,
  name: 'dynamicForm',
  reducers: {
    setData(state, action) {
      state.data = action.payload
    }
  }
})

export const { setData } = dynamicFormSlice.actions

export const dynamicForm = dynamicFormSlice.reducer
