import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryServices from 'services/categorias'

const initialState = []

export const searchCategory = createAsyncThunk(
  'categorias/buscar',
  categoryServices.search
)

const categorySlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategory: (state, { payload }) => {
      state.push(...payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchCategory.fulfilled, (state, { payload }) => {
      state.push(...payload)
    })
  },
})

export const { addCategory } = categorySlice.actions

export default categorySlice.reducer
