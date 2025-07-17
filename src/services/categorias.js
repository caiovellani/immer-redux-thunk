import instance from 'utils/config/api'

const categoryServices = {
  search: async () => {
    const response = await instance.get('/categorias')

    return response.data
  },
}

export default categoryServices
