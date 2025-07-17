import instance from 'utils/config/api'

const serviceItens = {
  search: async () => {
    const response = await instance.get('/itens')

    return response.data
  },
}

export default serviceItens
