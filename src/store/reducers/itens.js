import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import serviceItens from 'services/itens'
import { v4 as uuid } from 'uuid'

export const searchItens = createAsyncThunk('itens/buscar', serviceItens.search)

const itensSlice = createSlice({
  name: 'itens',
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito
        return item
      })
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() })
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id)
      Object.assign(state[index], payload.item)
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload)
      state.splice(index, 1)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchItens.fulfilled, (state, { payload }) => {
        return payload
      })
      .addCase(searchItens.pending, (state, { payload }) => {
        console.log('carregando itens.')
      })
      .addCase(searchItens.rejected, (state, { payload }) => {
        console.log('carregamento rejeitado.')
      })
  },
})

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem } =
  itensSlice.actions

export default itensSlice.reducer
