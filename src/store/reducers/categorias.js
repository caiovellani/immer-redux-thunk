import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCattegories: (state, { payload }) => {
      state.push(...payload)
    },
  },
})

export const { addCattegories } = categoriasSlice.actions

export default categoriasSlice.reducer
