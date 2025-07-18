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
  extraReducers: (builder) => {
    builder.addCase(searchCategory.fulfilled, (state, { payload }) => {
      return payload
    })
  },
})

export default categorySlice.reducer
