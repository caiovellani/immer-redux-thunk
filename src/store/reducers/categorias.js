import { createStandaloneToast } from '@chakra-ui/toast'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryServices from 'services/categorias'

const { toast } = createStandaloneToast()

const initialState = []

export const searchCategory = createAsyncThunk(
  'categorias/buscar',
  categoryServices.search
)

const categorySlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchCategory.fulfilled, (state, { payload }) => {
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso!',
          duration: 2000,
          isClosable: true,
          status: 'success',
        })
        return payload
      })
      .addCase(searchCategory.pending, (state, { payload }) => {
        toast({
          title: 'Carregando!',
          description: 'Carregando categorias!',
          duration: 2000,
          isClosable: true,
          status: 'loading',
        })
        console.log('carregando categorias.')
      })
      .addCase(searchCategory.rejected, (state, { payload }) => {
        toast({
          title: 'Error!',
          description: 'Erro na busca de categorias!',
          duration: 2000,
          isClosable: true,
          status: 'error',
        })
        console.log('busca de categoria rejeitada.')
      })
  },
})

export default categorySlice.reducer
